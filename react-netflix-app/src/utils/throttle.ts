export default function throttle<F extends (...args: any[]) => any>(func: F, waitMilliseconds = 50) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  function throttledFunction(...args: Parameters<F>) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func(...args);
        timeoutId = undefined;
      }, waitMilliseconds);
    }
  }

  throttledFunction.cancel = function cancel() {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
  };

  return throttledFunction;
}
