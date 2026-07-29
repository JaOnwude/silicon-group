/*
 * Complete the 'uniqueArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function uniqueArraySum(ar) {
  // TODO: return the sum of unique numbers in the array
  const uniqueNumbers = new Set(ar);
  let sum = 0;

  for (const num of uniqueNumbers) {
    sum += num;
  }

  return sum;
}

module.exports = uniqueArraySum;
