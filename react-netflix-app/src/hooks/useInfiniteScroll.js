import { useEffect, useState } from 'react';

export default function useInfiniteScroll() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [observingTarget, setObservingTarget] = useState(null);

  useEffect(() => {
    if (!observingTarget) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    observer.observe(observingTarget);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [observingTarget]);

  return [isIntersecting, setObservingTarget];
}
