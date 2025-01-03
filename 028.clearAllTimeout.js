/**
 * https://bigfrontend.dev/problem/implement-clearAllTimeout
 * cancel all timer from window.setTimeout
 */

const origSetTimeout = window.setTimeout;

function clearAllTimeout() {
  const timeoutIds = new Set();

  window.setTimeout = (fn, delay) => {
    let timeoutId = origSetTimeout(() => {
      fn();
    }, delay);

    timeoutIds.add(timeoutId);
    return timeoutId;
  };

  window.clearAllTimeout = () => {
    for (const id of timeoutIds) {
      delete id;
      window.clearTimeout(id);
    }
  };
}
