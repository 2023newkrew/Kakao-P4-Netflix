import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function useTimeOutEvent(ref, invokeEventType, handler, cancelEventType, delay) {
  const timer = useRef(null);

  const invokeEvent = (event) => {
    timer.current = setTimeout(handler, delay);
  };
  const cancelEvent = (event) => {
    clearTimeout(timer.current);
  };

  useEffect(() => {
    const target = ref.current;
    target.addEventListener(invokeEventType, invokeEvent);
    target.addEventListener(cancelEventType, cancelEvent);

    return () => {
      target.removeEventListener(invokeEventType, invokeEvent);
      target.removeEventListener(cancelEventType, cancelEvent);
    };
  });
}
