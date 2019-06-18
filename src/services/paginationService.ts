import { PaginationInterface } from '../interfaces';

export default (total, currentPage): PaginationInterface[] => {
  let paginationArray: PaginationInterface[] = [];

  for (let i = 0; i < total; i++) {
    const numOfPage = i + 1;
    const isInShowRange =
      numOfPage >= currentPage - 3 && numOfPage <= currentPage + 3;
    paginationArray = [
      ...paginationArray,
      {
        number: numOfPage,
        active: numOfPage === currentPage,
        show: isInShowRange,
      },
    ];
  }
  return paginationArray;
};
