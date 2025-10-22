import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  // FIX: Initialize useRef with the callback argument. This resolves the error
  // about useRef expecting one argument and ensures the ref is always populated with a function.
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
