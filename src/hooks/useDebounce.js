import { useEffect, useState } from 'react';

const useDebounce = (value, ms) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(value);
    }, ms);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, ms]);

  return state;
};

export default useDebounce;
