import { useEffect, useState } from 'react';
import placeholder from '../static/img/book-cover-placeholder.png';
import { IMG_PATH } from '../constants';
import { BookInterface } from '../interfaces/BookInterface';

interface SlideData {
  title: string;
  image: string;
  author: string;
  publishYear: string;
}
export default (docs: BookInterface[], index: number): SlideData => {
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
      image: coverPath ? `${IMG_PATH}${coverPath}-L.jpg` : placeholder,
      author: docs[index].author_name,
      publishYear: docs[index].first_publish_year,
    });
  }, [docs, index]);

  return slideData;
};
