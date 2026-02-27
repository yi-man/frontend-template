import { render, screen, fireEvent } from '@testing-library/react';
import { RadioGroup, RadioGroupItem } from './radio-group';

describe('RadioGroup component', () => {
  it('renders radio group with items', () => {
    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </RadioGroup>,
    );

    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('renders radio group with default value selected', () => {
    const { container } = render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </RadioGroup>,
    );

    const option1 = container.querySelector('[id="option1"]');
    const option2 = container.querySelector('[id="option2"]');

    expect(option1).toHaveAttribute('data-state', 'checked');
    expect(option2).toHaveAttribute('data-state', 'unchecked');
  });

  it('changes selected value when radio item is clicked', () => {
    const { container } = render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </RadioGroup>,
    );

    // Click option 2
    fireEvent.click(screen.getByLabelText('Option 2'));

    const option1 = container.querySelector('[id="option1"]');
    const option2 = container.querySelector('[id="option2"]');

    expect(option2).toHaveAttribute('data-state', 'checked');
    expect(option1).toHaveAttribute('data-state', 'unchecked');
  });

  it('renders disabled radio group items', () => {
    const { container } = render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" id="option1" disabled />
        <label htmlFor="option1">Option 1 (Disabled)</label>
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </RadioGroup>,
    );

    const option1 = container.querySelector('[id="option1"]');
    const option2 = container.querySelector('[id="option2"]');

    expect(option1).toBeDisabled();
    expect(option2).not.toBeDisabled();
  });

  it('renders radio group with custom className', () => {
    const customClass = 'custom-radio-group';
    render(
      <RadioGroup className={customClass} defaultValue="option1">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </RadioGroup>,
    );

    expect(screen.getByLabelText('Option 1').closest('.custom-radio-group')).toBeInTheDocument();
  });

  it('renders radio group with controlled value', () => {
    const { container, rerender } = render(
      <RadioGroup value="option1" onValueChange={() => {}}>
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </RadioGroup>,
    );

    let option1 = container.querySelector('[id="option1"]');
    let option2 = container.querySelector('[id="option2"]');

    expect(option1).toHaveAttribute('data-state', 'checked');
    expect(option2).toHaveAttribute('data-state', 'unchecked');

    rerender(
      <RadioGroup value="option2" onValueChange={() => {}}>
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </RadioGroup>,
    );

    option1 = container.querySelector('[id="option1"]');
    option2 = container.querySelector('[id="option2"]');

    expect(option2).toHaveAttribute('data-state', 'checked');
    expect(option1).toHaveAttribute('data-state', 'unchecked');
  });
});
