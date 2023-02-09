import { useEffect, useCallback } from 'react';

const ESCAPE_KEY_CODE = 'Escape';
const KEY_EVENT_TYPE = 'keydown';

const useEscapeKey = (onEscape: () => void) => {
  const handleEscKey = useCallback(
    (event: KeyboardEvent) => {
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
