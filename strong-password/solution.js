/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an ARRAY OF STRINGS.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
  // TODO: return an array of error messages for each rule the password fails
  const errors = [];

  if (n < 6) {
    errors.push("Password must be at least 6 characters");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one digit");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }

  if (!/[!@#$%^&*()\-+]/.test(password)) {
    errors.push(
      "Password must contain at least one special character (!@#$%^&*()-+)"
    );
  }

  return errors;
}

module.exports = minimumNumber;
