/**
 * https://bigfrontend.dev/problem/longest-substring-with-unique-characters
 * @param {string} str
 * @return {string}
 */
function longestUniqueSubstr(str) {
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
