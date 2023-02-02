import { useEffect, useState } from 'react';

const useSyncLocalStorage = <T>(key: string) => {
  const [state, setState] = useState(JSON.parse(localStorage.getItem(key)!));

  const setItem = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  const removeItem = () => {
    localStorage.removeItem(key);
    setState(null);
  };

  return {
    state,
    setItem,
    removeItem,
  };
};
export default useSyncLocalStorage;
