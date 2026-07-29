# Birthday Cake Candles

## Problem

You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.

## Example

```
candles = [4, 4, 1, 3]
```

Return:

```
2
```

Explanation: The tallest candles are 4 units high. There are 2 candles with that height.

## Function Description

Complete the `birthdayCakeCandles` function in `solution.js`.

- `int[] candles`: the candle heights

Returns:
- `int`: the number of candles that are tallest

## Constraints

- `1 <= n <= 100000` where `n` is the number of candles
- `1 <= candles[i] <= 10000000`

## Sample Input / Output

```
Input:  [3, 2, 1, 3]
Output: 2
```

## How to Run the Tests

With Bun:

```bash
bun run test.js
```

With Node.js:

```bash
node test.js
```

## Instructions

1. Open `solution.js`
2. Find the `birthdayCakeCandles` function
3. Return the count of how many candles are the tallest
4. Run the tests with `bun run test.js` or `node test.js`
5. Commit and push your changes
