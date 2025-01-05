// https://bigfrontend.dev/problem/create-a-simple-store-for-DOM-node
class NodeStore {
  constructor() {
    this.array = [];
    this.index = 0;
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    this.array[this.index] = value;
    node.dataset.id = this.index;
    this.index++;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    const index = Number(node.dataset.id);
    return this.array[index];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    const index = Number(node.dataset.id);
    return this.array.length > index;
  }
}
