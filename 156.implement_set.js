/**
 * https://bigfrontend.dev/problem/lodash-set
 * @param {object} obj
 * @param {string | string[]} path
 * @param {any} value
 */
function set(obj, path, value) {
  let _path;

  if (!Array.isArray(path)) {
    _path = path.replace('[', '.').replace(']', '').split('.');
  } else {
    _path = path;
  }

  let _obj = obj;

  for (let i = 0; i < _path.length; i += 1) {
    let key = _path[i];
    const isNum = key === Number(key).toString();

    if (i === _path.length - 1) {
      _obj[key] = value;
    } else if (!isNum) {
      if (_obj.hasOwnProperty(key)) {
        _obj = _obj[key];
      } else {
        const nextKey = _path[i + 1];
        const isNum = nextKey === Number(nextKey).toString();
        _obj[key] = isNum ? [] : {};
        _obj = _obj[key];
      }
    }
  }
}

console.log(set({}, 'a.c.d[01]', 'bfe'));
