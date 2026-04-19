import { test, expect } from '@playwright/test';

test.describe('博客页面', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('应该显示页面标题和描述', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('博客');
    await expect(
      page.getByText('分享关于 Next.js、React、TypeScript 等技术的文章和教程'),
    ).toBeVisible();
  });

  test('应该显示博客文章列表', async ({ page }) => {
    expect(await page.locator('a[href^="/blog/"]').count()).toBeGreaterThanOrEqual(6);
  });

  test('应该显示文章的基本信息', async ({ page }) => {
    await expect(page.locator('a[href="/blog/nextjs-16-new-features"]')).toBeVisible();
    await expect(page.getByText('Next.js 16 新特性介绍').first()).toBeVisible();
    await expect(page.getByText('张三').first()).toBeVisible();
    await expect(page.getByText('2026-02-20').first()).toBeVisible();
  });

  test('应该正确导航到博客文章详情页', async ({ page }) => {
    await page.locator('a[href="/blog/nextjs-16-new-features"]').click();
    await expect(page).toHaveURL(/\/blog\/nextjs-16-new-features/);
    await expect(page.locator('h1')).toContainText('Next.js 16 新特性介绍');
  });

  test('应该显示文章详情页的内容', async ({ page }) => {
    await page.goto('/blog/nextjs-16-new-features');

    await expect(page.locator('h1')).toContainText('Next.js 16 新特性介绍');
    await expect(page.locator('.prose')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'App Router 的优化' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '性能提升' })).toBeVisible();
    await expect(page.getByRole('link', { name: /返回博客/ })).toBeVisible();
  });

  test('应该显示相关文章', async ({ page }) => {
    await page.goto('/blog/nextjs-16-new-features');

    await expect(page.getByRole('heading', { name: '相关文章' })).toBeVisible();
    const relatedGrid = page
      .getByRole('heading', { name: '相关文章' })
      .locator('xpath=following-sibling::div[contains(@class,"grid")]')
      .first();
    await expect(relatedGrid).toBeVisible();
    await expect(relatedGrid.locator('a[href^="/blog/"]')).toHaveCount(2);
  });

  test('应该有订阅表单', async ({ page }) => {
    await expect(page.getByRole('heading', { name: '订阅我们的博客' })).toBeVisible();
    await expect(
      page.locator('form').filter({ has: page.locator('input[type="email"]') }),
    ).toBeVisible();
    await expect(page.locator('input[type="email"]').first()).toBeVisible();
    await expect(page.getByRole('button', { name: '订阅' })).toBeVisible();
  });

  test('订阅表单应该能正常工作', async ({ page }) => {
    const section = page
      .locator('form')
      .filter({ has: page.getByRole('button', { name: '订阅' }) });
    await section.locator('input[type="email"]').fill('test@example.com');
    await section.getByRole('button', { name: '订阅' }).click();
  });

  test('应该响应式布局', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.locator('.grid').first()).toBeVisible();

    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('.grid').first()).toBeVisible();
    await expect(page.locator('a[href^="/blog/"]').first()).toBeVisible();
  });

  test('导航应该能正常工作', async ({ page }) => {
    await expect(page.getByRole('navigation')).toBeVisible();
    await page.getByRole('navigation').getByRole('link', { name: '首页' }).click();
    await expect(page).toHaveURL('/');
  });
});
