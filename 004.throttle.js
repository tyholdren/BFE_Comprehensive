// This is a JavaScript coding problem from BFE.dev
// https://bigfrontend.dev/problem/implement-basic-throttle

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function _throttle(func, wait) {
  let isThrottled = false;
  let lastArgs = null;
  let timeoutId = null;

  return function (...args) {
    if (!isThrottled) {
      isThrottled = true;
      func.apply(this, args);

      const timeoutFn = () => {
        timeoutId = setTimeout(() => {
          isThrottled = false;
          clearTimeout(timeoutId);
          if (lastArgs) {
            func.apply(this, lastArgs);
            isThrottled = true;
            lastArgs = null;
            timeoutFn();
          }
        }, wait);
      };

      timeoutFn();
    } else {
      lastArgs = args;
    }
  };
}

// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  let isThrottled = false;
  let lastArgs = null;

  function handleThrottle() {
    isThrottled = true;
    func.apply(this, lastArgs);
    lastArgs = null;

    setTimeout(() => {
      isThrottled = false;
      if (lastArgs !== null) {
        handleThrottle();
      }
    }, wait);
  }

  return function (...args) {
    lastArgs = args;

    if (!isThrottled) {
      handleThrottle();
    }
  };
}
