import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from './switch';

describe('Switch component', () => {
  it('renders switch correctly', () => {
    render(<Switch id="test-switch" />);
    const switchElement = document.getElementById('test-switch');
    expect(switchElement).toBeInTheDocument();
  });

  it('renders switch with label', () => {
    const labelText = 'Test Switch';
    render(
      <div>
        <Switch id="test-switch" />
        <label htmlFor="test-switch">{labelText}</label>
      </div>,
    );

    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  });

  it('changes state when clicked', () => {
    render(<Switch id="test-switch" />);
    const switchElement = document.getElementById('test-switch');
    expect(switchElement).not.toHaveAttribute('data-state', 'checked');

    fireEvent.click(switchElement!);
    expect(switchElement).toHaveAttribute('data-state', 'checked');

    fireEvent.click(switchElement!);
    expect(switchElement).not.toHaveAttribute('data-state', 'checked');
  });

  it('renders switch in checked state', () => {
    render(<Switch id="test-switch" defaultChecked />);
    const switchElement = document.getElementById('test-switch');
    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  it('renders disabled switch', () => {
    render(<Switch id="test-switch" disabled />);
    const switchElement = document.getElementById('test-switch');
    expect(switchElement).toBeDisabled();
  });

  it('renders switch with custom className', () => {
    const customClass = 'custom-switch';
    render(<Switch id="test-switch" className={customClass} />);
    const switchElement = document.getElementById('test-switch');
    expect(switchElement).toHaveClass(customClass);
  });

  it('renders switch with additional attributes', () => {
    const testId = 'custom-switch';
    render(<Switch id="test-switch" data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
