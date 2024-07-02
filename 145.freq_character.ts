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
