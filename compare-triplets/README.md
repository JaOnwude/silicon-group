# Compare the Triplets

## Problem

Alice and Bob each created a problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet `a = (a[0], a[1], a[2])`, and the rating for Bob's challenge is the triplet `b = (b[0], b[1], b[2])`.

Your task is to calculate their comparison points by comparing each category:

- If `a[i] > b[i]`, Alice is awarded 1 point.
- If `a[i] < b[i]`, Bob is awarded 1 point.
- If `a[i] = b[i]`, neither person receives a point.

## Function Description

Complete the `compareTriplets` function in `solution.js`.

- `int[] a`: Alice's challenge rating
- `int[] b`: Bob's challenge rating

Returns:
- `int[]`: the first element is Alice's score and the second is Bob's score

## Constraints

- `1 <= a[i], b[i] <= 100`
- Both arrays have exactly 3 elements

## Example

```
a = [1, 2, 3]
b = [3, 2, 1]
```

Return:

```
[1, 1]
```

Explanation:
- `a[0] < b[0]`, so Bob gets 1 point.
- `a[1] = b[1]`, no points.
- `a[2] > b[2]`, so Alice gets 1 point.

## Sample Input / Output

```
Input:  a = [17, 28, 30], b = [99, 16, 8]
Output: [2, 1]
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
2. Find the `compareTriplets` function
3. Compare each element of `a` and `b` and return `[aliceScore, bobScore]`
4. Run the tests with `bun run test.js` or `node test.js`
5. Commit and push your changes
