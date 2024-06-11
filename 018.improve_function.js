/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */

// https://bigfrontend.dev/problem/improve-a-function

function excludeItems(items, excludes) {
  const map = new Map();

  excludes.forEach(el => {
    if (!map.has(el.k)) {
      map.set(el.k, new Set());
    }
    map.get(el.k).add(el.v);
  });

  return items.filter(curItem => {
    const keys = Object.keys(curItem);

    for (let i = 0; i < keys.length; i += 1) {
      if (map.has(keys[i]) && map.get(keys[i]).has(curItem[keys[i]])) {
        return false;
      }
    }
    return true;
  });
}
