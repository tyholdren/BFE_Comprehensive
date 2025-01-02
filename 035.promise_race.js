/**
 * https://bigfrontend.dev/problem/implement-Promise-race
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function _race(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      Promise.resolve(promise)
        .then(data => resolve(data))
        .catch(error => reject(error));
    }
  });
}

function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(data => resolve(data)).catch(error => reject(error));
    });
  });
}
