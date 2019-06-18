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
  const [state, setState] = useState({
    index: 0,
    delay: 5000,
  });
  const handlePrev = (): void => {
    state.index > 0
      ? setState({ index: state.index - 1, delay: state.delay })
      : setState({ index: docs.length - 1, delay: state.delay });
  };
  const handleNext = (): void => {
    state.index < docs.length - 1
      ? setState({ index: state.index + 1, delay: state.delay })
      : setState({ index: 0, delay: state.delay });
  };
  useInterval(handleNext, state.delay, state.index);

  useEffect((): void => {
    if (!isOnFocus) {
      setState({ index: state.index, delay: 0 });
    } else {
      setState({ index: state.index, delay: 5000 });
    }
  }, [isOnFocus, state.index]);

  return (
    <div className={classes.container}>
      <div
        className={classes.wrapper}
        style={{ transform: `translateX(${-state.index * 100}%` }}
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
