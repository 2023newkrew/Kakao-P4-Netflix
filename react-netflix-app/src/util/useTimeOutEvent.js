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
    ref.current.addEventListener(invokeEventType, invokeEvent);
    ref.current.addEventListener(cancelEventType, cancelEvent);

    return () => {
      ref.current.removeEventListener(invokeEventType, invokeEvent);
      ref.current.removeEventListener(cancelEventType, cancelEvent);
    };
  });
}
