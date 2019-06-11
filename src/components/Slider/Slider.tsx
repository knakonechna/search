import React, { FunctionComponent, useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import SlideView from './SlideView/SlideView';
import { IMG_PATH } from '../../constants';
import { BookInterface } from '../../interfaces/BookInterface';
import swapSlide from '../../hooks/swapSlide';
import classnames from 'classnames';

interface SliderProps {
  docs: BookInterface[];
  classes: {
    container: string;
    arrowPrev: string;
    arrowNext: string;
    arrow: string;
  };
}

const Slider: FunctionComponent<SliderProps> = ({
  docs,
  classes,
}): JSX.Element => {
  const [index, setIndex] = useState(0);
  // setInterval((): void => {
  //   if (index < docs.length - 1) {
  //     setIndex(index + 1);
  //   } else {
  //     setIndex(0);
  //   }
  // }, 5000);
  const slideData = swapSlide(docs, index);

  const handlePrev = (): void => {
    if (index > 0) setIndex(index - 1);
    if (index === 0) setIndex(docs.length - 1);
  };
  const handleNext = (): void => {
    if (index < docs.length - 1) setIndex(index + 1);
    if (docs.length - 1 === index) setIndex(0);
  };
  return (
    <div className={classes.container}>
      <SlideView slideData={slideData} />
      <div>
        <div
          onClick={handlePrev}
          className={classnames(classes.arrow, classes.arrowPrev)}
        />
        <div
          onClick={handleNext}
          className={classnames(classes.arrow, classes.arrowNext)}
        />
      </div>
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
  arrow: {
    position: 'absolute' as 'absolute',
    top: '50%',
    width: 40,
    height: 40,
    borderTop: '1px solid#000',
    cursor: 'pointer',
  },
  arrowPrev: {
    borderLeft: '1px solid#000',
    left: -10,
    transform: 'rotate(-45deg) translate(60%, 0%)',
    [breakpoints.up('md')]: {
      left: 20,
    },
  },
  arrowNext: {
    borderRight: '1px solid#000',
    right: -10,
    transform: 'rotate(45deg) translate(-60%, 0%)',
    [breakpoints.up('md')]: {
      right: 20,
    },
  },
});

export default withStyles(styles)(Slider);
