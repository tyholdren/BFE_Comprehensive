/**
 * https://bigfrontend.dev/problem/implement-once
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
  let result = undefined;
  let called = false;

  return function (...args) {
    if (called) {
      return result;
    }

    called = true;
    result = func.apply(this, args);
    return result;
  };
}
