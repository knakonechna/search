import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from './components/Layout/Layout';
import BooksList from './components/BooksList/BooksList';
import fetchSearchData from './hooks/fetchSearchData';
import SearchBar from './components/SearchBar/SearchBar';
import { booksOnOnePage } from './constants';

const App = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const {
    data: { docs, numFound },
    isLoading,
  } = fetchSearchData(query, page);
  const loaded: boolean = !isLoading && numFound > 0;
  const totalPages = Math.ceil(numFound / booksOnOnePage);
  const time = localStorage.getItem('lastSearch');
  return (
    <Layout>
      <SearchBar setQuery={setQuery} />
      <div>{time}</div>
      {loaded ? (
        <BooksList docs={docs} totalPages={totalPages} setPage={setPage} />
      ) : (
        <Fade in={isLoading} unmountOnExit>
          <CircularProgress color="secondary" />
        </Fade>
      )}
    </Layout>
  );
};

export default App;
