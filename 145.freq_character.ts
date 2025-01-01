// https://bigfrontend.dev/problem/most-frequently-occurring-character
function count(str: string): string | string[] {
  const map = new Map();

  for (const char of str) {
    map.set(char, map.get(char) + 1 || 1);
  }

  const keys = [...map.keys()];

  let mostFreqChars = [];
  const maxCount = Math.max(...map.values());

  for (const key of keys) {
    if (map.get(key) === maxCount) {
      mostFreqChars.push(key);
    }
  }

  if (mostFreqChars.length > 1) {
    return mostFreqChars;
  }
  return mostFreqChars[0];
}

/**
 * https://bigfrontend.dev/problem/most-frequently-occurring-character
 * @param {string} str
 * @returns {string | string[]}
 */
function _count(str) {
  const arr = [];
  const map = new Map();
  let max = 0;

  for (const char of str) {
    map.set(char, map.get(char) + 1 || 1);
    max = Math.max(max, map.get(char));
  }

  for (const [key, val] of [...map.entries()]) {
    if (val === max) {
      arr.push(key);
    }
  }

  if (arr.length > 1) {
    return arr;
  }
  return arr[0];
}
