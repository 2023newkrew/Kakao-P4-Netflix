import { useEffect, useRef } from 'react';

export function usePrevState<T>(state: T) {
  const ref = useRef<T>();
   
  useEffect(() => {
    ref.current = state;
  }, [state]);
  
  return ref.current;
}