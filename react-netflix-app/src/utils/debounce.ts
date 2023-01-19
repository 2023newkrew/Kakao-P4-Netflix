export function debounce(callback: () => void, waitInterval: number) {
  let timeoutId: NodeJS.Timeout;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
    }, waitInterval);
  };
}