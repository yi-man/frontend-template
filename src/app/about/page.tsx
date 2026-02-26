import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">关于我们</h1>
        <p className="mb-12 text-xl text-gray-600">
          我们是一个专注于现代 Web 开发的团队，致力于提供高质量的技术解决方案。
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>我们的使命</CardTitle>
              <CardDescription>提供出色的 Web 开发体验</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                我们的使命是通过使用最新的技术和最佳实践，为用户提供出色的 Web 开发体验。
                我们相信，优秀的技术应该是简单、直观且强大的。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>我们的愿景</CardTitle>
              <CardDescription>成为领先的 Web 开发团队</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                我们的愿景是成为领先的 Web 开发团队，通过创新和卓越的技术能力，
                帮助客户实现他们的业务目标。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>我们的价值观</CardTitle>
              <CardDescription>指导我们工作的原则</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• 质量第一</li>
                <li>• 持续学习</li>
                <li>• 团队合作</li>
                <li>• 创新思维</li>
                <li>• 客户导向</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>我们的团队</CardTitle>
              <CardDescription>专业的开发人员</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                我们的团队由经验丰富的开发人员组成，他们在各种技术领域拥有深厚的专业知识。
                我们致力于为用户提供最佳的技术支持和服务。
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">联系我们</h2>
          <p className="mb-6">如有任何问题或建议，请随时联系我们。我们将竭诚为您服务。</p>
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
