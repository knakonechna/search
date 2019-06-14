import { VIEW_PORT_SIZE } from '../constants';

const desktop = 1280;
const tablet = 960;
const modile = 320;

export const getImageSize = (width: number): string => {
  let sizeImage;
  if (width >= desktop) {
    sizeImage = VIEW_PORT_SIZE.lg;
  }
  if (width < desktop && width > tablet) {
    sizeImage = VIEW_PORT_SIZE.md;
  }
  if (width < tablet && width > modile) {
    sizeImage = VIEW_PORT_SIZE.sm;
  }
  return sizeImage;
};
