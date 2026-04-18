import { describe, it, expect, jest } from 'bun:test';
import { renderHook, act } from '@testing-library/react';
import { useScrollPosition } from './use-scroll-position';

describe('useScrollPosition Hook', () => {
  it('returns initial scroll position (0, 0)', () => {
    const { result } = renderHook(() => useScrollPosition());
    expect(result.current.x).toBe(0);
    expect(result.current.y).toBe(0);
  });

  it('updates scroll position when window is scrolled', () => {
    const testX = 100;
    const testY = 200;

    const { result } = renderHook(() => useScrollPosition());

    act(() => {
      Object.defineProperty(window, 'scrollX', {
        value: testX,
        writable: true,
        configurable: true,
      });
      Object.defineProperty(window, 'scrollY', {
        value: testY,
        writable: true,
        configurable: true,
      });
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.x).toBe(testX);
    expect(result.current.y).toBe(testY);
  });

  it('registers and unregisters scroll event listener', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useScrollPosition());
    unmount();

    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
