import { useEffect, useState } from 'react';
import placeholder from '../static/img/book-cover-placeholder.png';
import { IMG_PATH } from '../constants';
import { BookInterface, SlideDataInterface } from '../interfaces';

export default (
  docs: BookInterface[],
  index: number,
  imageSize: string
): SlideDataInterface => {
  const [slideData, setData] = useState({
    title: '',
    image: '',
    author: '',
    publishYear: '',
  });
  useEffect((): void => {
    const { cover_i: coverPath } = docs[index];
    // @ts-ignore
    setData({
      title: docs[index].title,
      image: coverPath
        ? `${IMG_PATH}${coverPath}-${imageSize}.jpg`
        : placeholder,
      author: docs[index].author_name,
      publishYear: docs[index].first_publish_year,
    });
  }, [docs, index, imageSize]);

  return slideData;
};
