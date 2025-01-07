/**
 * https://bigfrontend.dev/problem/write-your-own-instanceof
 * @param {any} obj
 * @param {target} target
 * @return {boolean}
 */
function myInstanceOf(obj, target) {
  if (!target.prototype || obj == null) {
    return false;
  }

  if (typeof obj !== 'object') {
    return false;
  }

  let curObj = obj;
  while (curObj !== null) {
    const proto = curObj.__proto__;
    if (proto === target.prototype) {
      return true;
    }
    curObj = proto;
  }

  return false;
}
