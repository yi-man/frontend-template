import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('应该显示页面标题', () => {
    render(<Home />);
    expect(screen.getByText(/Next\.js 16 SSR Template/)).toBeInTheDocument();
  });

  it('应该显示技术栈信息', () => {
    render(<Home />);
    expect(screen.getByText(/Next\.js 16 App Router/)).toBeInTheDocument();
    expect(screen.getByText(/React 19/)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript 5\.7/)).toBeInTheDocument();
    expect(screen.getByText(/Tailwind CSS 4/)).toBeInTheDocument();
    expect(screen.getByText(/shadcn\/ui 3\.8/)).toBeInTheDocument();
  });

  it('应该显示功能特性', () => {
    render(<Home />);
    expect(screen.getByText(/服务端渲染 \(SSR\)/)).toBeInTheDocument();
    expect(screen.getByText(/深色\/浅色主题切换/)).toBeInTheDocument();
    expect(screen.getByText(/完整的代码规范流程/)).toBeInTheDocument();
    expect(screen.getByText(/测试配置 \(Jest \+ Cypress\)/)).toBeInTheDocument();
    // 找到所有包含 "工程化配置" 的元素，然后验证至少有一个在功能特性卡片中
    const elements = screen.getAllByText(/工程化配置/);
    expect(elements.length).toBeGreaterThan(0);
    // 验证至少有一个元素在功能特性卡片中
    const featuresCard = screen.getByText(/功能特性/).closest('.bg-card');
    expect(featuresCard).toBeInTheDocument();
    expect(featuresCard?.textContent).toContain('工程化配置');
  });
});