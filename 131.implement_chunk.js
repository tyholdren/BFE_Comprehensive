/**
 * https://bigfrontend.dev/problem/implement-lodash-chunk
 * @param {any[]} items
 * @param {number} size
 * @returns {any[][]}
 */
function _chunk(items, size) {
  if (size < 1) {
    return [];
  }

  const results = [];
  for (let i = 0; i < items.length; i += size) {
    const temp = [];
    let k = i;
    while (temp.length < size && items[k]) {
      temp.push(items[k]);
      k += 1;
    }
    results.push(temp);
  }

  return results;
}

function chunk(items, size) {
  if (size < 1) {
    return [];
  }

  const results = [];
  for (let i = 0; i < items.length; i += size) {
    const chunk = items.slice(i, i + size);
    results.push(chunk);
  }

  return results;
}
