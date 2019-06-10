import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import placeholder from '../../static/img/book-cover-placeholder.png';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import { sliceLongText } from '../../services';

import { IMG_PATH, maxLengthOfTitle } from '../../constants';
import { BookInterface } from '../../interfaces/BookInterface';

interface BookCardProps {
  book: BookInterface;
  classes: {
    card: string;
    media: string;
    content: string;
    textColor: string;
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
      <Typography variant="h6" className={classes.textColor} gutterBottom>
        {sliceLongText(book.title, maxLengthOfTitle)}
      </Typography>
      <Typography variant="body2" className={classes.textColor} gutterBottom>
        {book.author_name} {book.first_publish_year}
      </Typography>
    </CardContent>
  </Card>
);
const styles = ({ breakpoints }) => ({
  card: {
    marginBottom: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    background: '#e3e9f6',
    [breakpoints.up('md')]: {
      flexDirection: 'row' as 'row',
      width: 'calc(50% - 7.5px)',
    },
    [breakpoints.up('lg')]: {
      height: 230,
      width: 'calc(33% - 7.5px)',
    },
  },
  media: {
    height: 200,
    backgroundColor: '#fff',
    [breakpoints.up('md')]: {
      width: 200,
      height: '100%',
    },
    [breakpoints.up('lg')]: {
      width: 214,
    },
  },
  content: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    textAlign: 'center' as 'center',
  },
  textColor: {
    color: '#F0353C',
  },
});
export default withStyles(styles)(BookCard);
