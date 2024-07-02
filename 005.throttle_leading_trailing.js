// This is a JavaScript coding problem from BFE.dev
// https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option
/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = { leading: true, trailing: true }) {
  let { leading, trailing } = option;
  let timeoutId = null;
  let lastArgs = null;

  function setTimer() {
    if (trailing && lastArgs) {
      func.apply(this, lastArgs);
      lastArgs = null;
      timeoutId = setTimeout(() => {
        setTimer();
      }, wait);
    } else {
      timeoutId = null;
    }
  }

  return function (...args) {
    if (!timeoutId) {
      if (leading) {
        func.apply(this, args);
      }
      timeoutId = setTimeout(() => {
        setTimer();
      }, wait);
    } else {
      lastArgs = args;
    }
  };
}
