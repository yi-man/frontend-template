import { test, expect } from '@playwright/test';

test.describe('布局', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('应该显示头部导航', async ({ page }) => {
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(
      page.getByRole('navigation').getByText('Next.js 16', { exact: true }),
    ).toBeVisible();
  });

  test('应该显示导航菜单', async ({ page }) => {
    await expect(page.getByRole('link', { name: '首页' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: '关于' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: '服务' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: '博客' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: '联系' }).first()).toBeVisible();
  });

  test('应该显示页脚', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.getByText('Next.js 16 SSR Template')).toBeVisible();
  });

  test('应该正确加载字体', async ({ page }) => {
    await expect(page.locator('body')).toHaveCSS('font-family', /ui-sans-serif|Inter/);
  });
});
