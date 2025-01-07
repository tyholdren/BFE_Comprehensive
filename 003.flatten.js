// This is a JavaScript coding problem from BFE.dev
// https://bigfrontend.dev/problem/implement-Array-prototype.flat
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

function __flat(arr, depth = 1) {
  const stack = [];
  const results = [];

  arr.forEach(el => {
    const entry = { value: el, remDepth: depth };
    stack.push(entry);
  });

  while (stack.length) {
    const { value, remDepth } = stack.pop();
    if (Array.isArray(value) && remDepth > 0) {
      value.forEach(el => {
        const entry = { value: el, remDepth: remDepth - 1 };
        stack.push(entry);
      });
    } else {
      results.push(value);
    }
  }

  return results.reverse();
}
