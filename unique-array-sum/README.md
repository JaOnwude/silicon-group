# Unique Array Sum

## Problem

Given an array of integers, find the sum of its **unique** elements.

If a number appears multiple times in the array, only count it once in the sum.

## Example

```
ar = [1, 2, 2, 3, 4, 4]
```

Return:

```
10
```

Explanation: The unique numbers are `1, 2, 3, 4`. Their sum is `1 + 2 + 3 + 4 = 10`.

```
ar = [4, 4, 4, 4]
```

Return:

```
4
```

Explanation: The only unique number is `4`, so the sum is `4`.

## Function Description

Complete the `uniqueArraySum` function in `solution.js`.

- `int[] ar`: an array of integers

Returns:
- `int`: the sum of unique numbers in the array

## Constraints

- `0 <= ar.length <= 1000`
- `-1000 <= ar[i] <= 1000`

## Sample Input / Output

```
Input:  [5, 5, 5, 6, 7, 7]
Output: 18
```

Explanation: The unique numbers are `5, 6, 7`. Their sum is `5 + 6 + 7 = 18`.

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
2. Find the `uniqueArraySum` function
3. Return the correct sum for the array `ar`
5. Run the tests with `bun run test.js` or `node test.js`
6. Commit and push your changes
