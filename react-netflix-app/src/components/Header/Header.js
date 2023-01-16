import React, { useRef, useEffect } from "react";
import styles from "./Header.css";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

export default function Header() {
  const headerRef = useRef(null);
  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      if (window.scrollY !== 0) {
        headerRef.current.classList.add("not-top");
      } else {
        headerRef.current.classList.remove("not-top");
      }
    });
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
}
