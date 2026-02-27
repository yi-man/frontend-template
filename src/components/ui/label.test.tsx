import { render, screen } from '@testing-library/react';
import { Label } from './label';

describe('Label component', () => {
  it('renders label with text', () => {
    const labelText = 'Test Label';
    render(<Label>{labelText}</Label>);
    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it('renders label with htmlFor attribute', () => {
    const labelText = 'Label with htmlFor';
    const inputId = 'test-input';
    render(<Label htmlFor={inputId}>{labelText}</Label>);
    const label = screen.getByText(labelText);
    expect(label).toHaveAttribute('for', inputId);
  });

  it('renders label with custom className', () => {
    const labelText = 'Custom Label';
    const customClass = 'custom-label';
    render(<Label className={customClass}>{labelText}</Label>);
    const label = screen.getByText(labelText);
    expect(label).toHaveClass(customClass);
  });

  it('renders label with additional attributes', () => {
    const labelText = 'Label with Attributes';
    const testId = 'test-label';
    render(<Label data-testid={testId}>{labelText}</Label>);
    const label = screen.getByTestId(testId);
    expect(label).toBeInTheDocument();
  });

  it('renders label with different text content', () => {
    const labelText1 = 'First Label';
    const labelText2 = 'Second Label';

    render(
      <div>
        <Label>{labelText1}</Label>
        <Label>{labelText2}</Label>
      </div>,
    );

    expect(screen.getByText(labelText1)).toBeInTheDocument();
    expect(screen.getByText(labelText2)).toBeInTheDocument();
  });
});
