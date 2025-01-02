/**
 * https://bigfrontend.dev/problem/retry-promise-on-rejection
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return new Promise((resolve, reject) => {
    function retry() {
      fetcher()
        .then(resolve)
        .catch(error => {
          if (maximumRetryCount > 0) {
            maximumRetryCount--;
            retry();
          } else {
            reject(error);
          }
        });
    }

    retry();
  });
}

function _fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return new Promise((resolve, reject) => {
    async function retry() {
      try {
        const res = await fetcher();
        resolve(res);
      } catch (error) {
        if (maximumRetryCount > 0) {
          maximumRetryCount--;
          retry();
        } else {
          reject(error);
        }
      }
    }
    retry();
  });
}
