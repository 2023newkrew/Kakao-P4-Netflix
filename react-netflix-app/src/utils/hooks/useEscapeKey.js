import { useEffect, useCallback } from 'react';

const ESCAPE_KEY_CODE = 'Escape';
const KEY_EVENT_TYPE = 'keydown';

const useEscapeKey = (onEscape) => {
  const handleEscKey = useCallback(
    (event) => {
      if (event.code === ESCAPE_KEY_CODE) {
        onEscape();
      }
    },
    [onEscape],
  );

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey);
    };
  }, [handleEscKey]);
};
export default useEscapeKey;
