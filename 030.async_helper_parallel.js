/*
https://bigfrontend.dev/problem/implement-async-helper-parallel
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function parallel(funcs) {
  const results = Array(funcs.length).fill(null);
  let resolved = 0;
  let hasError = false;

  return function (finalCb, initData) {
    function process(finalCb, data) {
      for (let i = 0; i < funcs.length; i += 1) {
        if (hasError) break;

        const curFunc = funcs[i];
        curFunc((error, result) => {
          if (error && !hasError) {
            hasError = true;
            finalCb(error, undefined);
            return;
          } else if (!hasError) {
            results[i] = result;
            resolved += 1;

            if (resolved === funcs.length) {
              finalCb(undefined, results);
              return;
            }
          }
        }, data);
      }
    }

    process(finalCb, initData);
  };
}
