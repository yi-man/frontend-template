import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './input';

describe('Input component', () => {
  it('renders input field', () => {
    render(<Input id="test-input" />);
    const input = document.getElementById('test-input');
    expect(input).toBeInTheDocument();
  });

  it('renders input with placeholder', () => {
    const placeholder = 'Enter text';
    render(<Input id="test-input" placeholder={placeholder} />);
    const input = document.getElementById('test-input');
    expect(input).toHaveAttribute('placeholder', placeholder);
  });

  it('renders input with value', () => {
    const value = 'Test Value';
    render(<Input id="test-input" value={value} />);
    const input = document.getElementById('test-input');
    expect(input).toHaveValue(value);
  });

  it('renders disabled input', () => {
    render(<Input id="test-input" disabled />);
    const input = document.getElementById('test-input');
    expect(input).toBeDisabled();
  });

  it('renders read-only input', () => {
    render(<Input id="test-input" readOnly />);
    const input = document.getElementById('test-input');
    expect(input).toHaveAttribute('readonly');
  });

  it('renders input with custom type', () => {
    render(<Input id="test-input" type="password" />);
    const input = document.getElementById('test-input');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('renders input with custom className', () => {
    const customClass = 'custom-input';
    render(<Input id="test-input" className={customClass} />);
    const input = document.getElementById('test-input');
    expect(input).toHaveClass(customClass);
  });

  it('handles user input', () => {
    render(<Input id="test-input" />);
    const input = document.getElementById('test-input') as HTMLInputElement;
    const testValue = 'New Value';

    fireEvent.change(input, { target: { value: testValue } });
    expect(input.value).toBe(testValue);
  });

  it('renders input with label', () => {
    const labelText = 'Test Label';
    render(
      <div>
        <Input id="test-input" />
        <label htmlFor="test-input">{labelText}</label>
      </div>,
    );

    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  });
});
