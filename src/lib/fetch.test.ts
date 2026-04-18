import { describe, it, expect, jest, mock } from 'bun:test';

mock.module('@/lib/env', () => ({
  env: {
    NEXT_PUBLIC_API_BASE_URL: '/api',
    API_TIMEOUT: 10000,
    NEXT_PUBLIC_ENABLE_DEBUG: true,
  },
}));

let requestInterceptorHandler: (config: object) => object;
let requestInterceptorErrorHandler: (error: Error) => Promise<never>;
let responseInterceptorHandler: (response: object) => object;
let responseInterceptorErrorHandler: (error: Error) => Promise<never>;

const mockGet = mock(() => Promise.resolve({ data: undefined } as { data: unknown }));
const mockPost = mock(() => Promise.resolve({ data: undefined } as { data: unknown }));

const mockAxiosInstance = {
  get: mockGet,
  post: mockPost,
  interceptors: {
    request: {
      use: mock((handler: (c: object) => object, errorHandler: (e: Error) => Promise<never>) => {
        requestInterceptorHandler = handler;
        requestInterceptorErrorHandler = errorHandler;
        return 0;
      }),
    },
    response: {
      use: mock((handler: (r: object) => object, errorHandler: (e: Error) => Promise<never>) => {
        responseInterceptorHandler = handler;
        responseInterceptorErrorHandler = errorHandler;
        return 1;
      }),
    },
  },
  defaults: {
    baseURL: '/api',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
  },
};

mock.module('axios', () => ({
  default: {
    create: mock(() => mockAxiosInstance),
  },
}));

describe('API 请求工具测试', () => {
  describe('apiClient', () => {
    it('应该是一个 Axios 实例', async () => {
      const { apiClient } = await import('./fetch');
      expect(apiClient).toBeDefined();
      expect(typeof apiClient).toBe('object');
      expect(typeof apiClient.get).toBe('function');
      expect(typeof apiClient.post).toBe('function');
    });

    it('应该具有正确的默认配置', async () => {
      const { apiClient } = await import('./fetch');
      expect(apiClient.defaults.baseURL).toBe('/api');
      expect(apiClient.defaults.timeout).toBe(10000);
      expect(apiClient.defaults.headers['Content-Type']).toBe('application/json');
    });

    it('应该正确处理请求拦截', async () => {
      await import('./fetch');
      const mockConfig = { url: '/test', method: 'GET' };

      const consoleDebugSpy = jest.spyOn(console, 'debug').mockImplementation(() => {});
      const result = requestInterceptorHandler(mockConfig);

      expect(consoleDebugSpy).toHaveBeenCalledWith('API Request:', mockConfig);
      expect(result).toEqual(mockConfig);
      consoleDebugSpy.mockRestore();
    });

    it('应该正确处理请求拦截错误', async () => {
      await import('./fetch');
      const mockError = new Error('Request error');
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      await expect(requestInterceptorErrorHandler(mockError)).rejects.toEqual(mockError);

      expect(consoleErrorSpy).toHaveBeenCalledWith('API Request Error:', mockError);
      consoleErrorSpy.mockRestore();
    });

    it('应该正确处理响应拦截', async () => {
      await import('./fetch');
      const mockResponse = { data: { key: 'value' } };

      const consoleDebugSpy = jest.spyOn(console, 'debug').mockImplementation(() => {});
      const result = responseInterceptorHandler(mockResponse);

      expect(consoleDebugSpy).toHaveBeenCalledWith('API Response:', mockResponse);
      expect(result).toEqual(mockResponse);
      consoleDebugSpy.mockRestore();
    });

    it('应该正确处理响应拦截错误', async () => {
      await import('./fetch');
      const mockError = new Error('Response error');
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      await expect(responseInterceptorErrorHandler(mockError)).rejects.toEqual(mockError);

      expect(consoleErrorSpy).toHaveBeenCalledWith('API Response Error:', mockError);
      consoleErrorSpy.mockRestore();
    });
  });

  describe('fetcher', () => {
    it('应该成功获取数据', async () => {
      const { fetcher } = await import('./fetch');
      const mockData = { data: 'test' };
      const mockResponse = { data: mockData };
      mockGet.mockResolvedValueOnce(mockResponse);

      const result = await fetcher('/test');

      expect(mockGet).toHaveBeenCalledWith(
        '/test',
        expect.objectContaining({
          headers: undefined,
        }),
      );
      expect(result).toEqual(mockData);
    });

    it('应该支持自定义 headers', async () => {
      const { fetcher } = await import('./fetch');
      const mockData = { data: 'test' };
      const mockResponse = { data: mockData };
      mockGet.mockResolvedValueOnce(mockResponse);

      const headers = { 'Custom-Header': 'value' };
      await fetcher('/test', { headers });

      expect(mockGet).toHaveBeenCalledWith(
        '/test',
        expect.objectContaining({
          headers,
        }),
      );
    });

    it('应该正确处理请求失败', async () => {
      const { fetcher } = await import('./fetch');
      const errorMessage = 'Network Error';
      mockGet.mockRejectedValueOnce(new Error(errorMessage));

      await expect(fetcher('/test')).rejects.toThrow(errorMessage);
    });

    it('应该正确处理 API 响应的错误信息', async () => {
      const { fetcher } = await import('./fetch');
      const errorMessage = 'Invalid request';
      mockGet.mockRejectedValueOnce({
        response: {
          data: { message: errorMessage },
        },
      });

      await expect(fetcher('/test')).rejects.toThrow(errorMessage);
    });

    it('应该正确处理没有响应数据的错误', async () => {
      const { fetcher } = await import('./fetch');
      const errorMessage = 'Network Error';
      mockGet.mockRejectedValueOnce(new Error(errorMessage));

      await expect(fetcher('/test')).rejects.toThrow(errorMessage);
    });

    it('应该正确处理没有 message 的响应数据', async () => {
      const { fetcher } = await import('./fetch');
      mockGet.mockRejectedValueOnce({
        response: {
          data: {},
        },
      });

      await expect(fetcher('/test')).rejects.toThrow('Unknown error');
    });

    it('应该正确处理没有 response 的错误', async () => {
      const { fetcher } = await import('./fetch');
      mockGet.mockRejectedValueOnce({});

      await expect(fetcher('/test')).rejects.toThrow('Unknown error');
    });
  });

  describe('post', () => {
    it('应该成功发送 POST 请求', async () => {
      const { post } = await import('./fetch');
      const mockData = { data: 'test' };
      const mockResponse = { data: mockData };
      const postData = { key: 'value' };
      mockPost.mockResolvedValueOnce(mockResponse);

      const result = await post('/test', postData);

      expect(mockPost).toHaveBeenCalledWith(
        '/test',
        postData,
        expect.objectContaining({
          headers: undefined,
        }),
      );
      expect(result).toEqual(mockData);
    });

    it('应该支持自定义 headers', async () => {
      const { post } = await import('./fetch');
      const mockData = { data: 'test' };
      const mockResponse = { data: mockData };
      const postData = { key: 'value' };
      mockPost.mockResolvedValueOnce(mockResponse);

      const headers = { 'Custom-Header': 'value' };
      await post('/test', postData, { headers });

      expect(mockPost).toHaveBeenCalledWith(
        '/test',
        postData,
        expect.objectContaining({
          headers,
        }),
      );
    });

    it('应该正确处理 POST 请求失败', async () => {
      const { post } = await import('./fetch');
      const errorMessage = 'Network Error';
      mockPost.mockRejectedValueOnce(new Error(errorMessage));

      await expect(post('/test')).rejects.toThrow(errorMessage);
    });

    it('应该正确处理 POST 请求的 API 响应错误', async () => {
      const { post } = await import('./fetch');
      const errorMessage = 'Invalid request';
      mockPost.mockRejectedValueOnce({
        response: {
          data: { message: errorMessage },
        },
      });

      await expect(post('/test')).rejects.toThrow(errorMessage);
    });

    it('应该正确处理没有响应数据的 POST 请求错误', async () => {
      const { post } = await import('./fetch');
      const errorMessage = 'Network Error';
      mockPost.mockRejectedValueOnce(new Error(errorMessage));

      await expect(post('/test')).rejects.toThrow(errorMessage);
    });

    it('应该正确处理没有 message 的响应数据的 POST 请求', async () => {
      const { post } = await import('./fetch');
      mockPost.mockRejectedValueOnce({
        response: {
          data: {},
        },
      });

      await expect(post('/test')).rejects.toThrow('Unknown error');
    });

    it('应该正确处理没有 response 的 POST 请求错误', async () => {
      const { post } = await import('./fetch');
      mockPost.mockRejectedValueOnce({});

      await expect(post('/test')).rejects.toThrow('Unknown error');
    });

    it('应该支持无数据的 POST 请求', async () => {
      const { post } = await import('./fetch');
      const mockData = { data: 'test' };
      const mockResponse = { data: mockData };
      mockPost.mockResolvedValueOnce(mockResponse);

      const result = await post('/test');

      expect(mockPost).toHaveBeenCalledWith(
        '/test',
        undefined,
        expect.objectContaining({
          headers: undefined,
        }),
      );
      expect(result).toEqual(mockData);
    });
  });
});
