import React, { FunctionComponent } from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import { sliceLongText } from '../../../services';
import { MAX_LENGTH_OF_TITLE } from '../../../constants';
import { SlideDataInterface } from '../../../interfaces';

interface SlideViewProps {
  slideData: SlideDataInterface;
  classes: {
    img: string;
    slide: string;
  };
}

const SlideView: FunctionComponent<SlideViewProps> = ({
  slideData,
  classes,
}): JSX.Element => {
  return (
    <div className={classes.slide}>
      <img className={classes.img} src={slideData.image} alt="" />
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {sliceLongText(slideData.title, MAX_LENGTH_OF_TITLE)}
      </Typography>
      <Typography variant="body2" color="textPrimary" gutterBottom>
        {slideData.author} {slideData.publishYear}
      </Typography>
    </div>
  );
};

const styles = () =>
  createStyles({
    slide: {
      textAlign: 'center',
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: '.3s ease-in',
    },
    img: {
      width: 'auto',
      height: '80%',
    },
  });

export default withStyles(styles)(React.memo(SlideView));
