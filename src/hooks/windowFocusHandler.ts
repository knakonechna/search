import { useEffect, useState } from 'react';

export default (): boolean => {
  const [onFocus, isOnFocus] = useState(true);

  const setOnFocus = (isFocus: boolean): void => {
    isOnFocus(isFocus);
  };

  useEffect(() => {
    window.addEventListener('focus', (): void => setOnFocus(true));
    window.addEventListener('blur', (): void => setOnFocus(false));
    // Specify how to clean up after this effect:
    return (): void => {
      window.removeEventListener('focus', (): void => setOnFocus(true));
      window.removeEventListener('blur', (): void => setOnFocus(false));
    };
  });
  return onFocus;
};
