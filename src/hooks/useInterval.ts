import { useEffect, useRef } from 'react';

export default (callback: any, delay: number): void => {
  const savedCallback: any = useRef();

  useEffect((): void => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = (): void => {
      savedCallback.current();
    };
    if (delay !== null && delay > 0) {
      let id = setInterval(tick, delay);
      return (): void => clearInterval(id);
    }
  }, [delay]);
};
