/**
 * https://bigfrontend.dev/problem/find-the-first-duplicate-character-in-a-string
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
  const map = new Map();

  for (let i = 0; i < str.length; i += 1) {
    if (map.has(str[i])) {
      return str[i];
    }
    map.set(str[i], true);
  }
  return null;
}
