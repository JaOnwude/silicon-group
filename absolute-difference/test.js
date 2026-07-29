const absoluteDifference = require('./solution');

const testCases = [
  { a: 3, b: 5, expected: 2 },
  { a: 5, b: 3, expected: 2 },
  { a: -3, b: 5, expected: 8 },
  { a: 10, b: 10, expected: 0 },
  { a: -7, b: -2, expected: 5 },
  { a: 0, b: 0, expected: 0 },
];

let passed = 0;
let failed = 0;

for (const test of testCases) {
  const result = absoluteDifference(test.a, test.b);
  const ok = result === test.expected;

  if (ok) {
    console.log(
      `PASS: absoluteDifference(${test.a}, ${test.b}) = ${result}`
    );
    passed++;
  } else {
    console.log(
      `FAIL: absoluteDifference(${test.a}, ${test.b}) expected ${test.expected} but got ${result}`
    );
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}
