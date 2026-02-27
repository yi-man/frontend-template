import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './checkbox';

describe('Checkbox component', () => {
  it('renders checkbox correctly', () => {
    render(<Checkbox id="test-checkbox" />);
    const checkbox = document.getElementById('test-checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders checkbox with label', () => {
    render(
      <div>
        <Checkbox id="test-checkbox" />
        <label htmlFor="test-checkbox">Test Label</label>
      </div>,
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('renders checkbox in checked state', () => {
    const { container } = render(<Checkbox id="test-checkbox" defaultChecked />);
    const checkbox = container.querySelector('[id="test-checkbox"]');
    expect(checkbox).toHaveAttribute('data-state', 'checked');
  });

  it('renders disabled checkbox', () => {
    render(<Checkbox id="test-checkbox" disabled />);
    const checkbox = document.getElementById('test-checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('renders checkbox with custom className', () => {
    const customClass = 'custom-checkbox';
    render(<Checkbox id="test-checkbox" className={customClass} />);
    const checkbox = document.getElementById('test-checkbox');
    expect(checkbox).toHaveClass(customClass);
  });

  it('changes state when clicked', () => {
    const { container } = render(<Checkbox id="test-checkbox" />);
    const checkbox = container.querySelector('[id="test-checkbox"]');

    // 默认应该是未选中状态
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');

    fireEvent.click(checkbox!);
    expect(checkbox).toHaveAttribute('data-state', 'checked');

    fireEvent.click(checkbox!);
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
  });

  it('renders checkbox with checked property', () => {
    const { container, rerender } = render(<Checkbox id="test-checkbox" checked />);
    let checkbox = container.querySelector('[id="test-checkbox"]');
    expect(checkbox).toHaveAttribute('data-state', 'checked');

    rerender(<Checkbox id="test-checkbox" checked={false} />);
    checkbox = container.querySelector('[id="test-checkbox"]');
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
  });
});
