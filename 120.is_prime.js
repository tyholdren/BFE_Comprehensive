/**
 * https://bigfrontend.dev/problem/isPrime
 * @param {number} num - positive integer
 */
function isPrime(num) {
  if (num === 1) return false;

  let i = 2;

  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
}
