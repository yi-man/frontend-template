import { describe, it, expect, jest } from 'bun:test';
import { parseEnv, env } from '@/lib/env';

describe('env.ts - 环境变量解析', () => {
  describe('导出的默认环境变量', () => {
    it('验证导出的 env 变量', () => {
      expect(env).toBeDefined();
      expect(typeof env).toBe('object');
      expect(env.NEXT_PUBLIC_API_BASE_URL).toBeDefined();
    });
  });

  describe('parseEnv 函数', () => {
    it('正确解析默认环境变量', () => {
      const result = parseEnv({});
      expect(result.NEXT_PUBLIC_API_BASE_URL).toBe('/api');
      expect(result.OPENAI_MODEL).toBe('gpt-4o-mini');
    });

    it('正确解析 API 超时配置', () => {
      const result = parseEnv({});
      expect(typeof result.API_TIMEOUT).toBe('number');
      expect(result.API_TIMEOUT).toBeGreaterThan(0);
    });

    it('正确解析布尔值配置', () => {
      const result = parseEnv({});
      expect(typeof result.NEXT_PUBLIC_ENABLE_DEBUG).toBe('boolean');
    });

    it('正确处理无效环境变量（ZodError）', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      const result = parseEnv({
        API_TIMEOUT: 'not-a-number',
      });

      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();

      expect(result.NEXT_PUBLIC_API_BASE_URL).toBe('/api');
      expect(typeof result.API_TIMEOUT).toBe('number');
    });

    it('正确处理非 ZodError 类型的错误', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      const invalidInput = Object.create(null, {
        NEXT_PUBLIC_API_BASE_URL: {
          get() {
            throw new Error('Non-Zod error');
          },
          enumerable: true,
        },
      });

      const result = parseEnv(invalidInput as unknown as Record<string, string>);

      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();

      expect(result.NEXT_PUBLIC_API_BASE_URL).toBe('/api');
      expect(typeof result.API_TIMEOUT).toBe('number');
    });
  });
});
