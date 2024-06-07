// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timeoutId = null;
  let lastArgs = null;

  const { leading, trailing } = option;

  return function (...args) {
    if (leading && !timeoutId) {
      func.apply(this, args);
    } else {
      lastArgs = args;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (trailing && lastArgs) {
        func.apply(this, lastArgs);
      }
      timeoutId = null;
      lastArgs = null;
    }, wait);
  };
}
