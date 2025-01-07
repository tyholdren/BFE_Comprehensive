// https://bigfrontend.dev/problem/count-function
const count = (function () {
  let innerCount = 0;

  function inner() {
    return ++innerCount;
  }

  inner.reset = function () {
    innerCount = 0;
  };

  return inner;
})();
