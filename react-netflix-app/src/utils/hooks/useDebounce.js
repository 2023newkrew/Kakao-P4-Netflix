import { useEffect, useRef } from 'react';

const DEBOUNCE_DELAY = 200;
const useDebounce = (value, handler, delay = DEBOUNCE_DELAY) => {
  const timer = useRef(null);

  useEffect(() => {
    clearTimeout(timer.current);

    timer.current = setTimeout(handler, delay);
  }, [value]);
};
export default useDebounce;
