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
