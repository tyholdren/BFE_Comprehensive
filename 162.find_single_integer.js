/**
 * https://bigfrontend.dev/problem/find-the-single-integer
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  const set = new Set();

  arr.forEach(el => {
    if (set.has(el)) {
      set.delete(el);
    } else {
      set.add(el);
    }
  });

  return Array.from(set)[0];
}
