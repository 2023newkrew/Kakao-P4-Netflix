import React, { useRef, useEffect, useState } from "react";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";
import { CheckTopDiv, HeaderContainer } from "./styles";

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
      <CheckTopDiv ref={topCheckerRef}></CheckTopDiv>
      <HeaderContainer isTop={isTop}>
        <HeaderLeft />
        <HeaderRight />
      </HeaderContainer>
    </>
  );
}
