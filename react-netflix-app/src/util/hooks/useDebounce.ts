import { useCallback, useRef } from "react";

export default function useDebounce(handler:EventListener, delay:number, loadStartHandler:EventListener|null = null, loadEndHandler:EventListener|null = null) {
  const timeOut = useRef<NodeJS.Timeout | null>(null);

  const handlerRef = useRef(handler);
  const loadStartHandlerRef = useRef(loadStartHandler);
  const loadEndHandlerRef = useRef(loadEndHandler);
  const debounceHandler = useCallback(
    (event:Event) => {
      if (loadStartHandlerRef.current) loadStartHandlerRef.current(event);
      if(timeOut.current)clearTimeout(timeOut.current);

      timeOut.current = setTimeout(() => {
        handlerRef.current(event);
        if (loadEndHandlerRef.current) loadEndHandlerRef.current(event);
      }, delay);
    },
    [delay]
  );

  return debounceHandler;
}
