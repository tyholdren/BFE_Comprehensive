// https://bigfrontend.dev/problem/what-is-composition-create-a-pipe

/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  return function (arg) {
    let curResult = arg;

    for (let i = 0; i < funcs.length; i += 1) {
      curResult = funcs[i](curResult);
    }
    return curResult;
  };
}
