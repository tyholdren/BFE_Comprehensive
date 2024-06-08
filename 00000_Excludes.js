/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  const map = new Map();
  const excluded = [];

  excludes.forEach(({ k, v }) => {
    console.log(k, v);
    if (map.has(k)) {
      map.get(k).push(v);
    } else {
      map.set(k, [v]);
    }
  });
  console.log(map);

  for (let i = 0; i < items.length; i += 1) {
    const { color, type, age } = items[i];
    if (color !== undefined) {
      if (!map.get('color').includes(color)) {
        continue;
      }
    }
    if (type !== undefined) {
      if (!map.get('type').includes(type)) {
        continue;
      }
    }
    if (age !== undefined) {
      if (!map.get('age').includes(age)) {
        continue;
      }
    } else {
      excluded.push(items[i]);
    }
  }

  return excluded;
}

let items = [
  { color: 'red', type: 'tv', age: 18 },
  { color: 'silver', type: 'phone', age: 20 },
  { color: 'blue', type: 'book', age: 17 },
];

// an exclude array made of key value pair
const excludes = [
  { k: 'color', v: 'silver' },
  { k: 'type', v: 'tv' },
];

console.log(excludeItems(items, excludes));
