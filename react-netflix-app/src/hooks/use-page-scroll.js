import { useEffect, useState } from 'react';

const usePageScroll = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scroll;
};

export default usePageScroll;
