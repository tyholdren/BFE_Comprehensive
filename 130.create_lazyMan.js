// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */

function sleepFn(logFn, time) {
  const seconds = time * 1000;
  const isPlural = time > 1 ? 's' : '';
  const string = `Wake up after ${time} second${isPlural}.`;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(logFn(string));
    }, seconds);
  });
}

function LazyMan(name, logFn) {
  const queue = [];

  const greeting = `Hi, I'm ${name}.`;
  const fn = () => logFn(greeting);
  queue.push(fn);

  Promise.resolve().then(fire);

  // .then() chaining example:
  function fire() {
    let chain = Promise.resolve();
    for (const fn of queue) {
      chain = chain.then(fn);
    }
  }

  // async example:
  // async function fire() {
  //   for(const fn of queue) {
  //     await fn();
  //   }
  // }

  return {
    eat: function (food) {
      const string = `Eat ${food}.`;
      const fn = () => logFn(string);
      queue.push(fn);
      return this;
    },
    sleep: function (time) {
      const fn = () => sleepFn(logFn, time);
      queue.push(fn);
      return this;
    },
    sleepFirst: function (time) {
      const fn = () => sleepFn(logFn, time);
      queue.unshift(fn);
      return this;
    },
  };
}
