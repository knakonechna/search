import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { IMG_PATH } from '../../constants';
import { BookInterface } from '../../interfaces/BookInterface';

interface BookCardProps {
  book: BookInterface;
}

const BookCard: FunctionComponent<BookCardProps> = ({ book }): JSX.Element => (
  <Card>
    <CardHeader title={book.title} subheader={book.first_publish_year} />
    {book.cover_i && <CardMedia image={`${IMG_PATH}${book.cover_i}-L.jpg`} />}
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {book.author_name}
      </Typography>
    </CardContent>
  </Card>
);

export default BookCard;
