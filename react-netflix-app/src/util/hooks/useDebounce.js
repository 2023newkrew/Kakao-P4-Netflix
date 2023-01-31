import { useCallback, useRef } from "react";

export default function useDebounce(handler, delay, loadStartHandler = null, loadEndHandler = null) {
  const timeOut = useRef(null);

  const handlerRef = useRef(handler);
  const loadStartHandlerRef = useRef(loadStartHandler);
  const loadEndHandlerRef = useRef(loadEndHandler);
  const debounceHandler = useCallback(
    (event) => {
      if (loadStartHandlerRef.current) loadStartHandlerRef.current();
      clearTimeout(timeOut.current);

      timeOut.current = setTimeout(() => {
        handlerRef.current(event);
        if (loadEndHandlerRef.current) loadEndHandlerRef.current();
      }, delay);
    },
    [delay]
  );

  return debounceHandler;
}
