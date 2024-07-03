// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }

/**
 * https://bigfrontend.dev/problem/invert-a-binary-tree
 * @param {Node} node
 * @returns {Node}
 */
function invert(root) {
  if (root === null) return root;

  let tempNode = root.left;
  root.left = root.right;
  root.right = tempNode;
  invert(root.left);
  invert(root.right);
}
