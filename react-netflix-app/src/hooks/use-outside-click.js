import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;

      callback?.();
    };

    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
};

export default useOutsideClick;
