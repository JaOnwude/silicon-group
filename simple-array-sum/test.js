const simpleArraySum = require('./solution');

const testCases = [
  { ar: [1, 2, 3], expected: 6 },
  { ar: [1, 2, 3, 4, 10, 11], expected: 31 },
  { ar: [5], expected: 5 },
  { ar: [100, 200, 300], expected: 600 },
];

let passed = 0;
let failed = 0;

for (const test of testCases) {
  const result = simpleArraySum(test.ar);
  const ok = result === test.expected;

  if (ok) {
    console.log(`PASS: simpleArraySum([${test.ar.join(', ')}]) = ${result}`);
    passed++;
  } else {
    console.log(
      `FAIL: simpleArraySum([${test.ar.join(', ')}]) expected ${test.expected} but got ${result}`
    );
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}
