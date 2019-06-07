import React from 'react';
import ReactPaginate from 'react-paginate';
import { BookInterface } from '../../interfaces/BookInterface';
import BookCard from '../BookCard/BookCard';
import Grid from '@material-ui/core/Grid/Grid';

const BooksList: Function = ({ docs, totalPages }): JSX.Element => (
  <>
    <Grid container justify="space-between">
      {docs.map(
        (el: BookInterface): JSX.Element => (
          <BookCard book={el} key={el.key} />
        )
      )}
    </Grid>
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      activeClassName={'active'}
    />
  </>
);

export default BooksList;
