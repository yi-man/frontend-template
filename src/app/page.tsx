import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-blue-600">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
              全新 Next.js 16 模板
            </div>

            <h1 className="mb-8 text-5xl leading-tight font-bold tracking-tight sm:text-6xl lg:text-7xl">
              构建<span className="text-blue-600">现代化</span>Web 应用
            </h1>

            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              一个生产就绪的 Next.js 16 SSR
              模板，集成完整的技术栈和工程化配置，让您快速启动高质量项目
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700">
                快速开始
                <span className="ml-2">→</span>
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-gray-50">
                查看文档
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">强大的功能特性</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              集成现代 Web 开发最佳实践，提供完整的开发、测试和部署流程
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: '极速开发',
                description: '使用 Next.js 16 App Router 和 Turbopack，体验闪电般的开发速度',
                features: ['App Router 架构', 'Turbopack 加速', '热重载支持', '快速刷新'],
              },
              {
                title: '完整技术栈',
                description: '集成 React 19、TypeScript 5.7 和 Tailwind CSS 4，构建高质量应用',
                features: ['React 19', 'TypeScript 5.7', 'Tailwind CSS 4', 'shadcn/ui'],
              },
              {
                title: '精美设计',
                description: '支持深色/浅色主题切换，响应式设计适配所有设备',
                features: ['主题切换', '响应式布局', '视觉优化', '动画效果'],
              },
              {
                title: '代码规范',
                description: '完整的代码质量保证体系，确保代码风格一致',
                features: ['ESLint 9', 'Prettier', 'Husky', 'Commitlint'],
              },
              {
                title: '工程化配置',
                description: '生产就绪的配置，包含测试、构建和部署流程',
                features: ['Jest 测试', 'Cypress E2E', 'CI/CD 配置', '性能优化'],
              },
              {
                title: '版本控制',
                description: '完整的 Git 工作流程，确保团队协作高效',
                features: ['提交规范', '分支管理', '代码评审', '自动化检查'],
              },
            ].map((feature, index) => (
              <Card key={index} className="group transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-4">
                  <div className="mb-4 inline-flex rounded-lg bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                    <span className="text-2xl font-bold text-blue-600">✦</span>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="mr-2 text-blue-600">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">快速开始</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              简单几步，即可开始开发您的应用
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xl text-blue-600">⚡</span>
                  <h3 className="text-lg font-semibold">安装依赖</h3>
                </div>
                <div className="overflow-x-auto rounded-lg bg-gray-50 p-4 font-mono text-sm">
                  <code>pnpm install</code>
                </div>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xl text-blue-600">⚡</span>
                  <h3 className="text-lg font-semibold">启动开发服务器</h3>
                </div>
                <div className="overflow-x-auto rounded-lg bg-gray-50 p-4 font-mono text-sm">
                  <code>pnpm dev</code>
                </div>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xl text-blue-600">⚡</span>
                  <h3 className="text-lg font-semibold">构建生产版本</h3>
                </div>
                <div className="overflow-x-auto rounded-lg bg-gray-50 p-4 font-mono text-sm">
                  <code>pnpm build</code>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl text-blue-600">📁</span>
                <h3 className="text-xl font-semibold">项目架构</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100">
                  <span className="font-medium">App Router</span>
                  <span className="text-sm text-gray-600">现代化路由系统</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100">
                  <span className="font-medium">Server Components</span>
                  <span className="text-sm text-gray-600">服务端组件</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100">
                  <span className="font-medium">TypeScript</span>
                  <span className="text-sm text-gray-600">类型安全</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100">
                  <span className="font-medium">Tailwind CSS</span>
                  <span className="text-sm text-gray-600">响应式设计</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100">
                  <span className="font-medium">shadcn/ui</span>
                  <span className="text-sm text-gray-600">精美组件</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100">
                  <span className="font-medium">Jest + Cypress</span>
                  <span className="text-sm text-gray-600">完整测试</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">准备好开始了吗？</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
              立即使用这个强大的 Next.js 16 模板，构建您的下一个项目
            </p>
            <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700">
              下载模板
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
