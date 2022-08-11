// Given a square matrix, calculate the absolute difference between the sums of its diagonals. (matrizes quadradas)
//example:
    // 1 2 3
    // 4 5 6
    // 9 8 9 
  // The left-to-right diagonal = 1+5+9 = 15. The right to left diagonal = 3+5+9 = 17 . Their absolute difference is |15 - 17| = 2
  

function diagonalDifference(arr) {
  // Write your code here
  let rightDiagonal = 0;
  let leftDiagonal = 0;
  const n = arr.length;

  for (let index in arr) {
    rightDiagonal += arr[index][index];
    leftDiagonal += arr[index][n - 1 - index];
  }

  const absoluteDifference =  Math.abs(rightDiagonal - leftDiagonal);
  return absoluteDifference;
}

const array1 = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
console.log(diagonalDifference(array1));