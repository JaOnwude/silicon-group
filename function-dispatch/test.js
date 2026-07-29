const calculate = require('./solution');

const testCases = [
  { operation: 'add', a: 2, b: 3, expected: 5 },
  { operation: 'subtract', a: 10, b: 4, expected: 6 },
  { operation: 'multiply', a: 5, b: 6, expected: 30 },
  { operation: 'divide', a: 20, b: 4, expected: 5 },
  { operation: 'power', a: 2, b: 3, expected: 8 },
  { operation: 'modulo', a: 10, b: 3, expected: 1 },
  { operation: 'unknown', a: 1, b: 2, expected: 'Invalid operation' },
];

let passed = 0;
let failed = 0;

for (const test of testCases) {
  const result = calculate(test.operation, test.a, test.b);
  const ok = result === test.expected;

  if (ok) {
    console.log(
      `PASS: calculate("${test.operation}", ${test.a}, ${test.b}) = ${result}`
    );
    passed++;
  } else {
    console.log(
      `FAIL: calculate("${test.operation}", ${test.a}, ${test.b}) expected ${test.expected} but got ${result}`
    );
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}
