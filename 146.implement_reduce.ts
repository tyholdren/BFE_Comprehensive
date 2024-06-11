// https://bigfrontend.dev/problem/implement-Array-prototype-reduce

// copied from lib.es5.d.ts
// declare interface Array<T> {
//   myReduce(
//     callbackfn: (
//       previousValue: T,
//       currentValue: T,
//       currentIndex: number,
//       array: T[]
//     ) => T
//   ): T;
//   myReduce(
//     callbackfn: (
//       previousValue: T,
//       currentValue: T,
//       currentIndex: number,
//       array: T[]
//     ) => T,
//     initialValue: T
//   ): T;
//   myReduce<U>(
//     callbackfn: (
//       previousValue: U,
//       currentValue: T,
//       currentIndex: number,
//       array: T[]
//     ) => U,
//     initialValue: U
//   ): U;
// }

function myReduce(callback, initialValue) {
  if (this.length === 0 && arguments.length === 1) {
    throw new Error('reduce must take a valid array and intitial value');
  }

  let acc;
  let startingIndex;

  if (arguments.length === 1) {
    acc = this[0];
    startingIndex = 1;
  } else {
    acc = initialValue;
    startingIndex = 0;
  }

  for (let i = startingIndex; i < this.length; i += 1) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
}
