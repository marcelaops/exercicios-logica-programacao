// enunciado: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

function divisibleSumPairs(n, k, ar) {
  let index = 0;
  let totalOfPairs = 0;

  for (index in ar) {
    let index2 = 0;
    for (index2 in ar) {
      if (index != index2) {
        if ((ar[index] + ar[index2]) % k === 0) totalOfPairs += 1;        
      }
    }
  }

  return totalOfPairs / 2;
};

// n =  length of array ar
// k = integer divisor
// ar = array of integers
// returns = int - number of pairs

// console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));