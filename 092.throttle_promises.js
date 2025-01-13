/**
 * https://bigfrontend.dev/problem/throttle-Promises
 * https://bigfrontend.dev/problem/throttle-Promises
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
async function _throttlePromises(funcs, max) {
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

/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max) {
  const results = Array(funcs.length).fill(null);
  let nextIndex = 0;
  let resolved = 0;

  return new Promise((resolve, reject) => {
    async function process(index) {
      nextIndex += 1; // INCREMENT NEXTINDEX IMMEDIATELY

      try {
        const curFn = funcs[index];
        const curResult = await curFn();
        results[index] = curResult;
        resolved += 1;

        if (resolved === funcs.length) {
          resolve(results);
          return;
        } else if (nextIndex < funcs.length) {
          // REMEMBER TO CHECK THIS BEFORE CALLING NEXTINDEX
          process(nextIndex);
        }
      } catch (error) {
        reject(error);
      }
    }

    for (let i = 0; i < Math.min(funcs.length, max); i += 1) {
      process(i);
    }
  });
}
