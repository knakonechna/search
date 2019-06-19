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
  theta: number;
  index: number;
  radius: number;
  imageSize: string;
}

const SlideView: FunctionComponent<SlideViewProps> = ({
  slideData,
  classes,
  imageSize,
  theta,
  index,
  radius,
}): JSX.Element => {
  return (
    <Grid
      className={classes.slide}
      style={{
        transform: `rotateY(${theta * index}deg) translateZ(${radius}px)`,
      }}
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
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundColor: '#fff',
      textAlign: 'center',
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
