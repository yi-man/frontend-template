import { describe, it, expect, mock } from 'bun:test';
import React from 'react';
import { render, screen } from '@testing-library/react';

mock.module('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: mock(() => {}) }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

import { ThemeProvider } from './theme-provider';

describe('ThemeProvider', () => {
  it('should render children correctly', () => {
    const testText = 'Test Content';
    render(
      <ThemeProvider>
        <div>{testText}</div>
      </ThemeProvider>,
    );

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('should render with custom attributes', () => {
    const testText = 'Custom Attributes';
    render(
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div>{testText}</div>
      </ThemeProvider>,
    );

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('should forward props to NextThemesProvider', () => {
    const testText = 'Props Forwarding';
    const { container } = render(
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div>{testText}</div>
      </ThemeProvider>,
    );

    expect(container.firstChild).not.toBeNull();
  });
});
