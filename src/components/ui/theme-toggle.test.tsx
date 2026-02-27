import { render, screen } from '@testing-library/react';
import { ThemeToggle } from './theme-toggle';
import { ThemeProvider } from '@/components/theme-provider';

describe('ThemeToggle', () => {
  it('renders theme toggle button', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );
    const button = document.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  it('renders theme toggle button with sun and moon icons', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );
    const sunIcon = screen.getByTestId('sun-icon');
    const moonIcon = screen.getByTestId('moon-icon');
    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
  });

  it('renders theme toggle button with accessible text', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );
    const accessibleText = screen.getByText('Toggle theme');
    expect(accessibleText).toBeInTheDocument();
    expect(accessibleText).toHaveClass('sr-only');
  });

  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );
    expect(container).toBeInTheDocument();
  });
});
