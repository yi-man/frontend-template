import { describe, it, expect, mock } from 'bun:test';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

mock.module('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useTheme: () => ({ theme: 'light', setTheme: mock(() => {}) }),
}));

mock.module('@/components/ui', () => ({
  Button: ({
    children,
    onClick,
    ...props
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    [key: string]: unknown;
  }) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
}));

import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/navbar';

function renderNavbar() {
  return render(
    <ThemeProvider attribute="class" defaultTheme="light">
      <Navbar />
    </ThemeProvider>,
  );
}

describe('Navbar', () => {
  it('should display logo and main navigation links', () => {
    renderNavbar();

    expect(screen.getByText('Next.js 16')).toBeInTheDocument();
    expect(screen.getByText('首页')).toBeInTheDocument();
    expect(screen.getByText('服务')).toBeInTheDocument();
    expect(screen.getByText('博客')).toBeInTheDocument();
    expect(screen.getByText('关于')).toBeInTheDocument();
    expect(screen.getByText('联系')).toBeInTheDocument();
  });

  it('should render theme toggle button', () => {
    renderNavbar();

    const themeSwitches = screen.getAllByRole('switch', { name: /切换主题/i });
    expect(themeSwitches).toHaveLength(2);
    themeSwitches.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });

  it('should render mobile menu button', () => {
    renderNavbar();
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });

  it('should open mobile menu when button is clicked', () => {
    renderNavbar();

    const menuButton = screen.getByRole('button', { name: /菜单/i });
    fireEvent.click(menuButton);

    const homeLinks = screen.getAllByText('首页');
    expect(homeLinks.length).toBe(2);
  });
});
