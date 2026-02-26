'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container-custom flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary">
            <span className="text-4xl font-bold">404</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            页面未找到
          </h1>
          <p className="text-lg text-muted-foreground">
            很抱歉，您访问的页面不存在或已被移动。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回首页
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">联系我们</Link>
          </Button>
        </div>

        <div className="pt-8">
          <h2 className="text-sm font-medium text-muted-foreground mb-4">
            可能的原因：
          </h2>
          <ul className="text-sm text-muted-foreground space-y-1 text-left">
            <li>• 页面链接已过期</li>
            <li>• 页面已被重命名或删除</li>
            <li>• 输入的URL有误</li>
            <li>• 该页面可能需要特定权限才能访问</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
