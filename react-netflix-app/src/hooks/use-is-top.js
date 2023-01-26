import { useEffect, useState } from 'react';
import { USE_IS_TOP_DELAY_TIME } from '@/constants/hook';

const useIsTop = (delayTime = USE_IS_TOP_DELAY_TIME) => {
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
