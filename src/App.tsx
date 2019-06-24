import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from './components/Layout/Layout';
import BooksList from './components/BooksList/BooksList';
import fetchSearchData from './hooks/fetchSearchData';
import SearchBar from './components/SearchBar/SearchBar';
import { BOOKS_ON_ONE_PAGE } from './constants';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Slider from './components/Slider/Slider';
import useWindowDimensions from './hooks/useRenderImageSize';
import LastSearchTimer from './components/LastSearchTimer/LastSearchTimer';

const App = (): JSX.Element => {
  const [state, setState] = useState({
    query: '',
    page: 1,
  });
  const {
    data: { docs, numFound },
    isLoading,
  } = fetchSearchData(state.query, state.page);

  const loaded = !isLoading && numFound > 0;
  const totalPages = Math.ceil(numFound / BOOKS_ON_ONE_PAGE);
  const changePage = ({ selected }): void =>
    setState({ query: state.query, page: selected });
  const imageSize = useWindowDimensions();
  return (
    <Layout>
      <Typography variant="h3" color="textPrimary" gutterBottom>
        Let`s search book for you!
      </Typography>
      <SearchBar setQuery={setState} />
      {loaded ? (
        <>
          <LastSearchTimer />
          <Slider imageSize={imageSize} docs={docs} />
          <BooksList
            docs={docs}
            totalPages={totalPages}
            changePage={changePage}
            page={state.page}
            imageSize={imageSize}
          />
        </>
      ) : (
        <Grid container justify="center">
          <Fade in={isLoading} unmountOnExit>
            <CircularProgress color="primary" />
          </Fade>
        </Grid>
      )}
    </Layout>
  );
};

export default App;
