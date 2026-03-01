import { Button, Card, CardBody, CardHeader } from '@/components/ui';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="from-background to-secondary/10 bg-gradient-to-b py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
              构建<span className="text-primary">现代化</span>Web 应用
            </h1>

            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl">
              一个生产就绪的 Next.js 16 SSR
              模板，集成完整的技术栈和工程化配置，让您快速启动高质量项目
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button color="primary" size="lg">
                快速开始
                <span className="ml-2">→</span>
              </Button>
              <Button variant="bordered" size="lg">
                查看文档
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">强大的功能特性</h2>
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
                features: ['React 19', 'TypeScript 5.7', 'Tailwind CSS 4', 'HeroUI'],
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
                className="group bg-card text-card-foreground transition-all duration-300 hover:shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 inline-flex rounded-lg p-3 transition-colors">
                    <span className="text-primary text-2xl font-bold">✦</span>
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </CardHeader>
                <CardBody>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-center text-sm">
                        <span className="text-primary mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="bg-gray-50 py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">快速开始</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              简单几步，即可开始开发您的应用
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              {[
                { title: '安装依赖', code: 'pnpm install' },
                { title: '启动开发服务器', code: 'pnpm dev' },
                { title: '构建生产版本', code: 'pnpm build' },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-primary text-xl">⚡</span>
                    <h3 className="text-foreground text-lg font-semibold">{step.title}</h3>
                  </div>
                  <div className="overflow-x-auto rounded-lg bg-gray-100 p-3 font-mono text-sm dark:bg-gray-800">
                    <code className="text-foreground">{step.code}</code>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-lg border p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-primary text-2xl">📁</span>
                <h3 className="text-foreground text-xl font-semibold">项目架构</h3>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'App Router', description: '现代化路由系统' },
                  { name: 'Server Components', description: '服务端组件' },
                  { name: 'TypeScript', description: '类型安全' },
                  { name: 'Tailwind CSS', description: '响应式设计' },
                  { name: 'HeroUI', description: '精美组件' },
                  { name: 'Jest + Cypress', description: '完整测试' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="from-background to-secondary/10 bg-gradient-to-t py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-foreground mb-6 text-3xl font-bold sm:text-4xl">
              准备好开始了吗？
            </h2>
            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg">
              立即使用这个强大的 Next.js 16 模板，构建您的下一个项目
            </p>
            <Button color="primary" size="lg">
              下载模板
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
