// Given an array of integers, find the sum of its elements. For example, if the array ar = [1, 2, 3], 1 + 2 + 3 = 6, so return 6.

ar = [1, 2, 3]

const simpleArraySum = (array) => {
  // Write your code here
  let sum = 0;
  for(let index in array) sum += array[index];

  return sum;
}

console.log(simpleArraySum(ar));