'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowLeft, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 记录错误信息
    console.error('应用程序错误:', error);
  }, [error]);

  return (
    <div className="container-custom flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 text-destructive">
            <AlertCircle className="h-10 w-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            应用程序出错
          </h1>
          <p className="text-lg text-muted-foreground">
            很抱歉，应用程序在处理您的请求时遇到了问题。
          </p>
          <p className="text-sm text-destructive bg-destructive/10 px-4 py-2 rounded-lg inline-block">
            错误信息：{error.message}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg">
            <RefreshCw className="mr-2 h-4 w-4" />
            重试
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回首页
            </Link>
          </Button>
        </div>

        {error.digest && (
          <div className="pt-8 border-t">
            <p className="text-xs text-muted-foreground">
              错误ID: <code className="font-mono">{error.digest}</code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
