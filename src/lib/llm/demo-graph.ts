import { ChatOpenAI } from '@langchain/openai';
import { END, MessagesAnnotation, START, StateGraph } from '@langchain/langgraph';
import type { BaseMessage } from '@langchain/core/messages';
import { SystemMessage } from '@langchain/core/messages';
import { env } from '@/lib/env';

const DEMO_SYSTEM = new SystemMessage(
  '你是一个简洁友好的助手，正在演示 Next.js 模板中的 LangChain + LangGraph 聊天接口。用中文回答，除非用户要求其他语言。',
);

export function hasLlmConfig(): boolean {
  return Boolean(env.OPENAI_API_KEY?.trim());
}

function createChatModel(): ChatOpenAI {
  const key = env.OPENAI_API_KEY?.trim();
  if (!key) {
    throw new Error('OPENAI_API_KEY is not configured');
  }
  return new ChatOpenAI({
    apiKey: key,
    model: env.OPENAI_MODEL,
    temperature: 0.7,
    streaming: true,
    configuration: {
      baseURL: env.OPENAI_BASE_URL.replace(/\/$/, ''),
    },
  });
}

/** 单节点 LangGraph：START → llm → END，用于展示图编排结构。 */
export function buildDemoChatGraph(model: ChatOpenAI) {
  async function llmNode(state: typeof MessagesAnnotation.State) {
    const response = await model.invoke(state.messages);
    return { messages: [response] };
  }

  return new StateGraph(MessagesAnnotation)
    .addNode('llm', llmNode)
    .addEdge(START, 'llm')
    .addEdge('llm', END)
    .compile();
}

/** 流式输出：在完整对话上下文上调用同一模型（与图中 llm 节点一致），便于 SSE 推送到前端。 */
export async function* streamDemoAssistant(
  history: BaseMessage[],
): AsyncGenerator<string, void, undefined> {
  const model = createChatModel();
  const messages: BaseMessage[] = [DEMO_SYSTEM, ...history];
  const stream = await model.stream(messages);
  for await (const chunk of stream) {
    const c = chunk.content;
    if (typeof c === 'string' && c.length > 0) {
      yield c;
    } else if (Array.isArray(c)) {
      for (const part of c) {
        if (part && typeof part === 'object' && 'text' in part && typeof part.text === 'string') {
          yield part.text;
        }
      }
    }
  }
}
