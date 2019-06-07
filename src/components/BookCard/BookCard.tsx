import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import placeholder from '../../static/img/book-cover-placeholder.png';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import { IMG_PATH } from '../../constants';
import { BookInterface } from '../../interfaces/BookInterface';

interface BookCardProps {
  book: BookInterface;
  classes: {
    card: string;
    media: string;
    content: string;
  };
}

const BookCard: FunctionComponent<BookCardProps> = ({
  book,
  classes,
}): JSX.Element => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={book.cover_i ? `${IMG_PATH}${book.cover_i}-L.jpg` : placeholder}
    />
    <CardContent className={classes.content}>
      <Typography variant="h6" color="primary" gutterBottom>
        {book.title}
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        {book.first_publish_year}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {book.author_name}
      </Typography>
    </CardContent>
  </Card>
);
const styles = ({ breakpoints }) => ({
  card: {
    boxShadow: 'none',
    marginBottom: 15,
    border: '1px solid#c8c8c8',
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    [breakpoints.up('md')]: {
      flexDirection: 'row' as 'row',
      width: 'calc(50% - 7.5px)',
    },
    [breakpoints.up('lg')]: {
      height: 230,
      width: 'calc(30% - 7.5px)',
    },
  },
  media: {
    height: 200,
    borderRight: '1px solid#c8c8c8',
    [breakpoints.up('md')]: {
      width: 200,
      height: '100%',
    },
    [breakpoints.up('lg')]: {
      width: 180,
    },
  },
  content: {
    flex: 2,
  },
});
export default withStyles(styles)(BookCard);
