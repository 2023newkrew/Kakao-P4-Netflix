import { useEffect } from 'react';

const useOnEscape = (node, onEscape) => {
  useEffect(() => {
    if (!node) {
      return;
    }

    const closeOnEscape = (event) => {
      if (event.code === 'Escape') {
        onEscape();
      }
    };
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [node]);
};
export default useOnEscape;
