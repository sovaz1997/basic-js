module.exports = function countCats( matrix ) {
  let cnt = 0;
  for(let i = 0; i < matrix.length; ++i) {
    for(let j = 0; j < matrix[i].length; ++j) {
      cnt += (matrix[i][j] === "^^");
    }
  }

  return cnt;
};
