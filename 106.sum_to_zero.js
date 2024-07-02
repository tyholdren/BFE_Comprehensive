/**
 * https://bigfrontend.dev/problem/Find-two-numbers-that-sum-up-to-0
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  const map = new Map();

  arr.forEach((el, index) => {
    map.set(el, index);
  });

  for (let i = 0; i < arr.length; i += 1) {
    const opposite = arr[i] * -1;
    if (map.has(opposite)) {
      return [i, map.get(opposite)];
    }
  }

  return null;
}
