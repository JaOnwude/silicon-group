/*
 * Complete the 'calculate' function below.
 *
 * The function is expected to return a NUMBER.
 * The function accepts following parameters:
 *  1. STRING operation
 *  2. NUMBER a
 *  3. NUMBER b
 */

function calculate(operation, a, b) {
  // TODO: use an object literal to map operations to functions
  switch (operation) {
    case "add":
      return a + b;

    case "subtract":
      return a - b;

    case "multiply":
      return a * b;

    case "divide":
      return a / b;

    case "power":
      return a ** b;

    case "modulo":
      return a % b;

    default:
      return "Invalid operation";
  }
}

module.exports = calculate;
