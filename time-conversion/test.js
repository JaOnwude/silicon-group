const timeConversion = require('./solution');

const testCases = [
  { s: '07:05:45PM', expected: '19:05:45' },
  { s: '12:00:00AM', expected: '00:00:00' },
  { s: '12:00:00PM', expected: '12:00:00' },
  { s: '12:45:54PM', expected: '12:45:54' },
  { s: '12:45:54AM', expected: '00:45:54' },
  { s: '05:05:05AM', expected: '05:05:05' },
  { s: '11:59:59PM', expected: '23:59:59' },
];

let passed = 0;
let failed = 0;

for (const test of testCases) {
  const result = timeConversion(test.s);
  const ok = result === test.expected;

  if (ok) {
    console.log(`PASS: timeConversion("${test.s}") = "${result}"`);
    passed++;
  } else {
    console.log(
      `FAIL: timeConversion("${test.s}") expected "${test.expected}" but got "${result}"`
    );
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}
