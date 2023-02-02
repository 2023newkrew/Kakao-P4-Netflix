import { useEffect, useState } from 'react';

export default function useDebouncedState(initialValue, delay = 500) {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timeoutID = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeoutID);
  }, [delay, value]);

  return [value, debouncedValue, setValue];
}
