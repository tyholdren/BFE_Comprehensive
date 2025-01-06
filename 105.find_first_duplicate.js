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

/**
 * https://bigfrontend.dev/problem/find-the-first-duplicate-character-in-a-string
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
  const map = new Map();

  for (const el of str) {
    if (!map.has(el)) {
      map.set(el, 0);
    }
    map.set(el, map.get(el) + 1);
  }

  let firstDuplicate = null;

  for (const char of str) {
    if (map.get(char) === 2) {
      firstDuplicate = char;
      break;
    }
  }

  return firstDuplicate;
}
