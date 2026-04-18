import { GlobalRegistrator } from '@happy-dom/global-registrator';
import '@testing-library/jest-dom';
import React from 'react';
import { afterEach, mock } from 'bun:test';

GlobalRegistrator.register();

// RTL's cleanup() tears down happy-dom's document in a way that breaks `screen` for the next test.
afterEach(() => {
  if (typeof document !== 'undefined' && document.body) {
    document.body.innerHTML = '';
  }
});

globalThis.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof ResizeObserver;

const router = {
  push: mock(() => {}),
  replace: mock(() => {}),
  refresh: mock(() => {}),
  back: mock(() => {}),
};

mock.module('next/navigation', () => ({
  useRouter() {
    return router;
  },
  usePathname() {
    return '';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

mock.module('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon" />,
  X: () => <div data-testid="x-icon" />,
  Sun: () => <div data-testid="sun-icon" />,
  Moon: () => <div data-testid="moon-icon" />,
  AlertCircle: () => <div data-testid="alert-circle-icon" />,
  ArrowLeft: () => <div data-testid="arrow-left-icon" />,
  RefreshCw: () => <div data-testid="refresh-cw-icon" />,
  Check: () => <div data-testid="check-icon" />,
  Circle: () => <div data-testid="circle-icon" />,
  ChevronDown: () => <div data-testid="chevron-down-icon" />,
  ChevronUp: () => <div data-testid="chevron-up-icon" />,
  Loader2: () => <div data-testid="loader2-icon" />,
  Github: () => <div data-testid="github-icon" />,
}));
