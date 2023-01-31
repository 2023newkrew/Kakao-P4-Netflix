import { useEffect } from 'react';

const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (!isLocked) {
      document.body.style.removeProperty('overflow-y');
    } else {
      document.body.style.setProperty('overflow-y', 'hidden');
    }
  }, [isLocked]);
};
export default useBodyScrollLock;
