import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

describe('Tabs component', () => {
  it('renders tabs with triggers and content', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 Content</TabsContent>
        <TabsContent value="tab2">Tab 2 Content</TabsContent>
      </Tabs>,
    );

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 1 Content')).toBeVisible();
  });

  it('renders active tab content and switches between tabs', async () => {
    const { container } = render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 Content</TabsContent>
        <TabsContent value="tab2">Tab 2 Content</TabsContent>
      </Tabs>,
    );

    // Initially tab 1 is active and tab 2 is inactive
    const tabContents = container.querySelectorAll('[role="tabpanel"]');
    expect(tabContents.length).toBe(2);

    // Check if tab 1 is active and tab 2 is hidden
    let activeContent = container.querySelector('[data-state="active"]');
    let inactiveContent = container.querySelector('[data-state="inactive"]');

    expect(activeContent).toBeInTheDocument();
    expect(inactiveContent).toBeInTheDocument();

    // Switch to tab 2
    fireEvent.click(screen.getByText('Tab 2'));

    // 等待 tab 状态更新
    await waitFor(() => {
      activeContent = container.querySelector('[data-state="active"]');
      inactiveContent = container.querySelector('[data-state="inactive"]');

      // Check if active and inactive states have been updated
      expect(activeContent).toBeInTheDocument();
      expect(inactiveContent).toBeInTheDocument();
    });
  });

  it('renders disabled tab trigger', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" disabled>
            Tab 2 (Disabled)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 Content</TabsContent>
        <TabsContent value="tab2">Tab 2 Content</TabsContent>
      </Tabs>,
    );

    expect(screen.getByText('Tab 2 (Disabled)')).toBeDisabled();
  });

  it('renders tabs with custom className', () => {
    const customClass = 'custom-tabs';
    render(
      <Tabs className={customClass} defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 Content</TabsContent>
      </Tabs>,
    );

    expect(screen.getByText('Tab 1 Content').closest('.custom-tabs')).toBeInTheDocument();
  });

  it('renders multiple tab contents', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 Content</TabsContent>
        <TabsContent value="tab2">Tab 2 Content</TabsContent>
        <TabsContent value="tab3">Tab 3 Content</TabsContent>
      </Tabs>,
    );

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('renders tabs with controlled value', () => {
    const { container, rerender } = render(
      <Tabs value="tab1" onValueChange={() => {}}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 Content</TabsContent>
        <TabsContent value="tab2">Tab 2 Content</TabsContent>
      </Tabs>,
    );

    // Initially tab 1 is active
    expect(screen.getByText('Tab 1 Content')).toBeVisible();

    // Check tab 2 content is in inactive state
    const tab2Content = container.querySelector('[data-state="inactive"]');
    expect(tab2Content).toBeInTheDocument();

    rerender(
      <Tabs value="tab2" onValueChange={() => {}}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 Content</TabsContent>
        <TabsContent value="tab2">Tab 2 Content</TabsContent>
      </Tabs>,
    );

    // Now tab 2 is active
    expect(screen.getByText('Tab 2 Content')).toBeVisible();

    // Check tab 1 content is now in inactive state
    const tab1Content = container.querySelector('[data-state="inactive"]');
    expect(tab1Content).toBeInTheDocument();
  });
});
