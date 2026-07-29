# Time Conversion

## Problem

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

**Note:**
- `12:00:00AM` on a 12-hour clock is `00:00:00` on a 24-hour clock.
- `12:00:00PM` on a 12-hour clock is `12:00:00` on a 24-hour clock.

## Example

```
s = "07:05:45PM"
```

Return:

```
"19:05:45"
```

```
s = "12:40:22AM"
```

Return:

```
"00:40:22"
```

## Function Description

Complete the `timeConversion` function in `solution.js`.

- `string s`: a time in 12-hour AM/PM format (`hh:mm:ssAM` or `hh:mm:ssPM`)

Returns:
- `string`: the time in 24-hour format (`HH:MM:SS`)

## Constraints

- The input string is always a valid time in the format `hh:mm:ssAM` or `hh:mm:ssPM`
- `01 <= hh <= 12`
- `00 <= mm, ss <= 59`

## Sample Input / Output

```
Input:  "12:01:00PM"
Output: "12:01:00"
```

```
Input:  "12:01:00AM"
Output: "00:01:00"
```

```
Input:  "07:05:45PM"
Output: "19:05:45"
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
2. Find the `timeConversion` function
3. Convert the 12-hour time string to 24-hour time
4. Return the result as a string in the format `HH:MM:SS`
5. Run the tests with `bun run test.js` or `node test.js`
6. Commit and push your changes
