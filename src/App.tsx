import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HOST_PATH } from './constants';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BookInterface } from './interfaces/BookInterface';
import BookCard from './components/BookCard/BookCard';
import SearchBar from './components/SearchBar/SearchBar';
import Grid from '@material-ui/core/Grid/Grid';
import './App.css';

const App: React.FC = (): JSX.Element => {
  const [data, setData] = useState({ docs: [], numFound: 0 });
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect((): void => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(`${HOST_PATH}search.json?q=${query}`);
      setData(result.data);
      setIsLoading(false);
    };
    if (query.length > 0) {
      fetchData();
    }
  }, [query]);

  const { docs, numFound } = data;
  const loaded = !isLoading && numFound > 0;
  return (
    <Grid container direction="column">
      <SearchBar setQuery={setQuery} />
      {loaded ? (
        docs.map(
          (el: BookInterface): JSX.Element => (
            <BookCard book={el} key={el.key} />
          )
        )
      ) : (
        <Fade in={isLoading} unmountOnExit>
          <CircularProgress color="secondary" />
        </Fade>
      )}
    </Grid>
  );
};

export default App;
