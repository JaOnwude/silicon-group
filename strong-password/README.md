# Strong Password

## Problem

Louise joined a social networking site. The signup page required a strong password. A password is considered strong if it satisfies the following criteria:

- Its length is at least 6.
- It contains at least one digit.
- It contains at least one lowercase English character.
- It contains at least one uppercase English character.
- It contains at least one special character: `!@#$%^&*()-+`

Given the length `n` and the password string, return a list of all the reasons the password is **not** strong.

## Example

```
n = 3
password = "Ab1"
```

Return:

```
[
  "Password must be at least 6 characters",
  "Password must contain at least one special character (!@#$%^&*()-+)"
]
```

```
n = 11
password = "#HackerRank"
```

Return:

```
[
  "Password must contain at least one digit"
]
```

## Function Description

Complete the `minimumNumber` function in `solution.js`.

- `int n`: the length of the password
- `string password`: the password to test

Returns:
- `string[]`: an array of error messages. If the password is strong, return an empty array `[]`.

## Constraints

- `1 <= n <= 100`
- All characters in `password` are in `[a-z]`, `[A-Z]`, `[0-9]`, or `[!@#$%^&*()-+]`

## Sample Input / Output

```
Input:  n = 5, password = "2bbbb"
Output: [
  "Password must be at least 6 characters",
  "Password must contain at least one uppercase letter",
  "Password must contain at least one special character (!@#$%^&*()-+)"
]
```

```
Input:  n = 6, password = "Ab1!@#"
Output: []
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
2. Find the `minimumNumber` function
3. Check the password against each rule and return an array of error messages
4. Return an empty array if the password is already strong
5. Run the tests with `bun run test.js` or `node test.js`
6. Commit and push your changes
