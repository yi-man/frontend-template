import type { ModelMessage } from 'ai';
import { AIMessage, BaseMessage, HumanMessage, SystemMessage } from '@langchain/core/messages';

function contentToString(content: ModelMessage['content']): string {
  if (typeof content === 'string') {
    return content;
  }
  if (!Array.isArray(content)) {
    return '';
  }
  return content
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text' && 'text' in p)
    .map((p) => p.text)
    .join('');
}

/** 将 AI SDK `ModelMessage[]` 转为 LangChain `BaseMessage[]`（演示用：忽略 tool 等复杂角色）。 */
export function modelMessagesToLc(messages: ModelMessage[]): BaseMessage[] {
  const out: BaseMessage[] = [];
  for (const m of messages) {
    if (m.role === 'system') {
      out.push(new SystemMessage(contentToString(m.content)));
    } else if (m.role === 'user') {
      out.push(new HumanMessage(contentToString(m.content)));
    } else if (m.role === 'assistant') {
      out.push(new AIMessage(contentToString(m.content)));
    }
  }
  return out;
}
