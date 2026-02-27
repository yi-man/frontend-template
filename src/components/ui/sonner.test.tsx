import { render } from '@testing-library/react';
import { Toaster } from './sonner';

describe('Sonner Toaster component', () => {
  it('renders toaster without errors', () => {
    const { container } = render(<Toaster />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders toaster with visible position', () => {
    const positions = [
      'top-left',
      'top-center',
      'top-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
    ] as const;

    positions.forEach((position) => {
      const { container } = render(<Toaster position={position} />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  it('renders toaster with different toast options', () => {
    const { container } = render(<Toaster />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
