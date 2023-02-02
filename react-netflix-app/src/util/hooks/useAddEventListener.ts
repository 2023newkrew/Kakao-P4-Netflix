import { EventType } from "@testing-library/react";
import React, { useEffect, useRef } from "react";

export default function useAddEventListener(
  ref:React.RefObject<HTMLElement|Window>,
  eventType:EventType,
  handler:EventListener,
  condition = true,
  beforeAttachEventCallback:(()=>void)|null = null
) {
  const handlerRef = useRef(handler);
  useEffect(() => {
    if (!condition) return;

    const target = ref.current;
    const handlerRefTarget = handlerRef.current;
    if (beforeAttachEventCallback) beforeAttachEventCallback();
    target?.addEventListener(eventType, handlerRefTarget);

    return () => target?.removeEventListener(eventType, handlerRefTarget);
  }, [beforeAttachEventCallback, condition, eventType, handler, ref]);
}
