// https://bigfrontend.dev/problem/merge-sorted-arrays
/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]}
 */
function merge(arrList) {
  const merged = arrList.flat().sort((a, b) => a - b);

  return merged;
}
