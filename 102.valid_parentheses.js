/**
 * https://bigfrontend.dev/problem/validate-parenthesis
 * @param {string} str
 * @return {boolean}
 */
function validate(str) {
  const parensObj = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  const stack = [];

  for (let i = 0; i < str.length; i += 1) {
    if (!parensObj.hasOwnProperty(str[i])) {
      stack.push(str[i]);
    } else {
      const possibleMatch = stack.pop();
      if (possibleMatch !== parensObj[str[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
