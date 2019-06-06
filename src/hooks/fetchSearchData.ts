import { useEffect } from 'react';
import axios from 'axios';
import { HOST_PATH } from '../constants';

export const fetchSearchData = (query: string) => {
  const searchText = query;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(`${HOST_PATH}search.json?q=${query}`);
  //     return result.data;
  //   };
  //
  //   fetchData();
  // }, [query, searchText]);
};
