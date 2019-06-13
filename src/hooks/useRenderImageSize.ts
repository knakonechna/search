import { useEffect, useState } from 'react';
import { getImageSize } from '../services';

const getWindowDimensions = (): string => {
  const { innerWidth: width } = window;
  return getImageSize(width);
};

export default (): string => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect((): any => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
