import React, { FunctionComponent, useEffect, useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import SlideView from './SlideView/SlideView';
import { BookInterface } from '../../interfaces';
import swapSlide from '../../hooks/swapSlide';
import windowFocusHandler from '../../hooks/windowFocusHandler';
import Navigation from './Navigation/Navigation';
import useInterval from '../../hooks/useInterval';

interface SliderProps {
  docs: BookInterface[];
  classes: {
    container: string;
  };
}

const Slider: FunctionComponent<SliderProps> = ({
  docs,
  classes,
}): JSX.Element => {
  const isOnFocus = windowFocusHandler();
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(5000);
  const slideData = swapSlide(docs, index);

  const handlePrev = (): void => {
    if (index > 0) setIndex(index - 1);
    if (index === 0) setIndex(docs.length - 1);
  };
  const handleNext = (): void => {
    if (index < docs.length - 1) setIndex(index + 1);
    if (docs.length - 1 === index) setIndex(0);
  };
  useInterval(handleNext, delay);

  useEffect(() => {
    if (!isOnFocus) {
      setDelay(0);
    } else {
      setDelay(5000);
    }
  }, [isOnFocus]);

  return (
    <div className={classes.container}>
      <SlideView slideData={slideData} />
      <Navigation handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

const styles = ({ breakpoints }) => ({
  container: {
    height: 500,
    marginBottom: 50,
    padding: '50px 0px',
    background: '#eeeff1',
    position: 'relative' as 'relative',
    [breakpoints.up('lg')]: {
      height: 400,
      width: '100%',
    },
  },
});

export default withStyles(styles)(Slider);
