// https://bigfrontend.dev/problem/remove-duplicates-from-an-array
/**
 * @param {any[]} arr
 */
function deduplicate(arr) {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
    mySet.add(arr[i]);
  }
}
