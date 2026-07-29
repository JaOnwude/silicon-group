/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  // TODO: return Alice's and Bob's scores as [aliceScore, bobScore]
 let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    }
  }

  return [aliceScore, bobScore];
}

module.exports = compareTriplets;
