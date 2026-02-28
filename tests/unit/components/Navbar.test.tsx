import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '@/components/navbar';

// 模拟 lucide-react 图标
jest.mock('lucide-react', () => ({
  Menu: jest.fn(() => <div data-testid="menu-icon" />),
  X: jest.fn(() => <div data-testid="x-icon" />),
  Github: jest.fn(() => <div data-testid="github-icon" />),
}));

// 模拟 ThemeToggle 组件
jest.mock('@/components/ui/theme-toggle', () => ({
  ThemeToggle: jest.fn(() => <button data-testid="theme-toggle-button">Toggle theme</button>),
}));

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

  it('应该显示移动端菜单按钮', () => {
    render(<Navbar />);
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });

  it('应该响应菜单按钮点击', () => {
    render(<Navbar />);
    const menuButton = document.querySelector('button');
    fireEvent.click(menuButton!);
    // 检查菜单是否打开
    const mobileMenu = document.querySelector('.md\\:hidden');
    expect(mobileMenu).toBeInTheDocument();
  });
});
