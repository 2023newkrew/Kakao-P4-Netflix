import React, { useRef, useEffect, useState } from "react";
import styles from "./Header.css";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  const topCheckerRef = useRef(null);
  const observerRef = useRef(
    new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        entry.intersectionRatio === 0 ? setIsTop(false) : setIsTop(true);
      });
    })
  );

  useEffect(() => {
    observerRef.current.observe(topCheckerRef.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  return (
    <>
      <div className="header__check-top" ref={topCheckerRef}></div>
      <div className={"header" + (isTop ? "" : " not-top")}>
        <HeaderLeft />
        <HeaderRight />
      </div>
    </>
  );
}
