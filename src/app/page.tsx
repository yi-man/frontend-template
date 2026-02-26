import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-center text-4xl font-bold">Next.js 16 SSR Template</h1>
        <p className="mb-12 text-center text-xl text-gray-600">
          一个现代化、生产就绪的 Next.js 16 SSR 模板，包含完整的技术栈和工程化配置
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>技术栈</CardTitle>
              <CardDescription>使用最新的前端技术</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Next.js 16 App Router</li>
                <li>• React 19</li>
                <li>• TypeScript 5.7</li>
                <li>• Tailwind CSS 4</li>
                <li>• shadcn/ui 3.8</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>功能特性</CardTitle>
              <CardDescription>生产就绪的配置</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• 服务端渲染 (SSR)</li>
                <li>• 深色/浅色主题切换</li>
                <li>• 完整的代码规范流程</li>
                <li>• 测试配置 (Jest + Cypress)</li>
                <li>• 工程化配置</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>代码规范</CardTitle>
              <CardDescription>统一的代码风格</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• ESLint 9</li>
                <li>• Prettier</li>
                <li>• Husky + Lint-Staged</li>
                <li>• Commitlint</li>
                <li>• 统一的代码风格配置</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>开发体验</CardTitle>
              <CardDescription>优化的开发流程</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• 热重载和快速刷新</li>
                <li>• 类型安全开发</li>
                <li>• 组件库支持</li>
                <li>• 模拟数据支持</li>
                <li>• 自动化测试</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">开始使用</h2>
          <div className="rounded-lg bg-gray-100 p-6 text-left font-mono text-sm">
            <p className="mb-2"># 安装依赖</p>
            <p className="mb-4">pnpm install</p>

            <p className="mb-2"># 启动开发服务器</p>
            <p className="mb-4">pnpm dev</p>

            <p className="mb-2"># 构建生产版本</p>
            <p className="mb-4">pnpm build</p>

            <p className="mb-2"># 运行生产服务器</p>
            <p>pnpm start</p>
          </div>
        </div>
      </div>
    </div>
  );
}
