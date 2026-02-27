import { render, screen, fireEvent } from '@testing-library/react';
import { Textarea } from './textarea';

describe('Textarea component', () => {
  it('renders textarea field', () => {
    render(<Textarea id="test-textarea" />);
    const textarea = document.getElementById('test-textarea');
    expect(textarea).toBeInTheDocument();
  });

  it('renders textarea with placeholder', () => {
    const placeholder = 'Enter text here...';
    render(<Textarea id="test-textarea" placeholder={placeholder} />);
    const textarea = document.getElementById('test-textarea');
    expect(textarea).toHaveAttribute('placeholder', placeholder);
  });

  it('renders textarea with value', () => {
    const value = 'Test Value';
    render(<Textarea id="test-textarea" value={value} />);
    const textarea = document.getElementById('test-textarea') as HTMLTextAreaElement;
    expect(textarea.value).toBe(value);
  });

  it('renders disabled textarea', () => {
    render(<Textarea id="test-textarea" disabled />);
    const textarea = document.getElementById('test-textarea');
    expect(textarea).toBeDisabled();
  });

  it('renders read-only textarea', () => {
    render(<Textarea id="test-textarea" readOnly />);
    const textarea = document.getElementById('test-textarea');
    expect(textarea).toHaveAttribute('readonly');
  });

  it('renders textarea with custom className', () => {
    const customClass = 'custom-textarea';
    render(<Textarea id="test-textarea" className={customClass} />);
    const textarea = document.getElementById('test-textarea');
    expect(textarea).toHaveClass(customClass);
  });

  it('handles user input', () => {
    render(<Textarea id="test-textarea" />);
    const textarea = document.getElementById('test-textarea') as HTMLTextAreaElement;
    const testValue = 'New Value';

    fireEvent.change(textarea, { target: { value: testValue } });
    expect(textarea.value).toBe(testValue);
  });

  it('renders textarea with label', () => {
    const labelText = 'Test Textarea';
    render(
      <div>
        <Textarea id="test-textarea" />
        <label htmlFor="test-textarea">{labelText}</label>
      </div>,
    );

    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  });

  it('renders textarea with custom rows and cols', () => {
    const rows = 5;
    const cols = 30;
    render(<Textarea id="test-textarea" rows={rows} cols={cols} />);
    const textarea = document.getElementById('test-textarea');
    expect(textarea).toHaveAttribute('rows', `${rows}`);
    expect(textarea).toHaveAttribute('cols', `${cols}`);
  });
});
