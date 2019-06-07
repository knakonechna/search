import { useEffect, useState } from 'react';
import axios from 'axios';
import { HOST_PATH } from '../constants';

export default (q: string, page: number) => {
  const [data, setData] = useState({ docs: [], numFound: 0 });
  const [isLoading, setIsLoading] = useState(false);

  useEffect((): void => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(`${HOST_PATH}search.json?q=${q}&page=${page}`);
      setData(result.data);
      localStorage.setItem('lastSearch', String(new Date()));
      setIsLoading(false);
    };
    if (q.length > 0) {
      fetchData();
    }
  }, [q, page]);

  return { data, isLoading };
};
