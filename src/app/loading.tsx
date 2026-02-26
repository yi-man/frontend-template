'use client';

import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="container-custom flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary">
          <Loader2 className="h-10 w-10 animate-spin" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">正在加载</h2>
          <p className="text-muted-foreground">
            请稍候，我们正在为您准备内容...
          </p>
        </div>
      </div>
    </div>
  );
}
