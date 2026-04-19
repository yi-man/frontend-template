import {
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  safeValidateUIMessages,
} from 'ai';
import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';
import { hasLlmConfig, streamDemoAssistant } from '@/lib/llm/demo-graph';
import { modelMessagesToLc } from '@/lib/llm/to-lc-messages';

export const runtime = 'nodejs';

async function* mockAssistantStream(): AsyncGenerator<string, void, undefined> {
  const text =
    '当前为演示模式：未检测到 OPENAI_API_KEY。请在项目根目录添加 .env.local（可参考仓库内 .env.example，或从 hiring-agent 项目复制兼容变量），然后重启开发服务器。';
  for (let i = 0; i < text.length; i += 6) {
    yield text.slice(i, i + 6);
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { messages?: unknown };
    const validated = await safeValidateUIMessages({ messages: body.messages ?? [] });
    if (!validated.success) {
      return NextResponse.json(
        { error: 'Invalid messages', details: validated.error.message },
        { status: 400 },
      );
    }

    const uiMessages = validated.data;
    const modelMessages = await convertToModelMessages(
      uiMessages.map((m) => {
        const { id, ...rest } = m;
        void id;
        return rest;
      }),
    );
    const lcMessages = modelMessagesToLc(modelMessages);

    const stream = createUIMessageStream({
      execute: async ({ writer }) => {
        const textId = randomUUID();
        writer.write({ type: 'text-start', id: textId });
        const iterable = hasLlmConfig() ? streamDemoAssistant(lcMessages) : mockAssistantStream();
        for await (const delta of iterable) {
          writer.write({ type: 'text-delta', id: textId, delta });
        }
        writer.write({ type: 'text-end', id: textId });
      },
    });

    return createUIMessageStreamResponse({ stream });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
