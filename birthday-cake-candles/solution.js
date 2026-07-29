/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // TODO: return the number of tallest candles
  const talest = Math.max(...candles);
  let count = 0;
  for (const candle of candles) {
    if (candle === talest) {
      count++;
    }
  }  
  return count;
}

module.exports = birthdayCakeCandles;
