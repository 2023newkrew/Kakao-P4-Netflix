import { useRef } from "react";

const useIntersectionObserver = (observeCallback, unObserveCallback, threshold) => {
  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observeCallback();
          } else {
            unObserveCallback();
          }
        });
      },
      { threshold: threshold }
    )
  );

  const observe = (element) => {
    observer.current.observe(element);
  };

  const unobserve = (element) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
};

export default useIntersectionObserver;
