import { useEffect } from 'react';

const useDeactivateScroll = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    const defaultOverflow = body.style.overflow;

    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = defaultOverflow;
    };
  }, []);
};

export default useDeactivateScroll;
