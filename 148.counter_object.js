/**
 * https://bigfrontend.dev/problem/create-a-counter-object
 * @returns { {count: number}}
 */
function createCounter() {
  let value = 0;

  return {
    get count() {
      return value++;
    },
  };
}
