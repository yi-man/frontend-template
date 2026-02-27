import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './navbar';

describe('Navbar component', () => {
  it('renders logo and main navigation links', () => {
    render(<Navbar />);

    // 检查是否有 logo 或品牌名称
    expect(screen.getByText('首页')).toBeInTheDocument();

    // 检查主要导航链接
    expect(screen.getByText('服务')).toBeInTheDocument();
    expect(screen.getByText('博客')).toBeInTheDocument();
    expect(screen.getByText('关于')).toBeInTheDocument();
    expect(screen.getByText('联系')).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    render(<Navbar />);

    // 主题切换按钮在桌面端和移动端都有，使用 getAll 查找所有按钮
    const themeButtons = screen.getAllByRole('button', { name: /Toggle theme/i });
    expect(themeButtons).toHaveLength(2); // 应该有两个主题切换按钮
  });

  it('renders mobile menu button', () => {
    render(<Navbar />);

    // 直接通过按钮数量判断，因为 Navbar 组件中总共有 3 个按钮：
    // 1. 桌面端主题切换按钮
    // 2. 移动端主题切换按钮
    // 3. 移动端菜单按钮
    const allButtons = document.querySelectorAll('button');
    expect(allButtons).toHaveLength(3);
  });

  it('opens mobile menu when button is clicked', () => {
    render(<Navbar />);

    // 找到菜单按钮（假设是第三个按钮）
    const allButtons = document.querySelectorAll('button');
    const menuButton = allButtons[2];

    expect(menuButton).toBeInTheDocument();

    // 模拟点击菜单按钮
    fireEvent.click(menuButton);

    // 检查是否有多个首页链接（菜单打开时会显示两个）
    const homeLinks = screen.getAllByText('首页');
    expect(homeLinks).toHaveLength(2);
  });
});
