const compareTriplets = require('./solution');

const testCases = [
  { a: [1, 2, 3], b: [3, 2, 1], expected: [1, 1] },
  { a: [17, 28, 30], b: [99, 16, 8], expected: [2, 1] },
  { a: [5, 6, 7], b: [3, 6, 10], expected: [1, 1] },
  { a: [10, 20, 30], b: [5, 25, 35], expected: [1, 2] },
];

let passed = 0;
let failed = 0;

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

for (const test of testCases) {
  const result = compareTriplets(test.a, test.b);
  const ok = Array.isArray(result) && arraysEqual(result, test.expected);

  if (ok) {
    console.log(
      `PASS: compareTriplets([${test.a.join(', ')}], [${test.b.join(', ')}]) = [${result.join(', ')}]`
    );
    passed++;
  } else {
    console.log(
      `FAIL: compareTriplets([${test.a.join(', ')}], [${test.b.join(', ')}]) expected [${test.expected.join(', ')}] but got [${result ? result.join(', ') : result}]`
    );
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}
