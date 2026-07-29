const birthdayCakeCandles = require('./solution');

const testCases = [
  { candles: [3, 2, 1, 3], expected: 2 },
  { candles: [4, 4, 1, 3], expected: 2 },
  { candles: [1, 2, 3, 4, 5], expected: 1 },
  { candles: [5, 5, 5, 5], expected: 4 },
  { candles: [1], expected: 1 },
];

let passed = 0;
let failed = 0;

for (const test of testCases) {
  const result = birthdayCakeCandles(test.candles);
  const ok = result === test.expected;

  if (ok) {
    console.log(
      `PASS: birthdayCakeCandles([${test.candles.join(', ')}]) = ${result}`
    );
    passed++;
  } else {
    console.log(
      `FAIL: birthdayCakeCandles([${test.candles.join(', ')}]) expected ${test.expected} but got ${result}`
    );
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}
