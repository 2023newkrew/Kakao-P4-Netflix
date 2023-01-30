import React, { useEffect } from "react";

export default function useAddEventListener(
  ref,
  eventType,
  handler,
  condition = true,
  beforeAttachEventCallback = null
) {
  useEffect(() => {
    if (!condition) return;

    const target = ref.current;
    if (beforeAttachEventCallback) beforeAttachEventCallback();
    target.addEventListener(eventType, handler);

    return () => target.removeEventListener(eventType, handler);
  }, []);
}
