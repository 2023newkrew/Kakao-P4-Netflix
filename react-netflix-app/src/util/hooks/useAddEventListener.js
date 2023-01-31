import { useEffect, useRef } from "react";

export default function useAddEventListener(
  ref,
  eventType,
  handler,
  condition = true,
  beforeAttachEventCallback = null
) {
  const handlerRef = useRef(handler);
  useEffect(() => {
    if (!condition) return;

    const target = ref.current;
    const handlerRefTarget = handler.current;
    if (beforeAttachEventCallback) beforeAttachEventCallback();
    target.addEventListener(eventType, handlerRef.current);

    return () => target.removeEventListener(eventType, handlerRefTarget);
  }, [beforeAttachEventCallback, condition, eventType, handler, ref]);
}
