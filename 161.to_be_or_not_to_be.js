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
  function compare(expected, isNegate) {
    const isEqual = Object.is(input, expected);
    if (isEqual) {
      if (!isNegate) {
        return true;
      }
      throw Error;
    } else {
      if (isNegate) {
        return true;
      }
      throw Error;
    }
  }

  return {
    toBe: expected => {
      return compare(expected, false);
    },
    not: {
      toBe: expected => {
        return compare(expected, true);
      },
    },
  };
}
