import { test, expect } from '@playwright/test';

test.describe('AI 对话页', () => {
  test('应展示聊天演示界面', async ({ page }) => {
    await page.goto('/chat');
    await expect(page.getByRole('heading', { name: '大模型对话演示' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'AI 对话演示' })).toBeVisible();
    await expect(page.getByPlaceholder('输入消息…')).toBeVisible();
  });
});
