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
