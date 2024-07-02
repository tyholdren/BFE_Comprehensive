/**
 * https://bigfrontend.dev/problem/throttle-Promises
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
async function throttlePromises(funcs, max) {
  const results = [];
  let response;

  for (let i = 0; i < funcs.length; i += max) {
    try {
      let curChunk = funcs.slice(i, i + max);
      response = await Promise.all(curChunk.map(curFunc => curFunc()));
      results.push(...response);
    } catch (error) {
      throw error;
    }
  }
  return results;
}
