import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
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
  let theta, radius, angle;
  const isOnFocus = windowFocusHandler();
  const [state, setState] = useState({
    index: 0,
    delay: 5000,
  });
  const sliderRef = useRef<HTMLDivElement>(null);
  theta = 360 / docs.length;
  if (sliderRef.current) {
    radius = Math.round(
      sliderRef.current.offsetWidth / 2 / Math.tan(Math.PI / docs.length)
    );
  }
  angle = theta * state.index * -1;
  const handlePrev = (): void => {
    setState({ index: state.index - 1, delay: state.delay });
  };
  const handleNext = (): void => {
    setState({ index: state.index + 1, delay: state.delay });
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
        ref={sliderRef}
        style={{ transform: ` translateZ(-${radius}px) rotateY(${angle}deg)` }}
      >
        {docs.map((slide: BookInterface, i: number) => (
          <SlideView
            key={slide.key}
            slideData={slide}
            imageSize={imageSize}
            radius={radius}
            index={i}
            theta={theta}
          />
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
      position: 'relative',
      overflow: 'hidden',
      padding: '50px 0',
      backgroundColor: '#fff',
      [breakpoints.up('lg')]: {
        height: 400,
        width: '100%',
      },
    },
    wrapper: {
      width: '100%',
      height: '100%',
      transition: 'transform 1s',
      transformStyle: 'preserve-3d',
      position: 'absolute',
    },
  });

export default withStyles(styles)(Slider);
