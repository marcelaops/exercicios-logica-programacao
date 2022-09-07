// enunciado: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let index = 0;
  
  let countOfApples = 0;
  for (index in apples) {
    let position = a + apples[index]; 
    if (position >= s && position <= t) countOfApples += 1;
  }
  console.log(countOfApples);

  let countOfOranges = 0;
  for (index in oranges) {
    let position = b + oranges[index]; 
    if (position >= s && position <= t) countOfOranges += 1;
  }
  console.log(countOfOranges);
};

// s = começo da casa
// t = termino da casa
// a = apple tree
// b = orange tree 
// apple =  integer array, distances at which each, of the 3 apple, apple falls from the tree.
// oranges =  integer array, distances at which each orange falls from the tree.

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6, 0]);
