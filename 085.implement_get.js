/**
 * https://bigfrontend.dev/problem/implement-lodash-get
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
  let route;
  if (!Array.isArray(path)) {
    route = path.replace('[', '.').replace(']', '').split('.');
  } else {
    route = path;
  }

  let sourceCopy = source;
  let result = defaultValue;

  for (let i = 0; i < route.length; i++) {
    let curRoute = route[i];
    const isNumber = !isNaN(curRoute);
    if (isNumber) {
      curRoute = Number(curRoute);
    }

    if (i === route.length - 1) {
      if (sourceCopy[curRoute] !== undefined) {
        result = sourceCopy[curRoute];
      }
    } else if (sourceCopy.hasOwnProperty(curRoute)) {
      sourceCopy = sourceCopy[curRoute];
    }
  }

  return result;
}
