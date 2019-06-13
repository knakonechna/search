import React, { FunctionComponent } from 'react';
import ReactPaginate from 'react-paginate';
import { BookInterface } from '../../interfaces';
import BookCard from '../BookCard/BookCard';
import Grid from '@material-ui/core/Grid/Grid';
import { withStyles } from '@material-ui/core';

interface BooksListProps {
  changePage({ selected: number }): void;
  totalPages: number;
  docs: BookInterface[];
  classes: {
    active: string;
    paginationContainer: string;
  };
  page: number;
  imageSize: string;
}

const BooksList: FunctionComponent<BooksListProps> = ({
  docs,
  totalPages,
  changePage,
  imageSize,
  classes,
  page,
}): JSX.Element => (
  <>
    <Grid container justify="space-between">
      {docs.map(
        (el: BookInterface): JSX.Element => (
          <BookCard imageSize={imageSize} book={el} key={el.key} />
        )
      )}
    </Grid>
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      pageCount={totalPages}
      onPageChange={changePage}
      initialPage={page}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      activeClassName={classes.active}
      containerClassName={classes.paginationContainer}
    />
  </>
);
const styles = theme => ({
  active: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  paginationContainer: {
    padding: 0,
    margin: 0,
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'center',
    '& > li': {
      padding: 5,
      margin: 2,
      cursor: 'pointer',
    },
    '& > li.disabled': {
      display: 'none',
    },
  },
});
export default withStyles(styles)(BooksList);
