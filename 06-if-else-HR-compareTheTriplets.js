// Quem que é melhor a alicia ou o bob?


const aliceRating = [1, 2, 3];
const bobRating = [3, 2, 1];

const compareTriplets = (a, b) => {
  // Write your code here
  let aliciaPoints = 0;
  let bobPoints = 0;

  for (let index in a) {
    if (a[index] > b[index]) aliciaPoints += 1;
    else if (a[index] < b[index]) bobPoints += 1;
  }

  const scores = [aliciaPoints, bobPoints];

  return scores;
};

console.log(compareTriplets(aliceRating, bobRating));