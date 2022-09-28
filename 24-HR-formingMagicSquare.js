// enunciado: https://www.hackerrank.com/challenges/magic-square-forming/problem?h_r=internal-search

// Eu não consegui dar o start sozinha, comecei vendo o que o Gus fez. 1º ela criou uma variável com todos os Magic Squares de base 3x3 possíveis.

function formingMagicSquare(s) {
  let magicSquares = [
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
  ];
  let maxValue = Number.MAX_VALUE;
  
  for (let index = 0; index < magicSquares.length; index += 1) { 
    // esse for de fora vai andar 8x, a quantidade de arrays dentro do magicSquares

    let min = 0; 
    // coloquei dentro do for para ela sempre reiniciar com 0.

    // outro for para varer as linhas:
    for (let line = 0; line < s.length; line += 1) {
      // Eu tb tenho que andar dentro das colunas -> outro for:
      for (let column = 0; column < s.length; column += 1) {
        min += Math.abs(s[line][column] - magicSquares[index][line][column]);
        // coloco o index para saber quais dos jogos eu estou = qual das arrays do magicSquare eu estou.
      }
    }
    maxValue = Math.min(maxValue, min);
  }
  return maxValue;
}

console.log(formingMagicSquare([
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2]])); // 7

// console.log(formingMagicSquare([[4,9,2], [3,5,7], [8,1,5]]));