export function throttle(callback: () => void, waitInterval: number) {
  let isWaiting = true;
  return function() {
    if (isWaiting) {
      callback();       
      isWaiting = false;
      setTimeout(() => {
        isWaiting = true;
      }, waitInterval);
    }
  };  
}