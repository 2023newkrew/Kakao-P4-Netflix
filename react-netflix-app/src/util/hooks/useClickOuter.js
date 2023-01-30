import React, { useEffect } from "react";

export default function useClickOuter(elementSelector, toggle) {
  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.closest(elementSelector)) return;
      toggle();
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  });
}
