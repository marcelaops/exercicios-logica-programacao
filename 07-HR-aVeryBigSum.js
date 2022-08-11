// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// The function is expected to return a LONG_INTEGER.
//  * The function accepts LONG_INTEGER_ARRAY ar as parameter.

function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;

  for (let index in ar) {
    sum += ar[index];
  }

  return sum;
}

array1 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(array1));