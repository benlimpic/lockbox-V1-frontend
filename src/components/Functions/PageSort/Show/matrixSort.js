export const matrixSort = (matrix, page) => {
  let matrixArray = matrix;
  let pageArray = matrixArray.slice(page * 64, (page + 1) * 64);

  let PG = [];
  let C1 = [];
  let C2 = [];
  let C3 = [];
  let C4 = [];

  for (let i = 0; i < 16; i++) {
    let block = pageArray.slice(i * 4, i * 4 + 4);

    if (i < 4) {
      C1.push(block);
    } else if (i > 3 && i < 8) {
      C2.push(block);
    } else if (i > 7 && i < 12) {
      C3.push(block);
    } else if (i > 11 && i < 16) {
      C4.push(block);
    }
  }

  PG.push(C1, C2, C3, C4);

  return PG;
};

export default matrixSort;
