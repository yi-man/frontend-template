import { describe, it, expect, mock, beforeEach } from 'bun:test';
import { renderHook, act } from '@testing-library/react';
import { useTheme } from './use-theme';

const useNextThemeMock = mock(() => ({
  theme: 'light' as string,
  setTheme: mock<(theme: string | ((prev: string) => string)) => void>(() => {}),
}));

mock.module('next-themes', () => ({
  useTheme: () => useNextThemeMock(),
}));

describe('useTheme Hook', () => {
  beforeEach(() => {
    useNextThemeMock.mockClear?.();
  });

  it('returns theme properties when theme is dark', () => {
    useNextThemeMock.mockImplementation(() => ({
      theme: 'dark',
      setTheme: mock(() => {}),
    }));

    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('dark');
    expect(result.current.isDark).toBe(true);
    expect(result.current.isLight).toBe(false);
    expect(result.current.isSystem).toBe(false);
    expect(typeof result.current.toggleTheme).toBe('function');
    expect(typeof result.current.setTheme).toBe('function');
  });

  it('returns theme properties when theme is light', () => {
    useNextThemeMock.mockImplementation(() => ({
      theme: 'light',
      setTheme: mock(() => {}),
    }));

    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('light');
    expect(result.current.isDark).toBe(false);
    expect(result.current.isLight).toBe(true);
    expect(result.current.isSystem).toBe(false);
  });

  it('returns theme properties when theme is system', () => {
    useNextThemeMock.mockImplementation(() => ({
      theme: 'system',
      setTheme: mock(() => {}),
    }));

    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('system');
    expect(result.current.isDark).toBe(false);
    expect(result.current.isLight).toBe(false);
    expect(result.current.isSystem).toBe(true);
  });

  it('calls setTheme with dark when toggling from light', () => {
    const setTheme = mock((theme: string | ((prev: string) => string)) => {
      if (typeof theme === 'function') theme('light');
    });
    useNextThemeMock.mockImplementation(() => ({
      theme: 'light',
      setTheme,
    }));

    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme();
    });

    expect(setTheme).toHaveBeenCalled();
  });

  it('calls setTheme with light when toggling from dark', () => {
    const setTheme = mock((theme: string | ((prev: string) => string)) => {
      if (typeof theme === 'function') theme('dark');
    });
    useNextThemeMock.mockImplementation(() => ({
      theme: 'dark',
      setTheme,
    }));

    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme();
    });

    expect(setTheme).toHaveBeenCalled();
  });

  it('calls setTheme with correct value when using setTheme directly', () => {
    const setTheme = mock(() => {});
    useNextThemeMock.mockImplementation(() => ({
      theme: 'light',
      setTheme,
    }));

    const { result } = renderHook(() => useTheme());
    const newTheme = 'dark';
    act(() => {
      result.current.setTheme(newTheme);
    });

    expect(setTheme).toHaveBeenCalledWith(newTheme);
  });
});
