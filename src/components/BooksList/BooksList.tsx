import React from 'react';
import { BookInterface } from '../../interfaces/BookInterface';
import BookCard from '../BookCard/BookCard';
import Grid from '@material-ui/core/Grid/Grid';

const BooksList: Function = ({ docs }): JSX.Element => (
  <Grid container justify="space-between">
    {docs.map(
      (el: BookInterface): JSX.Element => (
        <BookCard book={el} key={el.key} />
      )
    )}
  </Grid>
);

export default BooksList;
