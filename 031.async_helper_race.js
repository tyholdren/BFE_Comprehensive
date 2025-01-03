/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * https://bigfrontend.dev/problem/implement-async-helper-race
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function race(funcs) {
  let completed = false;

  return function (cb, data) {
    funcs.forEach(func => {
      func((error, result) => {
        if (!completed) {
          completed = true;
          if (error) {
            cb(error, undefined);
          } else {
            cb(undefined, result);
          }
        }
      }, data);
    });
  };
}
