import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ResponsiveContext = React.createContext();

const ResponsiveProvider = ({ children }) => {
  const [cardsPerGroup, setCardsPerGroup] = useState(6);

  const isDesktop = useMediaQuery({ maxWidth: 1400 });
  const isSmallDesktop = useMediaQuery({ maxWidth: 1100 });
  const isTablet = useMediaQuery({ maxWidth: 800 });
  const isMobile = useMediaQuery({ maxWidth: 500 });

  useEffect(() => {
    if (isMobile) {
      setCardsPerGroup(2);
    } else if (isTablet) {
      setCardsPerGroup(3);
    } else if (isSmallDesktop) {
      setCardsPerGroup(4);
    } else if (isDesktop) {
      setCardsPerGroup(5);
    } else {
      // default
      setCardsPerGroup(6);
    }
  }, [isDesktop, isSmallDesktop, isTablet, isMobile]);

  return (
    <ResponsiveContext.Provider value={{ cardsPerGroup }}>{children}</ResponsiveContext.Provider>
  );
};

export { ResponsiveContext, ResponsiveProvider };
