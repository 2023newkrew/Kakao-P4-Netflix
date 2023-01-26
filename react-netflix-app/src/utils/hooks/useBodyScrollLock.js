import { useEffect, useRef } from 'react';

const useBodyScrollLock = (isLocked) => {
  const scrollY = useRef(0);
  const root = useRef(document.body.querySelector('#root'));
  useEffect(() => {
    if (!isLocked) {
      document.body.style.removeProperty('overflow');
      root.current.style.removeProperty('overflow-y');
      window.scroll({ top: scrollY.current, behavior: 'smooth' });
    } else {
      scrollY.current = window.scrollY;
      document.body.style.setProperty('overflow', 'hidden');
      root.current.style.setProperty('overflow-y', 'hidden');
    }
  }, [isLocked]);
};
export default useBodyScrollLock;
