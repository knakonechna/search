import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from './components/Layout/Layout';
import BooksList from './components/BooksList/BooksList';
import fetchSearchData from './hooks/fetchSearchData';
import SearchBar from './components/SearchBar/SearchBar';

const App = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const {
    data: { docs, numFound },
    isLoading,
  } = fetchSearchData(query);
  const loaded: boolean = !isLoading && numFound > 0;
  return (
    <Layout>
      <SearchBar setQuery={setQuery} />
      {loaded ? (
        <BooksList docs={docs} />
      ) : (
        <Fade in={isLoading} unmountOnExit>
          <CircularProgress color="secondary" />
        </Fade>
      )}
    </Layout>
  );
};

export default App;
