import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPage from './error';

describe('ErrorPage', () => {
  const mockReset = jest.fn();
  const mockError = new Error('测试错误信息');

  it('renders error message', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    expect(screen.getByText('应用程序出错')).toBeInTheDocument();
    expect(screen.getByText('很抱歉，应用程序在处理您的请求时遇到了问题。')).toBeInTheDocument();
    expect(screen.getByText(`错误信息：${mockError.message}`)).toBeInTheDocument();
  });

  it('renders retry button and handles click', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    const retryButton = screen.getByText('重试');
    expect(retryButton).toBeInTheDocument();
    fireEvent.click(retryButton);
    expect(mockReset).toHaveBeenCalledTimes(1);
  });

  it('renders back to home button with correct link', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    const backButton = screen.getByText('返回首页');
    expect(backButton).toBeInTheDocument();
    expect(backButton.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders error digest if available', () => {
    const errorWithDigest = new Error('测试错误信息');
    // 为 Error 对象添加 digest 属性的类型安全方式
    Object.defineProperty(errorWithDigest, 'digest', {
      value: 'abc123',
      writable: true,
      enumerable: true,
      configurable: true,
    });
    render(<ErrorPage error={errorWithDigest as Error & { digest?: string }} reset={mockReset} />);
    expect(screen.getByText('错误ID:')).toBeInTheDocument();
    expect(screen.getByText('abc123')).toBeInTheDocument();
  });
});
