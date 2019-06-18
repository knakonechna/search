import React, { FunctionComponent } from 'react';
import Pagination from '../Pagination/Pagination';
import { BookInterface } from '../../interfaces';
import BookCard from '../BookCard/BookCard';
import Grid from '@material-ui/core/Grid/Grid';

interface BooksListProps {
  changePage({ selected: number }): void;
  totalPages: number;
  docs: BookInterface[];
  page: number;
  imageSize: string;
}

const BooksList: FunctionComponent<BooksListProps> = ({
  docs,
  totalPages,
  changePage,
  imageSize,
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
    <Pagination
      totalPages={totalPages}
      currentPage={page}
      changePage={changePage}
    />
  </>
);

export default BooksList;
