import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    if (!ref.current || typeof callback !== 'function') return undefined;

    const handleClick = (event) => {
      if (ref.current.contains(event.target)) return;

      callback();
    };

    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
};

export default useOutsideClick;
