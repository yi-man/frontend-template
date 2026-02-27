import { render, screen } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

describe('Alert component', () => {
  it('renders Alert component with default variant', () => {
    render(<Alert>Test Alert</Alert>);
    const alertElement = document.querySelector('[role="alert"]');
    expect(alertElement).toBeInTheDocument();
  });

  it('renders Alert component with destructive variant', () => {
    render(<Alert variant="destructive">Destructive Alert</Alert>);
    const alertElement = document.querySelector('[role="alert"]');
    expect(alertElement).toBeInTheDocument();
  });

  it('renders Alert with AlertTitle and AlertDescription', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>,
    );
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Alert Description')).toBeInTheDocument();
  });

  it('renders Alert with custom className', () => {
    render(<Alert className="custom-alert">Custom Alert</Alert>);
    const alertElement = document.querySelector('[role="alert"]');
    expect(alertElement).toHaveClass('custom-alert');
  });

  it('renders AlertTitle with custom className', () => {
    render(<AlertTitle className="custom-title">Custom Title</AlertTitle>);
    expect(screen.getByText('Custom Title')).toHaveClass('custom-title');
  });

  it('renders AlertDescription with custom className', () => {
    render(<AlertDescription className="custom-description">Custom Description</AlertDescription>);
    expect(screen.getByText('Custom Description')).toHaveClass('custom-description');
  });

  it('should export all required components', () => {
    expect(Alert).toBeDefined();
    expect(AlertTitle).toBeDefined();
    expect(AlertDescription).toBeDefined();
  });

  it('should have display name for Alert', () => {
    expect(Alert.displayName).toEqual('Alert');
  });

  it('should have display name for AlertTitle', () => {
    expect(AlertTitle.displayName).toEqual('AlertTitle');
  });

  it('should have display name for AlertDescription', () => {
    expect(AlertDescription.displayName).toEqual('AlertDescription');
  });

  it('should have correct types for all components', () => {
    expect(typeof Alert).not.toEqual('undefined');
    expect(typeof AlertTitle).not.toEqual('undefined');
    expect(typeof AlertDescription).not.toEqual('undefined');
  });
});
