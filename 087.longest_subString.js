/**
 * https://bigfrontend.dev/problem/longest-substring-with-unique-characters
 * @param {string} str
 * @return {string}
 */
function _longestUniqueSubstr(str) {
  let curChars = [];
  let curLength = 0;
  let maxLength = { length: 0, subString: '' };

  for (let i = 0; i < str.length; i += 1) {
    const curChar = str[i];
    if (!curChars.includes(curChar)) {
      curChars.push(curChar);
    } else {
      while (curChars.includes(curChar)) {
        curChars = curChars.slice(1);
      }
      curChars.push(curChar);
    }
    curLength = curChars.length;
    if (curLength > maxLength.length) {
      maxLength.length = curLength;
      maxLength.subString = curChars.join('');
    }
  }

  return maxLength.subString;
}

/**
 * https://bigfrontend.dev/problem/longest-substring-with-unique-characters
 * @param {string} str
 * @return {string}
 */
function longestUniqueSubstr(str) {
  if (str.length === 0) return str;

  let seen = new Set();
  let maxChars = '';

  for (let i = 0; i < str.length; i += 1) {
    if (seen.has(str[i])) {
      if (seen.size > maxChars.length) {
        const word = [...seen].join('');
        maxChars = word;
        seen = new Set();
      }
    }

    seen.add(str[i]);
  }

  return maxChars;
}
