import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from './components/Layout/Layout';
import BooksList from './components/BooksList/BooksList';
import fetchSearchData from './hooks/fetchSearchData';
import SearchBar from './components/SearchBar/SearchBar';
import { booksOnOnePage } from './constants';
import Typography from '@material-ui/core/Typography/Typography';
import Slider from './components/Slider/Slider';

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
  const changePage = ({ selected }): void => setPage(selected + 1);
  const { navigator }: any = window;
  const language = navigator.userLanguage || navigator.language;
  return (
    <Layout>
      <Typography variant="h3" color="textPrimary" gutterBottom>
        Let`s search book for you!
      </Typography>
      <SearchBar setQuery={setQuery} />
      <Typography variant="body2" color="textPrimary" gutterBottom>
        Your last search was: {time} <br />
        Your current language: {language}
      </Typography>
      {loaded ? (
        <>
          <Slider docs={docs} />
          <BooksList
            docs={docs}
            totalPages={totalPages}
            changePage={changePage}
            page={page - 1}
          />
        </>
      ) : (
        <Fade in={isLoading} unmountOnExit>
          <CircularProgress color="primary" />
        </Fade>
      )}
    </Layout>
  );
};

export default App;
