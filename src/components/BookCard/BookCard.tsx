import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import placeholder from '../../static/img/book-cover-placeholder.png';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/core';
import { sliceLongText } from '../../services';

import { IMG_PATH, MAX_LENGTH_OF_TITLE } from '../../constants';
import { BookInterface } from '../../interfaces';

interface BookCardProps {
  book: BookInterface;
  imageSize: string;
  classes: {
    card: string;
    media: string;
    content: string;
  };
}

const BookCard: FunctionComponent<BookCardProps> = ({
  book,
  imageSize,
  classes,
}): JSX.Element => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={
        book.cover_i
          ? `${IMG_PATH}${book.cover_i}-${imageSize}.jpg`
          : placeholder
      }
    />
    <CardContent className={classes.content}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {sliceLongText(book.title, MAX_LENGTH_OF_TITLE)}
      </Typography>
      <Typography variant="body2" color="textPrimary" gutterBottom>
        {book.author_name} {book.first_publish_year}
      </Typography>
    </CardContent>
  </Card>
);
const styles = ({ breakpoints }) =>
  createStyles({
    card: {
      marginBottom: 15,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#eeeff1',
      [breakpoints.up('md')]: {
        flexDirection: 'row',
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
      flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: 'center',
    },
  });
export default withStyles(styles)(BookCard);
