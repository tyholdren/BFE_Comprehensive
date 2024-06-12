// https://bigfrontend.dev/problem/get-DOM-tree-height
/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  let maxHeight = 0;

  const DFS = (root, curHeight) => {
    if (root === null) return 0;
    maxHeight = Math.max(maxHeight, curHeight);

    for (let i = 0; i < root.children.length; i += 1) {
      DFS(root.children[i], curHeight + 1);
    }
    return;
  };

  if (tree !== null) {
    DFS(tree, 1);
  }
  return maxHeight;
}
