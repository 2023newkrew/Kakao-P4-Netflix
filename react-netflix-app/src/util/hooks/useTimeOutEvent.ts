import { EventType } from "@testing-library/react";
import React, { useEffect } from "react";
import { useRef } from "react";

type TimeoutEventType = "mouseenter"|"mouseleave"|EventType;
export default function useTimeOutEvent(ref:React.RefObject<HTMLElement>, invokeEventType:TimeoutEventType, handler:()=>void, cancelEventType:TimeoutEventType, delay:number) {
  const timer = useRef<NodeJS.Timeout|null>(null);

  const invokeEvent = (event:Event) => {
    timer.current = setTimeout(handler, delay);
  };
  const cancelEvent = (event:Event) => {
    if(timer.current)
    clearTimeout(timer.current);
  };

  useEffect(() => {
    const target = ref.current;
    target?.addEventListener(invokeEventType, invokeEvent);
    target?.addEventListener(cancelEventType, cancelEvent);

    return () => {
      target?.removeEventListener(invokeEventType, invokeEvent);
      target?.removeEventListener(cancelEventType, cancelEvent);
    };
  }, []);
}
