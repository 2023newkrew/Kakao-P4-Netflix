/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { USE_DEBOUNCE_DELAY_TIME } from '@/constants/hook';

const useDebounce = (callback, dependencies = [], { delayTime = USE_DEBOUNCE_DELAY_TIME } = {}) => {
  useEffect(() => {
    if (!callback) return undefined;

    const timeout = setTimeout(() => {
      callback();
    }, delayTime);
    return () => clearTimeout(timeout);
  }, [delayTime, ...dependencies]);
};

export default useDebounce;
