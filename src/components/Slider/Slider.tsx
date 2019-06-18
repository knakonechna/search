import React, { FunctionComponent, useEffect, useState } from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import SlideView from './SlideView/SlideView';
import { BookInterface } from '../../interfaces';
import windowFocusHandler from '../../hooks/windowFocusHandler';
import Navigation from './Navigation/Navigation';
import useInterval from '../../hooks/useInterval';

interface SliderProps {
  docs: BookInterface[];
  imageSize: string;
  classes: any;
}

const Slider: FunctionComponent<SliderProps> = ({
  docs,
  imageSize,
  classes,
}): JSX.Element => {
  const isOnFocus = windowFocusHandler();
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(5000);
  const handlePrev = (): void => {
    if (index > 0) setIndex(index - 1);
    if (index === 0) setIndex(docs.length - 1);
  };
  const handleNext = (): void => {
    if (index < docs.length - 1) setIndex(index + 1);
    if (docs.length - 1 === index) setIndex(0);
  };
  useInterval(handleNext, delay, index);

  useEffect((): void => {
    if (!isOnFocus) {
      setDelay(0);
    } else {
      setDelay(5000);
    }
  }, [isOnFocus]);

  return (
    <div className={classes.container}>
      <div
        className={classes.wrapper}
        style={{ transform: `translateX(${-index * 100}%` }}
      >
        {docs.map((slide: BookInterface) => (
          <SlideView key={slide.key} slideData={slide} imageSize={imageSize} />
        ))}
      </div>
      <Navigation handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

const styles = ({ breakpoints }) =>
  createStyles({
    container: {
      height: 500,
      width: '100%',
      marginBottom: 50,
      padding: '50px 0px',
      background: '#eeeff1',
      position: 'relative',
      overflow: 'hidden',
      [breakpoints.up('lg')]: {
        height: 400,
        width: '100%',
      },
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: '.75s ease-in',
    },
  });

export default withStyles(styles)(Slider);
