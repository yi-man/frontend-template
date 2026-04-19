import { test, expect } from '@playwright/test';

test.describe('联系页面', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('应该显示页面标题和描述', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('联系我们');
    await expect(page.getByText(/如有任何问题或建议，请随时联系我们/)).toBeVisible();
  });

  test('应该显示联系信息卡片', async ({ page }) => {
    await expect(page.getByText('联系信息')).toBeVisible();
    await expect(page.getByText('我们的联系方式')).toBeVisible();
    await expect(page.getByText('contact@example.com').first()).toBeVisible();
    await expect(page.getByText('+86 123 4567 8900').first()).toBeVisible();
    await expect(page.getByText(/北京市朝阳区建国路88号/)).toBeVisible();
    await expect(page.getByText(/周一至周五: 9:00 - 18:00/)).toBeVisible();
  });

  test('应该显示发送消息表单', async ({ page }) => {
    await expect(page.getByRole('heading', { name: '发送消息' })).toBeVisible();
    await expect(page.getByText('请填写以下表单，我们会尽快回复您')).toBeVisible();
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#subject')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.getByRole('button', { name: '发送消息' })).toBeVisible();
  });

  test('表单应该能正常输入', async ({ page }) => {
    await page.locator('#name').fill('张三');
    await page.locator('#email').fill('zhangsan@example.com');
    await page.locator('#subject').fill('关于网站的问题');
    await page.locator('#message').fill('我有一个关于网站功能的问题，希望得到您的帮助');

    await expect(page.locator('#name')).toHaveValue('张三');
    await expect(page.locator('#email')).toHaveValue('zhangsan@example.com');
    await expect(page.locator('#subject')).toHaveValue('关于网站的问题');
    await expect(page.locator('#message')).toHaveValue(
      '我有一个关于网站功能的问题，希望得到您的帮助',
    );
  });

  test('应该有位置信息', async ({ page }) => {
    await expect(page.getByText('我们的位置')).toBeVisible();
    await expect(page.locator('.bg-gray-100')).toBeVisible();
    await expect(page.getByText('地图占位符')).toBeVisible();
  });

  test('导航应该能正常工作', async ({ page }) => {
    await expect(page.getByRole('navigation')).toBeVisible();
    await page.getByRole('navigation').getByRole('link', { name: '首页' }).click();
    await expect(page).toHaveURL('/');
  });

  test('应该响应式布局', async ({ page }) => {
    const grid = page.locator('.grid').first();
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(grid).toBeVisible();
    const wide = await grid.evaluate((el) => getComputedStyle(el).gridTemplateColumns);

    await page.setViewportSize({ width: 375, height: 667 });
    await expect(grid).toBeVisible();
    const narrow = await grid.evaluate((el) => getComputedStyle(el).gridTemplateColumns);
    expect(wide).not.toEqual(narrow);
  });

  test('应该显示页脚', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.getByText('Next.js 16 SSR Template')).toBeVisible();
  });

  test('发送消息按钮应该能点击', async ({ page }) => {
    const submit = page.getByRole('button', { name: '发送消息' });
    await expect(submit).toBeVisible();
    await expect(submit).toBeEnabled();
  });

  test('表单验证应该正常工作', async () => {
    // 预留：空值提交、无效邮箱格式等
  });
});
