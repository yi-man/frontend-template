import { render, screen, fireEvent } from '@testing-library/react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from './accordion';

describe('Accordion component', () => {
  it('renders accordion with trigger and content', () => {
    const triggerText = 'Accordion Item';
    const contentText = 'Accordion Content';

    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger>{triggerText}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{contentText}</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByText(triggerText)).toBeInTheDocument();
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('expands accordion when trigger is clicked', () => {
    const triggerText = 'Accordion Item';
    const contentText = 'Accordion Content';

    const { container } = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger>{triggerText}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{contentText}</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    // Initially content should be hidden
    const content = container.querySelector('[data-state="closed"]');
    expect(content).toBeInTheDocument();

    // Click to expand
    fireEvent.click(screen.getByText(triggerText));

    // Check if content is visible
    const expandedContent = container.querySelector('[data-state="open"]');
    expect(expandedContent).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const triggerText = 'Accordion Item';
    const contentText = 'Accordion Content';
    const customClass = 'custom-accordion';

    const { container } = render(
      <Accordion type="single" collapsible className={customClass}>
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger>{triggerText}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{contentText}</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(container.firstChild).toHaveClass(customClass);
  });

  it('supports multiple accordion items', () => {
    const items = [
      { value: 'item-1', trigger: 'First Item', content: 'First Content' },
      { value: 'item-2', trigger: 'Second Item', content: 'Second Content' },
      { value: 'item-3', trigger: 'Third Item', content: 'Third Content' },
    ];

    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionHeader>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>,
    );

    items.forEach((item) => {
      expect(screen.getByText(item.trigger)).toBeInTheDocument();
    });

    // Only the first item should be visible initially
    expect(screen.getByText(items[0].content)).toBeInTheDocument();
  });

  it('only one accordion item is open at a time', () => {
    const items = [
      { value: 'item-1', trigger: 'First Item', content: 'First Content' },
      { value: 'item-2', trigger: 'Second Item', content: 'Second Content' },
    ];

    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionHeader>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>,
    );

    // Open first item should be visible
    expect(screen.getByText(items[0].content)).toBeInTheDocument();

    // Open second item
    fireEvent.click(screen.getByText(items[1].trigger));

    // Check that second item is now visible and first is not in DOM
    expect(screen.getByText(items[1].content)).toBeInTheDocument();
    expect(screen.queryByText(items[0].content)).not.toBeInTheDocument();
  });
});
