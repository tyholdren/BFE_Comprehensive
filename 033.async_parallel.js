/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * https://bigfrontend.dev/problem/implement-async-helper-parallel
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function parallel(funcs) {
  let resolved = 0;
  let hasError = false;
  const results = Array(funcs.length).fill(null);

  return function wrapper(finalCb, initData) {
    funcs.forEach((func, index) => {
      if (!hasError) {
        func((error, result) => {
          if (error && !hasError) {
            hasError = true;
            finalCb(error, undefined);
          } else {
            results[index] = result;
            resolved += 1;
            if (resolved === funcs.length) {
              finalCb(undefined, results);
            }
          }
        }, initData);
      }
    });
  };
}
