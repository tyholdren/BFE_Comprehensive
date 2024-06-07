// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

// recursively
function flat(arr, depth = 1) {
  if (depth === 0) return arr;

  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      result.push(...flat(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// iteratively

// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  const result = [];
  const stack = arr.map(item => ({ item, depth }));

  while (stack.length) {
    const { item, depth } = stack.pop();
    if (Array.isArray(item) && depth > 0) {
      stack.push(...item.map(subItem => ({ item: subItem, depth: depth - 1 })));
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}
