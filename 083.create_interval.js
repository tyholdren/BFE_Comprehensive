/**
 * https://bigfrontend.dev/problem/create-an-interval
 * @param {Function} func
 * @param {number} delay
 * @param {number} period
 * @return {number}
 */

let globalId = 0;
const map = new Map();

function mySetInterval(func, delay, period) {
  let internalId = globalId++;
  let count = 0;

  function start() {
    let id = setTimeout(() => {
      func();
      count++;
      start();
    }, delay + period * count);

    map.set(internalId, id);
  }

  start();
  return internalId;
}
/**
 * @param { number } id
 */
function myClearInterval(id) {
  clearTimeout(map.get(id));
  map.delete(id);
}
