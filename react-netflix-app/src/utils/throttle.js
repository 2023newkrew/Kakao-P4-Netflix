export default function throttle(func, waitMilliseconds = 50) {
  let timeoutId;
  function throttledFunction(thisBinding, ...args) {
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
