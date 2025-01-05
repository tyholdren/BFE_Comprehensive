/**
 * https://bigfrontend.dev/problem/implement-groupby
 * @template T
 * @template { keyof any } K
 * @param { Array<T> } items
 * @param { (item: T) => K } callback
 * @returns { Record<K, Array<T>> }
 */
function ObjectGroupBy(items, callback) {
  if (!Array.isArray(items)) {
    throw Error;
  }

  const groups = Object.create(null);

  for (let i = 0; i < items.length; i++) {
    const key = callback(items[i]);
    if (!(key in groups)) {
      groups[key] = [items[i]];
    } else {
      groups[key].push(items[i]);
    }
  }

  return groups;
}
