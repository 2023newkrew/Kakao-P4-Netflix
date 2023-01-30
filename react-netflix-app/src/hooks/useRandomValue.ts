import { useEffect, useState } from 'react';


export function useRandomValue<T>(arr: T[]) {
  const [randomValue, setRandomValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    setRandomValue(arr[randomNumber]);
  }, [arr]);
  
  return randomValue;
}