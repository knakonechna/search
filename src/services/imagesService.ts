import { viewportSize } from '../constants';

const desktop = 1280;
const tablet = 960;
const modile = 320;

export const getImageSize = (width: number): string => {
  let sizeImage;
  if (width >= desktop) {
    sizeImage = viewportSize.lg;
  }
  if (width < desktop && width > tablet) {
    sizeImage = viewportSize.md;
  }
  if (width < tablet && width > modile) {
    sizeImage = viewportSize.sm;
  }
  return sizeImage;
};
