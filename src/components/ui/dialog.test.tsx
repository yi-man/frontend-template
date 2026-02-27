import { render, screen, fireEvent } from '@testing-library/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from './dialog';

describe('Dialog component', () => {
  it('renders dialog trigger', () => {
    const triggerText = 'Open Dialog';
    render(
      <Dialog>
        <DialogTrigger>{triggerText}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Test dialog description</DialogDescription>
          </DialogHeader>
          <p>Dialog content</p>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.getByText(triggerText)).toBeInTheDocument();
  });

  it('opens dialog when trigger is clicked', () => {
    const triggerText = 'Open Dialog';
    const dialogTitle = 'Test Dialog';

    render(
      <Dialog>
        <DialogTrigger>{triggerText}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>Test dialog description</DialogDescription>
          </DialogHeader>
          <p>Dialog content</p>
        </DialogContent>
      </Dialog>,
    );

    // Initially dialog should be closed
    const initialDialog = screen.queryByText(dialogTitle);
    expect(initialDialog).toBeNull();

    // Click trigger to open dialog
    fireEvent.click(screen.getByText(triggerText));
    expect(screen.getByText(dialogTitle)).toBeVisible();
  });

  it('renders dialog with custom title and content', () => {
    const triggerText = 'Open Dialog';
    const dialogTitle = 'Custom Dialog';
    const dialogContent = 'This is a custom dialog content';

    render(
      <Dialog>
        <DialogTrigger>{triggerText}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>Custom dialog description</DialogDescription>
          </DialogHeader>
          <p>{dialogContent}</p>
        </DialogContent>
      </Dialog>,
    );

    fireEvent.click(screen.getByText(triggerText));
    expect(screen.getByText(dialogTitle)).toBeVisible();
    expect(screen.getByText(dialogContent)).toBeVisible();
  });

  it('renders dialog with header and footer', () => {
    const triggerText = 'Open Dialog';
    const dialogTitle = 'Dialog with Header and Footer';
    const footerText = 'Confirm';

    render(
      <Dialog>
        <DialogTrigger>{triggerText}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>Dialog with header and footer</DialogDescription>
          </DialogHeader>
          <p>Dialog content</p>
          <div className="flex justify-end">
            <button>{footerText}</button>
          </div>
        </DialogContent>
      </Dialog>,
    );

    fireEvent.click(screen.getByText(triggerText));
    expect(screen.getByText(dialogTitle)).toBeVisible();
    expect(screen.getByText(footerText)).toBeVisible();
  });

  it('renders dialog with description', () => {
    const triggerText = 'Open Dialog';
    const dialogTitle = 'Dialog with Description';
    const dialogDescription = 'This is a dialog description';

    render(
      <Dialog>
        <DialogTrigger>{triggerText}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
          <p>Dialog content</p>
        </DialogContent>
      </Dialog>,
    );

    fireEvent.click(screen.getByText(triggerText));
    expect(screen.getByText(dialogDescription)).toBeVisible();
  });
});
