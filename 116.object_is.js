/**
 * https://bigfrontend.dev/problem/implement-Object.is
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  if (a === 0 && b === 0) {
    return 1 / a === 1 / b;
  }

  return a === b;
}
