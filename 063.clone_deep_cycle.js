// https://bigfrontend.dev/problem/create-cloneDeep
function cloneDeep(data, seen = new Map()) {
  if (seen.has(data)) {
    return seen.get(data);
  }

  if (Array.isArray(data)) {
    const arrayCopy = [];
    seen.set(data, arrayCopy);

    for (let i = 0; i < data.length; i++) {
      arrayCopy.push(cloneDeep(data[i], seen));
    }
    return arrayCopy;
  } else if (Object.prototype.toString.call(data) === '[object Object]') {
    const objCopy = {};
    seen.set(data, objCopy);

    for (const [key, val] of Object.entries(data)) {
      objCopy[key] = cloneDeep(val, seen);
    }

    for (const sym of Object.getOwnPropertySymbols(data)) {
      objCopy[sym] = cloneDeep(data[sym], seen);
    }

    return objCopy;
  }
  return data;
}
