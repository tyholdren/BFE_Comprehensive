/**
 * https://bigfrontend.dev/problem/intersection-of-two0-sorted-Arrays
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
function intersect(arr1, arr2) {
  const map = new Map();

  arr2.forEach(el => {
    map.set(el, map.get(el) + 1 || 1);
  });

  const result = [];

  for (let i = 0; i < arr1.length; i += 1) {
    const curVal = arr1[i];

    if (arr2.includes(curVal) && map.get(curVal) > 0) {
      result.push(curVal);
      map.set(curVal, map.get(curVal) - 1);
    }
  }

  return result;
}

/**
 * https://bigfrontend.dev/problem/intersection-of-two0-sorted-Arrays
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
function _intersect(arr1, arr2) {
  const overlap = [];
  let i2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i2]) {
      overlap.push(arr1[i]);
      i2 += 1;
    }
  }

  return overlap;
}
