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

function classNames(...args) {
  const classNames = [];

  function traverse(args) {
    for (let i = 0; i < args.length; i++) {
      const className = args[i];
      const type = getType(className);

      if (type === TYPES.STRING || type === TYPES.NUMBER) {
        classNames.push(className);
      } else if (type === TYPES.OBJECT || type === TYPES.MAP) {
        for (const [key, value] of Object.entries(className)) {
          const valueType = getType(value);

          if (valueType === TYPES.OBJECT) {
            traverse([value]);
          } else if (Array.isArray(value) && value.length) {
            traverse(value.flat(Infinity));
          } else if (value) {
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
