import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from './components/Layout/Layout';
import BooksList from './components/BooksList/BooksList';
import fetchSearchData from './hooks/fetchSearchData';
import SearchBar from './components/SearchBar/SearchBar';
import { booksOnOnePage } from './constants';
import Typography from '@material-ui/core/Typography/Typography';

const App = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const {
    data: { docs, numFound },
    isLoading,
  } = fetchSearchData(query, page);
  const loaded: boolean = !isLoading && numFound > 0;
  const totalPages = Math.ceil(numFound / booksOnOnePage);
  const pageNumber = page - 1;
  const time = localStorage.getItem('lastSearch');
  const changePage = ({ selected }): void => setPage(selected + 1);
  return (
    <Layout>
      <SearchBar setQuery={setQuery} />
      <Typography variant="h6" color="primary" gutterBottom>
        {time}
      </Typography>
      {loaded ? (
        <BooksList
          docs={docs}
          totalPages={totalPages}
          changePage={changePage}
          page={pageNumber}
        />
      ) : (
        <Fade in={isLoading} unmountOnExit>
          <CircularProgress color="secondary" />
        </Fade>
      )}
    </Layout>
  );
};

export default App;
