/**
 * https://bigfrontend.dev/problem/roman-numerals-to-integer
 * @param {string} str - roman numeral string
 * @returns {number} integer
 */
function romanToInteger(str) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (romanValues[str[i + 1]] > romanValues[str[i]]) {
      sum += romanValues[str[i + 1]] - romanValues[str[i]];
      i += 1;
    } else {
      sum += romanValues[str[i]];
    }
  }

  return sum;
}
