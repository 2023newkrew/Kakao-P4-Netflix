import React, { useCallback } from "react";

export default function useDebounce(handler, delay, loadStartHandler = null, loadEndHandler = null) {
  let timeOut = undefined;

  const debounceHandler = useCallback((event) => {
    if (loadStartHandler) loadStartHandler();
    clearTimeout(timeOut);

    timeOut = setTimeout(() => {
      handler(event);
      if (loadEndHandler) loadEndHandler();
    }, delay);
  }, []);

  return debounceHandler;
}
