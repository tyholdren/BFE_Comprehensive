// https://bigfrontend.dev/problem/flatten-Thunk
/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
  return function (callback) {
    const callbackWrapper = (error, result) => {
      if (error) {
        callback(error);
      } else if (typeof result === 'function') {
        result(callbackWrapper);
      } else {
        callback(error, result);
      }
    };
    thunk(callbackWrapper);
  };
}
