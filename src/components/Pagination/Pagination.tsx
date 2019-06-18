import React, { FC, useMemo } from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import classnames from 'classnames';
import { PaginationInterface } from '../../interfaces';
import paginationService from '../../services/paginationService';

interface PaginationProps {
  classes: any;
  totalPages: number;
  currentPage: number;
  changePage({ selected: number }): void;
}

const Pagination: FC<PaginationProps> = ({
  classes,
  totalPages,
  currentPage,
  changePage,
}) => {
  const paginationArray = useMemo(
    (): PaginationInterface[] => paginationService(totalPages, currentPage),
    [totalPages, currentPage]
  );
  const indexOfActiveNumber = paginationArray.findIndex(
    (el: PaginationInterface): boolean => el.active
  );
  const activeNumber = paginationArray[indexOfActiveNumber].number;
  const isShowPrev = indexOfActiveNumber !== 0;
  const isShowNext = indexOfActiveNumber !== paginationArray.length - 1;
  return (
    <div className={classes.container}>
      {isShowPrev && (
        <li
          className={classes.previous}
          onClick={() => changePage({ selected: activeNumber - 1 })}
        >
          &laquo;
        </li>
      )}
      {paginationArray.map(
        (el: PaginationInterface) =>
          el.show && (
            <li
              key={el.number}
              className={classnames({
                [classes.active]: activeNumber === el.number,
              })}
              onClick={() => changePage({ selected: el.number })}
            >
              {el.number}
            </li>
          )
      )}
      {isShowNext && (
        <li
          className={classes.next}
          onClick={() => changePage({ selected: activeNumber + 1 })}
        >
          &raquo;
        </li>
      )}
    </div>
  );
};
const styles = theme =>
  createStyles({
    container: {
      padding: 0,
      margin: 0,
      display: 'flex',
      listStyle: 'none',
      justifyContent: 'center',
      '& > li': {
        padding: 5,
        margin: 2,
        cursor: 'pointer',
      },
    },
    active: {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  });

export default withStyles(styles)(Pagination);
