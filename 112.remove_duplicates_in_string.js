/**
 * https://bigfrontend.dev/problem/remove-duplicate-letters-in-a-string
 * @param {string} str
 * @return {string}
 */
function smallestUniqueSubstr(str) {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    map.set(str[i], i);
  }

  const stack = [];
  const seen = new Set();

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (seen.has(char)) {
      continue;
    }

    while (
      stack.length > 0 &&
      char < stack[stack.length - 1] &&
      i < map.get(stack[stack.length - 1])
    ) {
      const toDelete = stack.pop();
      seen.delete(toDelete);
    }
    stack.push(char);
    seen.add(char);
  }
  return stack.join('');
}
