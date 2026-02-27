import { render, screen, fireEvent } from '@testing-library/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

describe('Select component', () => {
  it('renders select trigger', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('opens select when trigger is clicked', () => {
    const { container } = render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    // Initially content is not visible
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();

    // Click trigger to open
    fireEvent.click(screen.getByText('Select an option'));

    // Check if select content is open
    const selectContent = container.querySelector('[data-state="open"]');
    expect(selectContent).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('selects an option when clicked', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    // Open select
    fireEvent.click(screen.getByText('Select an option'));

    // Select option 1
    fireEvent.click(screen.getByText('Option 1'));

    // Verify option 1 is selected
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('renders disabled select', () => {
    const { container } = render(
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );

    // Find the actual select element (trigger) that should be disabled
    const selectTrigger = container.querySelector('[role="combobox"]');
    expect(selectTrigger).toBeDisabled();
  });

  it('renders select with custom className', () => {
    const customClass = 'custom-select';
    const { container } = render(
      <Select>
        <SelectTrigger className={customClass}>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );

    // Find the select container with custom class
    const selectTrigger = container.querySelector(`.${customClass}`);
    expect(selectTrigger).toBeInTheDocument();
  });

  it('renders select with default value', () => {
    render(
      <Select defaultValue="option1">
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });
});
