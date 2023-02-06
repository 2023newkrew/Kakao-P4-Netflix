import{ useEffect } from "react";

export default function useClickOuter(elementSelector:string, toggle:()=>void) {
  useEffect(() => {
    const handleClick = (event:MouseEvent) => {
      if(event.target === null) return;
      if ((event.target as HTMLElement).closest(elementSelector)) return;
      toggle();
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  },[]);
}
