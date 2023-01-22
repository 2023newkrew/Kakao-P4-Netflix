import { useEffect, useRef } from 'react';

const useBodyScrollLock = (isLocked) => {
  const root = useRef(document.body.querySelector('#root'));
  useEffect(() => {
    if (!isLocked) {
      root.current.style.removeProperty('overflow-y');
    } else {
      root.current.style.setProperty('overflow-y', 'hidden');
    }
  }, [isLocked]);
};
export default useBodyScrollLock;
