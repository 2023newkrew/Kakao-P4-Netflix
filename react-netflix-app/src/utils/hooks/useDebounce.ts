import { useEffect, useRef } from 'react';

const DEBOUNCE_DELAY = 200;
const useDebounce = (value: any, handler: () => void, delay = DEBOUNCE_DELAY) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    clearTimeout(timer.current);

    timer.current = setTimeout(handler, delay);
  }, [value]);
};
export default useDebounce;
