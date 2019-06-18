import React, { FunctionComponent } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import { sliceLongText } from '../../../services';
import { MAX_LENGTH_OF_TITLE } from '../../../constants';
import { BookInterface } from '../../../interfaces';
import placeholder from '../../../static/img/book-cover-placeholder.png';
import { IMG_PATH } from '../../../constants';

interface SlideViewProps {
  slideData: BookInterface;
  classes: any;
  imageSize: string;
}

const SlideView: FunctionComponent<SlideViewProps> = ({
  slideData,
  classes,
  imageSize,
}): JSX.Element => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.slide}
    >
      <img
        className={classes.img}
        src={
          slideData.cover_i
            ? `${IMG_PATH}${slideData.cover_i}-${imageSize}.jpg`
            : placeholder
        }
        alt=""
      />
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {sliceLongText(slideData.title, MAX_LENGTH_OF_TITLE)}
      </Typography>
      <Typography variant="body2" color="textPrimary" gutterBottom>
        {slideData.author_name} {slideData.first_publish_year}
      </Typography>
    </Grid>
  );
};

const styles = ({ breakpoints }) =>
  createStyles({
    slide: {
      alignItems: 'center',
      minWidth: '100%',
      height: '100%',
    },
    img: {
      width: 'auto',
      height: 440,
      [breakpoints.up('md')]: {
        height: 470,
      },
      [breakpoints.up('lg')]: {
        height: 340,
      },
    },
  });

export default withStyles(styles)(React.memo(SlideView));
