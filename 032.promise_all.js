/**
 * https://bigfrontend.dev/problem/implement-Promise-all
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  const results = Array(promises.length).fill(null);
  let resolved = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve(results);
    }

    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        results[index] = res;
        resolved += 1;

        if (resolved === promises.length) {
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}
