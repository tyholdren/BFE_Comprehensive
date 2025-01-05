// /**
//https://bigfrontend.dev/problem/implement-classnames
//  * @param {any[]} args
//  * @returns {string}
//  */
function getType(el) {
  return Object.prototype.toString.call(el);
}

const TYPES = {
  OBJECT: '[object Object]',
  ARRAY: '[object Array]',
  STRING: '[object String]',
  NUMBER: '[object Number]',
  MAP: '[object Map]',
};

function isStringOrNumberType(el) {
  return el === TYPES.STRING || el === TYPES.NUMBER;
}

function classNames(...args) {
  const classNames = [];

  function traverse(args) {
    for (let i = 0; i < args.length; i++) {
      const className = args[i];
      const type = getType(className);
      console.log({ type });

      if (type === TYPES.STRING || type === TYPES.NUMBER) {
        classNames.push(className);
      } else if (type === TYPES.OBJECT || type === TYPES.MAP) {
        for (const [key, value] of Object.entries(className)) {
          if (value) {
            classNames.push(key);
          }
        }
      } else if (Array.isArray(className)) {
        traverse(className);
      }
    }
  }

  traverse(args.flat(Infinity));
  return classNames.join(' ');
}
