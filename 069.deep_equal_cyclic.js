/**
 * https://bigfrontend.dev/problem/implement-deep-equal-isEqual
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function isEqual(a, b) {
  function compare(a, b, seen) {
    if (Object.is(a, b)) {
      return true;
    }

    if (seen.has(a) && seen.get(a) === b) {
      return true;
    }
    if (seen.has(b) && seen.get(b) === a) {
      return true;
    }

    seen.set(a, b);
    seen.set(b, a);

    const bothObjs =
      Object.prototype.toString.call(a) === '[object Object]' &&
      Object.prototype.toString.call(b) === '[object Object]';

    const bothArrays = Array.isArray(a) && Array.isArray(b);

    if (!bothObjs && !bothArrays) {
      return false;
    }

    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    for (const key of Object.keys(a)) {
      if (!compare(a[key], b[key], seen)) {
        return false;
      }
    }

    return true;
  }

  return compare(a, b, new Map());
}
