import { useEffect, useState } from 'react';

export default function useInfiniteScroll() {
  const [isIntersecting, setIntersecting] = useState(false);
  const [observeTarget, setObserveTarget] = useState(null);

  useEffect(() => {
    if (!observeTarget) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(observeTarget);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [observeTarget]);

  return [isIntersecting, setObserveTarget];
}
