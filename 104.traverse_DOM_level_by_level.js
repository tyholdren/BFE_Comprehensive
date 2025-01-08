/**
 * https://bigfrontend.dev/problem/Traverse-DOM-level-by-level
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
function flatten(root) {
  const results = [];

  const queue = [root];

  while (queue.length) {
    const curNode = queue.shift();

    if (curNode !== null && curNode.hasChildNodes()) {
      queue.push(...curNode.children);
    }

    if (curNode) {
      results.push(curNode);
    }
  }

  return;
}

function _flatten(root) {
  if (root == null) {
    return [];
  }

  const results = [];
  const q = [root];

  while (q.length) {
    const curNode = q.shift();

    for (const child of curNode.children) {
      q.push(child);
    }

    results.push(curNode);
  }
  return results;
}
