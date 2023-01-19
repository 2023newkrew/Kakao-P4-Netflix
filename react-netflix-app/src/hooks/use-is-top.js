import { useEffect, useState } from 'react';

const useIsTop = (debounce = 50) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let timerId;

    const handleScroll = () => {
      if (timerId) clearTimeout(timerId);

      timerId = setTimeout(() => {
        setIsTop(window.pageYOffset === 0);
      }, debounce);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timerId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [debounce]);

  return isTop;
};

export default useIsTop;
