import { test, expect } from '@playwright/test';

test.describe('首页', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('应该显示页面标题', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page).toHaveTitle(/Next\.js/);
  });

  test('应该能切换主题', async ({ page }) => {
    const toggle = page.getByTestId('theme-toggle').first();
    await toggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await toggle.click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });

  test('应该响应式布局', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.getByRole('navigation')).toBeVisible();
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByRole('navigation')).toBeVisible();
  });
});
