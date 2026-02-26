import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">我们的服务</h1>
        <p className="mb-12 text-xl text-gray-600">
          我们提供各种高质量的 Web 开发服务，帮助客户实现他们的业务目标。
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Web 开发</CardTitle>
              <CardDescription>定制化的 Web 应用开发</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                我们提供定制化的 Web 应用开发服务，根据客户的需求和业务目标， 开发高质量、高性能的
                Web 应用程序。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>前端开发</CardTitle>
              <CardDescription>现代化的前端解决方案</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                我们专注于使用最新的前端技术，开发响应式、高性能的用户界面， 提供出色的用户体验。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>后端开发</CardTitle>
              <CardDescription>强大的后端架构</CardDescription>
            </CardHeader>
            <CardContent>
              <p>我们设计和开发强大的后端架构，确保应用程序的可靠性、可扩展性和安全性。</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>移动应用开发</CardTitle>
              <CardDescription>跨平台的移动应用</CardDescription>
            </CardHeader>
            <CardContent>
              <p>我们开发跨平台的移动应用，支持 iOS 和 Android 设备， 提供一致的用户体验。</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>UI/UX 设计</CardTitle>
              <CardDescription>出色的用户界面设计</CardDescription>
            </CardHeader>
            <CardContent>
              <p>我们提供专业的 UI/UX 设计服务，帮助客户创建直观、美观和易用的用户界面。</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>技术咨询</CardTitle>
              <CardDescription>专业的技术建议</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                我们提供专业的技术咨询服务，帮助客户选择合适的技术方案，
                优化现有系统的性能和可扩展性。
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">开始您的项目</h2>
          <p className="mb-6">无论您的项目大小，我们都将为您提供最佳的技术支持和服务。</p>
          <a
            href="/contact"
            className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm"
          >
            联系我们
          </a>
        </div>
      </div>
    </div>
  );
}
