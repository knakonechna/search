import React, { FunctionComponent } from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import classnames from 'classnames';

interface NavigationProps {
  handlePrev(): void;
  handleNext(): void;
  classes: {
    arrowPrev: string;
    arrowNext: string;
    arrow: string;
  };
}

const Navigation: FunctionComponent<NavigationProps> = ({
  handlePrev,
  handleNext,
  classes,
}): JSX.Element => {
  return (
    <>
      <div
        onClick={handlePrev}
        className={classnames(classes.arrow, classes.arrowPrev)}
      />
      <div
        onClick={handleNext}
        className={classnames(classes.arrow, classes.arrowNext)}
      />
    </>
  );
};

const styles = ({ breakpoints }) =>
  createStyles({
    arrow: {
      position: 'absolute',
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

export default withStyles(styles)(React.memo(Navigation));
