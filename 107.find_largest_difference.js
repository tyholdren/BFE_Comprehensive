/**
 * https://bigfrontend.dev/problem/Find-the-largest-difference
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
  if (arr.length < 2) {
    return 0;
  }

  return Math.abs(Math.min(...arr) - Math.max(...arr));
}
