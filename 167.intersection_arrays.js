/**
 * https://bigfrontend.dev/problem/array-intersect
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const results = [];

  for (const value1 of set1) {
    if (set2.has(value1)) {
      results.push(value1);
    }
  }

  return results;
}
