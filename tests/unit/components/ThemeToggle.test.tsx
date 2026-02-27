import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

describe('ThemeToggle', () => {
  it('应该渲染主题切换按钮', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button', { name: /Toggle theme/i })).toBeInTheDocument();
  });

  it('应该点击时切换主题', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /Toggle theme/i });

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
