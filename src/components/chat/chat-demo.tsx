'use client';

import { useChat } from '@ai-sdk/react';
import { Button, Card, CardBody, CardHeader } from '@/components/ui';
import { SendHorizontal } from 'lucide-react';
import { useRef, useEffect } from 'react';

export function ChatDemo() {
  const endRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, status, error, stop } = useChat();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Card className="border-border/80 w-full max-w-3xl shadow-lg">
      <CardHeader className="flex flex-col gap-1 border-b pb-4">
        <h2 className="text-xl font-semibold">AI 对话演示</h2>
        <p className="text-muted-foreground text-sm">
          后端：LangChain + LangGraph（OpenAI 兼容接口）；前端：Vercel AI
          SDK。无数据库，仅会话内消息。
        </p>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <div className="bg-muted/40 border-border/60 max-h-[min(420px,55vh)] min-h-[200px] space-y-3 overflow-y-auto rounded-lg border p-4">
          {messages.length === 0 ? (
            <p className="text-muted-foreground text-sm">输入一条消息开始对话。</p>
          ) : (
            messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === 'user'
                    ? 'bg-primary text-primary-foreground ml-auto max-w-[85%] rounded-2xl px-4 py-2'
                    : 'bg-secondary/80 text-secondary-foreground max-w-[85%] rounded-2xl px-4 py-2'
                }
              >
                <div className="mb-1 text-xs font-medium opacity-70">
                  {m.role === 'user' ? '你' : '助手'}
                </div>
                <div className="text-sm whitespace-pre-wrap">
                  {m.parts.map((part, i) =>
                    part.type === 'text' ? <span key={i}>{part.text}</span> : null,
                  )}
                </div>
              </div>
            ))
          )}
          <div ref={endRef} />
        </div>

        {error ? (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            {error.message}
          </p>
        ) : null}

        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const field = form.elements.namedItem('message') as HTMLInputElement;
            const text = field.value.trim();
            if (!text || status === 'streaming' || status === 'submitted') {
              return;
            }
            void sendMessage({ text });
            field.value = '';
          }}
        >
          <input
            name="message"
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex-1 rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50"
            placeholder="输入消息…"
            autoComplete="off"
            disabled={status === 'streaming' || status === 'submitted'}
          />
          {status === 'streaming' || status === 'submitted' ? (
            <Button type="button" variant="bordered" onClick={() => void stop()}>
              停止
            </Button>
          ) : null}
          <Button
            type="submit"
            isDisabled={status === 'streaming' || status === 'submitted'}
            color="primary"
            endContent={<SendHorizontal className="h-4 w-4" />}
          >
            发送
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
