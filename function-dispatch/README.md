# Function Dispatch Calculator

## Problem

Build a calculator that performs different operations based on a string.

## Example

```
operation = "add"
a = 2
b = 3
```

Return:

```
5
```

```
operation = "power"
a = 2
b = 3
```

Return:

```
8
```

## Function Description

Complete the `calculate` function in `solution.js`.

- `string operation`: the operation to perform (`add`, `subtract`, `multiply`, `divide`, `power`, `modulo`)
- `number a`: the first number
- `number b`: the second number

Returns:
- `number`: the result of applying the operation to `a` and `b`
- `string`: return `"Invalid operation"` if the operation is not supported

## Supported Operations

| Operation | Description | Example |
|-----------|-------------|---------|
| `add` | `a + b` | `add(2, 3)` → `5` |
| `subtract` | `a - b` | `subtract(10, 4)` → `6` |
| `multiply` | `a * b` | `multiply(5, 6)` → `30` |
| `divide` | `a / b` | `divide(20, 4)` → `5` |
| `power` | `a ** b` | `power(2, 3)` → `8` |
| `modulo` | `a % b` | `modulo(10, 3)` → `1` |

## Constraints

- `operation` is a string
- `a` and `b` are integers
- Division is always exact (no decimals in the test cases)

## Sample Input / Output

```
Input:  operation = "multiply", a = 5, b = 6
Output: 30
```

```
Input:  operation = "unknown", a = 1, b = 2
Output: "Invalid operation"
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
2. Find the `calculate` function
3. Implement the supported operations
4. Return `"Invalid operation"` for unsupported operations
5. Run the tests with `bun run test.js` or `node test.js`
6. Commit and push your changes
