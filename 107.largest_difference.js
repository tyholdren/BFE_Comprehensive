/**
 * https://bigfrontend.dev/problem/Find-the-largest-difference
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
  if (arr.length < 1) return 0;

  const newArr = arr.sort((a, b) => a - b);

  return newArr[newArr.length - 1] - newArr[0];
}
