import { render } from '@testing-library/react';
import { Separator } from './separator';

describe('Separator component', () => {
  it('renders a basic separator', () => {
    const { container } = render(<Separator />);
    const separator = container.firstChild;
    expect(separator).toBeInTheDocument();
  });

  it('renders a vertical separator', () => {
    const { container } = render(<Separator orientation="vertical" />);
    const separator = container.firstChild;
    expect(separator).toBeInTheDocument();
  });

  it('renders a horizontal separator by default', () => {
    const { container } = render(<Separator />);
    const separator = container.firstChild;
    expect(separator).toBeInTheDocument();
  });

  it('renders separator with custom class', () => {
    const { container } = render(<Separator className="custom-separator" />);
    const separator = container.firstChild;
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass('custom-separator');
  });

  it('renders separator with additional props', () => {
    const { container } = render(<Separator data-testid="test-separator" />);
    const separator = container.firstChild;
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute('data-testid', 'test-separator');
  });

  it('renders separator with decorative prop', () => {
    const { container } = render(<Separator decorative={false} />);
    const separator = container.firstChild;
    expect(separator).toBeInTheDocument();
  });

  it('renders separator with decorative and orientation props', () => {
    const { container } = render(<Separator decorative={false} orientation="vertical" />);
    const separator = container.firstChild;
    expect(separator).toBeInTheDocument();
  });
});
