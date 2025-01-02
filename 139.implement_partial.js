/**
 * https://bigfrontend.dev/problem/implement-partial
 * @param {Function} func
 * @param {any[]} args
 * @returns {Function}
 */
function partial(func, ...args) {
  return function (...addtlArgs) {
    const allArgs = args.map(arg => {
      if (arg === partial.placeholder) {
        return addtlArgs.shift();
      }
      return arg;
    });

    return func.call(this, ...allArgs, ...addtlArgs);
  };
}
partial.placeholder = Symbol();
