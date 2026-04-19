import type { Metadata } from 'next';
import { ChatDemo } from '@/components/chat/chat-demo';

export const metadata: Metadata = {
  title: 'AI 对话 | Next.js 16 SSR 模板',
  description: 'LangChain + LangGraph 与 Vercel AI SDK 聊天演示',
};

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight">大模型对话演示</h1>
          <p className="text-muted-foreground text-sm">
            配置 <code className="bg-muted rounded px-1 py-0.5 text-xs">OPENAI_API_KEY</code>{' '}
            后即可调用真实模型；未配置时接口返回离线提示文案。
          </p>
        </div>
        <ChatDemo />
      </div>
    </div>
  );
}
