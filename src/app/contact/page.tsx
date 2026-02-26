import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">联系我们</h1>
        <p className="mb-12 text-xl text-gray-600">
          如有任何问题或建议，请随时联系我们。我们将竭诚为您服务。
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>联系信息</CardTitle>
              <CardDescription>我们的联系方式</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">邮箱</h3>
                  <p className="text-muted-foreground">contact@example.com</p>
                </div>
                <div>
                  <h3 className="font-medium">电话</h3>
                  <p className="text-muted-foreground">+86 123 4567 8900</p>
                </div>
                <div>
                  <h3 className="font-medium">地址</h3>
                  <p className="text-muted-foreground">
                    北京市朝阳区建国路88号
                    <br />
                    现代城A座1001室
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">工作时间</h3>
                  <p className="text-muted-foreground">
                    周一至周五: 9:00 - 18:00
                    <br />
                    周六至周日: 10:00 - 17:00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>发送消息</CardTitle>
              <CardDescription>请填写以下表单，我们会尽快回复您。</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" placeholder="请输入您的姓名" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱</Label>
                  <Input id="email" type="email" placeholder="请输入您的邮箱" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">主题</Label>
                  <Input id="subject" placeholder="请输入消息主题" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">消息</Label>
                  <Textarea id="message" rows={5} placeholder="请输入您的消息" />
                </div>
                <Button type="submit" className="w-full">
                  发送消息
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">我们的位置</h2>
          <div className="flex h-80 items-center justify-center rounded-lg bg-gray-100">
            <p className="text-muted-foreground">地图占位符</p>
          </div>
        </div>
      </div>
    </div>
  );
}
