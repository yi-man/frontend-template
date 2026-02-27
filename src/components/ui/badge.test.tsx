import { render, screen } from '@testing-library/react';
import { Badge } from './badge';

describe('Badge component', () => {
  it('renders badge with text', () => {
    const testText = 'Test Badge';
    render(<Badge>{testText}</Badge>);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('renders badge with default variant', () => {
    const testText = 'Default Badge';
    render(<Badge>{testText}</Badge>);
    const badge = screen.getByText(testText);
    expect(badge).toHaveClass('bg-primary');
  });

  it('renders badge with secondary variant', () => {
    const testText = 'Secondary Badge';
    render(<Badge variant="secondary">{testText}</Badge>);
    const badge = screen.getByText(testText);
    expect(badge).toHaveClass('bg-secondary');
  });

  it('renders badge with destructive variant', () => {
    const testText = 'Destructive Badge';
    render(<Badge variant="destructive">{testText}</Badge>);
    const badge = screen.getByText(testText);
    expect(badge).toHaveClass('bg-destructive');
  });

  it('renders badge with outline variant', () => {
    const testText = 'Outline Badge';
    render(<Badge variant="outline">{testText}</Badge>);
    const badge = screen.getByText(testText);
    expect(badge).toHaveClass('text-foreground');
  });

  it('renders badge with custom className', () => {
    const testText = 'Custom Badge';
    const customClass = 'custom-badge-class';
    render(<Badge className={customClass}>{testText}</Badge>);
    const badge = screen.getByText(testText);
    expect(badge).toHaveClass(customClass);
  });

  it('renders badge with additional props', () => {
    const testText = 'Badge with Props';
    const testId = 'test-badge';
    render(<Badge data-testid={testId}>{testText}</Badge>);
    const badge = screen.getByTestId(testId);
    expect(badge).toBeInTheDocument();
  });
});
