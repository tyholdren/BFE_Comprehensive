/**
 * https://bigfrontend.dev/problem/remove-characters
 * @param {string} input
 * @returns string
 */
function removeChars(_input) {
  if (_input.length === 0) {
    return _input;
  }

  const input = _input.replaceAll('b', '');
  const stack = [];

  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === 'c') {
      if (stack[stack.length - 1] === 'a') {
        stack.pop();
      } else {
        stack.push(input[i]);
      }
    } else {
      stack.push(input[i]);
    }
  }

  return stack.join('');
}
