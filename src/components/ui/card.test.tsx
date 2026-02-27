import { render, screen } from '@testing-library/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

describe('Card components', () => {
  describe('Card', () => {
    it('renders a basic card', () => {
      render(<Card>Test card content</Card>);
      expect(screen.getByText('Test card content')).toBeInTheDocument();
    });

    it('renders card with custom class', () => {
      render(<Card className="custom-card">Test card</Card>);
      expect(screen.getByText('Test card')).toBeInTheDocument();
      expect(screen.getByText('Test card').closest('.custom-card')).not.toBeNull();
    });

    it('renders card with additional props', () => {
      render(<Card data-testid="test-card">Test card</Card>);
      expect(screen.getByTestId('test-card')).toBeInTheDocument();
    });
  });

  describe('CardHeader', () => {
    it('renders a card header', () => {
      render(<CardHeader>Test header</CardHeader>);
      expect(screen.getByText('Test header')).toBeInTheDocument();
    });

    it('renders card header with custom class', () => {
      render(<CardHeader className="custom-header">Test header</CardHeader>);
      expect(screen.getByText('Test header')).toBeInTheDocument();
      expect(screen.getByText('Test header').closest('.custom-header')).not.toBeNull();
    });
  });

  describe('CardTitle', () => {
    it('renders a card title', () => {
      render(<CardTitle>Test title</CardTitle>);
      expect(screen.getByText('Test title')).toBeInTheDocument();
    });

    it('renders card title with custom class', () => {
      render(<CardTitle className="custom-title">Test title</CardTitle>);
      expect(screen.getByText('Test title')).toBeInTheDocument();
      expect(screen.getByText('Test title').closest('.custom-title')).not.toBeNull();
    });
  });

  describe('CardDescription', () => {
    it('renders a card description', () => {
      render(<CardDescription>Test description</CardDescription>);
      expect(screen.getByText('Test description')).toBeInTheDocument();
    });

    it('renders card description with custom class', () => {
      render(<CardDescription className="custom-description">Test description</CardDescription>);
      expect(screen.getByText('Test description')).toBeInTheDocument();
      expect(screen.getByText('Test description').closest('.custom-description')).not.toBeNull();
    });
  });

  describe('CardContent', () => {
    it('renders card content', () => {
      render(<CardContent>Test content</CardContent>);
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders card content with custom class', () => {
      render(<CardContent className="custom-content">Test content</CardContent>);
      expect(screen.getByText('Test content')).toBeInTheDocument();
      expect(screen.getByText('Test content').closest('.custom-content')).not.toBeNull();
    });
  });

  describe('CardFooter', () => {
    it('renders card footer', () => {
      render(<CardFooter>Test footer</CardFooter>);
      expect(screen.getByText('Test footer')).toBeInTheDocument();
    });

    it('renders card footer with custom class', () => {
      render(<CardFooter className="custom-footer">Test footer</CardFooter>);
      expect(screen.getByText('Test footer')).toBeInTheDocument();
      expect(screen.getByText('Test footer').closest('.custom-footer')).not.toBeNull();
    });
  });

  describe('Complete card composition', () => {
    it('renders all card components together', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test card title</CardTitle>
            <CardDescription>Test card description</CardDescription>
          </CardHeader>
          <CardContent>Test card content</CardContent>
          <CardFooter>Test card footer</CardFooter>
        </Card>,
      );

      expect(screen.getByText('Test card title')).toBeInTheDocument();
      expect(screen.getByText('Test card description')).toBeInTheDocument();
      expect(screen.getByText('Test card content')).toBeInTheDocument();
      expect(screen.getByText('Test card footer')).toBeInTheDocument();
    });
  });
});
