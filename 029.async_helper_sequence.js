/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: (error: Error, data: any) => void,
   data: any
) => void

*/

/**
https://bigfrontend.dev/problem/implement-async-helper-sequence
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs) {
  let hasError = false;

  return function (finalCb, initData) {
    function go(index, data) {
      if (hasError) return;

      if (index >= funcs.length) {
        finalCb(undefined, data);
        return;
      }

      const asyncFn = funcs[index];
      asyncFn((err, result) => {
        if (err) {
          hasError = true;
          finalCb(err);
        } else {
          go(index + 1, result);
        }
      }, data);
    }
    go(0, initData);
  };
}
