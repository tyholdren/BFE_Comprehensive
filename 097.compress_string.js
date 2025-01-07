/**
  https://bigfrontend.dev/problem/compress-a-string
 * @param {string} str
 * @return {string}
 */

function compress(str) {
  if (str.length === 1) return str;

  let stack = [str[0]];
  let compressed = '';

  let index = 1;
  while (index < str.length) {
    if (str[index] !== stack[stack.length - 1]) {
      let curCompressed = stack[0];
      if (stack.length > 1) {
        curCompressed += stack.length;
      }
      compressed += curCompressed;
      stack = [];
    }
    stack.push(str[index]);
    index += 1;
  }

  if (stack.length > 1) {
    compressed += stack[0] + stack.length;
  } else {
    compressed += stack[0];
  }

  return compressed;
}

/**
 * @param {string} str
 * @return {string}
 */
function _compress(str) {
  if (str.length === 1) {
    return str;
  }

  let stack = [];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const curChar = str[i];
    const prevChar = stack[stack.length - 1];

    if (stack.length && curChar !== prevChar) {
      const freq = stack.length === 1 ? '' : stack.length;
      result += `${prevChar}${freq}`;
      stack = [];

      stack.push(curChar);
    } else {
      stack.push(curChar);
    }
  }

  const freq = stack.length === 1 ? '' : stack.length;
  const prevChar = stack[stack.length - 1];
  result += `${prevChar}${freq}`;

  return result;
}

function compress(str) {
  if (str.length === 1) {
    return str;
  }

  let prevChar = str[0];
  let count = 1;
  let result = '';

  for (let i = 1; i < str.length; i += 1) {
    const curChar = str[i];
    if (curChar !== prevChar) {
      const freq = count === 1 ? '' : count;
      result += `${prevChar}${freq}`;
      prevChar = curChar;
      count = 1;
    } else {
      count += 1;
    }
  }

  const freq = count === 1 ? '' : count;
  result += `${prevChar}${freq}`;

  return result;
}
