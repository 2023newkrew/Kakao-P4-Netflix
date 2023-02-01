import { useCallback, useRef } from 'react';

export default function useDebouncedCallback(callback, delay = 500) {
  const timeoutRef = useRef(null);

  return useCallback(
    (...args) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );
}
