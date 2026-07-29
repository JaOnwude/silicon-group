const minimumNumber = require('./solution');

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const testCases = [
  {
    n: 3,
    password: 'Ab1',
    expected: [
      'Password must be at least 6 characters',
      'Password must contain at least one special character (!@#$%^&*()-+)',
    ],
  },
  {
    n: 11,
    password: '#HackerRank',
    expected: ['Password must contain at least one digit'],
  },
  {
    n: 5,
    password: '2bbbb',
    expected: [
      'Password must be at least 6 characters',
      'Password must contain at least one uppercase letter',
      'Password must contain at least one special character (!@#$%^&*()-+)',
    ],
  },
  {
    n: 5,
    password: '2bb#A',
    expected: ['Password must be at least 6 characters'],
  },
  {
    n: 6,
    password: 'Ab1!@#',
    expected: [],
  },
  {
    n: 3,
    password: 'abc',
    expected: [
      'Password must be at least 6 characters',
      'Password must contain at least one digit',
      'Password must contain at least one uppercase letter',
      'Password must contain at least one special character (!@#$%^&*()-+)',
    ],
  },
  {
    n: 4,
    password: 'A1b#',
    expected: ['Password must be at least 6 characters'],
  },
];

let passed = 0;
let failed = 0;

for (const test of testCases) {
  const result = minimumNumber(test.n, test.password);
  const ok = Array.isArray(result) && arraysEqual(result, test.expected);

  if (ok) {
    console.log(`PASS: minimumNumber(${test.n}, "${test.password}")`);
    passed++;
  } else {
    console.log(`FAIL: minimumNumber(${test.n}, "${test.password}")`);
    console.log(
      `  expected: [${test.expected.map(e => `"${e}"`).join(', ')}]`
    );
    console.log(
      `  got:      [${Array.isArray(result) ? result.map(e => `"${e}"`).join(', ') : result}]`
    );
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}
