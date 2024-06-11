// https://bigfrontend.dev/problem/implement-general-memoization-function
/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  const map = new Map();

  return function (...args) {
    let key = null;

    if (resolver && typeof resolver === 'function') {
      key = resolver(...args);
    } else {
      key = args.join('_');
    }

    if (map.has(key)) {
      return map.get(key);
    }
    const result = func.apply(this, args);
    map.set(key, result);
    return result;
  };
}
