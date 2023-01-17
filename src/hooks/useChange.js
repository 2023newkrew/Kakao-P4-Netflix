import { useEffect } from 'react';
import usePrevious from './usePrevious';

const useChange = (callback, value) => {
  const previousValue = usePrevious(value);

  useEffect(() => {
    if (previousValue === value) return;
    callback(previousValue);
  }, [value]);
};

export default useChange;
