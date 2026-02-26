import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/navbar';

describe('Navbar', () => {
  it('应该显示 Logo 和标题', () => {
    render(<Navbar />);
    expect(screen.getByText(/Next\.js 16/)).toBeInTheDocument();
  });

  it('应该显示导航链接', () => {
    render(<Navbar />);
    expect(screen.getByText('首页')).toBeInTheDocument();
    expect(screen.getByText('关于')).toBeInTheDocument();
    expect(screen.getByText('服务')).toBeInTheDocument();
    expect(screen.getByText('博客')).toBeInTheDocument();
    expect(screen.getByText('联系')).toBeInTheDocument();
  });

  it('应该包含主题切换按钮', () => {
    render(<Navbar />);
    const buttons = screen.getAllByRole('button', { name: /Toggle theme/i });
    expect(buttons.length).toBeGreaterThan(0);
  });
});