/**
 * https://bigfrontend.dev/problem/implement-spyOn
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  if (methodName === '' || typeof obj[methodName] !== 'function') {
    throw Error;
  }

  const origMethod = obj[methodName];
  const allArgs = [];

  obj[methodName] = function (...args) {
    allArgs.push(args);
    origMethod.apply(this, args);
  };

  return {
    calls: allArgs,
  };
}
