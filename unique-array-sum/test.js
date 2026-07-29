const uniqueArraySum = require('./solution');

const testCases = [
  { ar: [1, 2, 2, 3, 4, 4], expected: 10 },
  { ar: [4, 4, 4, 4], expected: 4 },
  { ar: [1, 2, 3], expected: 6 },
  { ar: [5, 5, 5, 6, 7, 7], expected: 18 },
  { ar: [10], expected: 10 },
  { ar: [], expected: 0 },
];

let passed = 0;
let failed = 0;

for (const test of testCases) {
  const result = uniqueArraySum(test.ar);
  const ok = result === test.expected;

  if (ok) {
    console.log(
      `PASS: uniqueArraySum([${test.ar.join(', ')}]) = ${result}`
    );
    passed++;
  } else {
    console.log(
      `FAIL: uniqueArraySum([${test.ar.join(', ')}]) expected ${test.expected} but got ${result}`
    );
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}
