/**
 * https://bigfrontend.dev/problem/semver-compare
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  const arr1 = v1.split('.').map(el => Number(el));
  const arr2 = v2.split('.').map(el => Number(el));

  for (let i = 0; i < v1.length; i += 1) {
    if (arr1[i] > arr2[i]) {
      return 1;
    }
    if (arr1[i] < arr2[i]) {
      return -1;
    }
  }

  return 0;
}
