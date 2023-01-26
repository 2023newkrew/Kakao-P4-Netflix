import { useEffect, useState } from 'react';

const useIsTop = (delayTime = 100) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let timerId;

    const handleScroll = () => {
      if (!timerId) {
        timerId = setTimeout(() => {
          timerId = null;
          setIsTop(window.pageYOffset === 0);
        }, delayTime);
      }
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
