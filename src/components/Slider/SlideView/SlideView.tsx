import React, { FunctionComponent } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';
import { sliceLongText } from '../../../services';
import { maxLengthOfTitle } from '../../../constants';

interface SlideViewProps {
  slideData?: any;
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
        {sliceLongText(slideData.title, maxLengthOfTitle)}
      </Typography>
      <Typography variant="body2" color="textPrimary" gutterBottom>
        {slideData.author} {slideData.publishYear}
      </Typography>
    </div>
  );
};

const styles = () => ({
  slide: {
    textAlign: 'center' as 'center',
    height: '100%',
    position: 'relative' as 'relative',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: '.3s ease-in',
  },
  img: {
    width: 'auto',
    maxHeight: '80%',
  },
});

export default withStyles(styles)(React.memo(SlideView));
