import { useEffect, useState } from 'react';

const useIsTop = (delayTime = 50) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let timerId;

    const handleScroll = () => {
      if (timerId) clearTimeout(timerId);

      timerId = setTimeout(() => {
        setIsTop(window.pageYOffset === 0);
      }, delayTime);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timerId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delayTime]);

  return isTop;
};

export default useIsTop;
