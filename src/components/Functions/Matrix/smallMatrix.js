import React from "react";

function smallMatrix(array) {
  let matrix = [];

  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < array.length; j++) {
      //! TMK Processing
      i === 0
        ? array[j] < 8
          ? row.push(array[j] + 2)
          : row.push(array[j] - 8)
        : //# Small Matrix Processing
        matrix[i - 1][j] < 8
        ? row.push(matrix[i - 1][j] + 2)
        : row.push(matrix[i - 1][j] - 8);
    }
    matrix.push(row);
  }

  return matrix;
}

export default smallMatrix;
