import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Background Gradients */}
        <div className="from-primary/10 via-secondary/5 absolute inset-0 bg-gradient-to-br to-transparent" />
        <div className="from-primary/5 absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l to-transparent" />

        {/* Floating Shapes */}
        <div className="bg-primary/10 absolute -top-24 -left-24 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        <div className="bg-secondary/10 absolute right-0 bottom-0 h-64 w-64 animate-pulse rounded-full blur-3xl delay-1000" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-primary/10 text-primary animate-in fade-in slide-in-from-bottom-4 mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium duration-700">
              <span className="bg-primary inline-block h-2 w-2 animate-ping rounded-full" />
              全新 Next.js 16 模板
            </div>

            <h1 className="animate-in fade-in slide-in-from-bottom-6 mb-8 text-5xl leading-tight font-bold tracking-tight delay-100 duration-700 sm:text-6xl lg:text-7xl">
              构建<span className="text-primary">现代化</span>Web 应用
            </h1>

            <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-8 mx-auto mb-12 max-w-2xl text-lg leading-relaxed delay-200 duration-700 sm:text-xl">
              一个生产就绪的 Next.js 16 SSR
              模板，集成完整的技术栈和工程化配置，让您快速启动高质量项目
            </p>

            <div className="animate-in fade-in slide-in-from-bottom-10 flex flex-col justify-center gap-4 delay-300 duration-700 sm:flex-row">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                快速开始
                <span className="ml-2">→</span>
              </button>
              <button className="bg-background border-input hover:bg-accent inline-flex items-center justify-center rounded-xl border px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105">
                查看文档
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background/50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">强大的功能特性</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
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
              <Card
                key={index}
                className="group transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 inline-flex rounded-lg p-3 transition-colors">
                    <span className="text-primary text-2xl font-bold">✦</span>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-center text-sm">
                        <span className="text-primary mr-2">✓</span>
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
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">快速开始</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              简单几步，即可开始开发您的应用
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="bg-card rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-primary text-xl">⚡</span>
                  <h3 className="text-lg font-semibold">安装依赖</h3>
                </div>
                <div className="bg-muted/50 overflow-x-auto rounded-lg p-4 font-mono text-sm">
                  <code>pnpm install</code>
                </div>
              </div>

              <div className="bg-card rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-primary text-xl">⚡</span>
                  <h3 className="text-lg font-semibold">启动开发服务器</h3>
                </div>
                <div className="bg-muted/50 overflow-x-auto rounded-lg p-4 font-mono text-sm">
                  <code>pnpm dev</code>
                </div>
              </div>

              <div className="bg-card rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-primary text-xl">⚡</span>
                  <h3 className="text-lg font-semibold">构建生产版本</h3>
                </div>
                <div className="bg-muted/50 overflow-x-auto rounded-lg p-4 font-mono text-sm">
                  <code>pnpm build</code>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-primary text-2xl">📁</span>
                <h3 className="text-xl font-semibold">项目架构</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-muted/50 hover:bg-muted flex items-center justify-between rounded-lg p-3 transition-colors">
                  <span className="font-medium">App Router</span>
                  <span className="text-muted-foreground text-sm">现代化路由系统</span>
                </div>
                <div className="bg-muted/50 hover:bg-muted flex items-center justify-between rounded-lg p-3 transition-colors">
                  <span className="font-medium">Server Components</span>
                  <span className="text-muted-foreground text-sm">服务端组件</span>
                </div>
                <div className="bg-muted/50 hover:bg-muted flex items-center justify-between rounded-lg p-3 transition-colors">
                  <span className="font-medium">TypeScript</span>
                  <span className="text-muted-foreground text-sm">类型安全</span>
                </div>
                <div className="bg-muted/50 hover:bg-muted flex items-center justify-between rounded-lg p-3 transition-colors">
                  <span className="font-medium">Tailwind CSS</span>
                  <span className="text-muted-foreground text-sm">响应式设计</span>
                </div>
                <div className="bg-muted/50 hover:bg-muted flex items-center justify-between rounded-lg p-3 transition-colors">
                  <span className="font-medium">shadcn/ui</span>
                  <span className="text-muted-foreground text-sm">精美组件</span>
                </div>
                <div className="bg-muted/50 hover:bg-muted flex items-center justify-between rounded-lg p-3 transition-colors">
                  <span className="font-medium">Jest + Cypress</span>
                  <span className="text-muted-foreground text-sm">完整测试</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="from-background to-accent/50 bg-gradient-to-b py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">准备好开始了吗？</h2>
            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg">
              立即使用这个强大的 Next.js 16 模板，构建您的下一个项目
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              下载模板
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
