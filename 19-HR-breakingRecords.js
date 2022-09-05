// enunciado: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

function breakingRecords(scores) {
  let totalBestRecords = 0;
  let totalWorstRecords = 0;
  
  let bestRecord = scores[0];
  let worstRecord = scores[0];
  let index = 0;

  for (index in scores) {
    if (scores[index] > bestRecord) {
      bestRecord = scores[index];
      totalBestRecords += 1;
    }  

    if (scores[index] < worstRecord) {
      worstRecord = scores[index];
      totalWorstRecords += 1;
    }  
  }

  return [totalBestRecords, totalWorstRecords];
};

// console.log(breakingRecords([12, 24, 10, 24]));
// console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));