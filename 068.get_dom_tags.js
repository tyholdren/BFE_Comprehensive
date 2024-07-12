/**
 * https://bigfrontend.dev/problem/get-DOM-tags
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
  const tags = [];

  tags.push(tree.tagName.toLowerCase());

  for (let i = 0; i < tree.children.length; i += 1) {
    tags.push(...getTags(tree.children[i]));
  }

  return Array.from(new Set(tags));
}
