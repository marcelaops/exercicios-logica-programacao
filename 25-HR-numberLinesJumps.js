// Enunciado: https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=false

function kangaroo(x1, v1, x2, v2) {
  let location1 = x1;
  let location2 = x2;
  let sameLocation = 'NO';

  for (let index = 0; index < 10000; index += 1) {
    location1 += v1;
    location2 += v2;

    if (location1 === location2) sameLocation = 'YES';
  }

  return sameLocation;
}

// console.log(kangaroo(2, 1, 1, 2));
console.log(kangaroo(0, 2, 5, 3));
