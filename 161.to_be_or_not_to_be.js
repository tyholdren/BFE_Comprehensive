/**
 * https://bigfrontend.dev/problem/jest-assertion
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
function myExpect(input) {
  function toBe(expected) {
    const result = Object.is(expected, input);
    if (!result) {
      throw new Error('there was an error');
    }
    return result;
  }

  function notToBe(expected) {
    const result = Object.is(expected, input);
    if (result) {
      throw new Error('there was an error');
    }
    return result;
  }

  return {
    toBe,
    not: {
      toBe: notToBe,
    },
  };
}
