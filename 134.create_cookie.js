// https://bigfrontend.dev/problem/create-your-own-Cookie
function install() {
  const map = new Map();

  Object.defineProperty(document, 'myCookie', {
    get() {
      const entries = [...map.entries()];
      const cookies = [];

      for (const [key, obj] of entries) {
        const { value, createdAt, expiration } = obj;
        if (expiration !== null && createdAt + expiration <= Date.now()) {
          map.delete(key);
        } else {
          cookies.push(value);
        }
      }

      return cookies.join('; ');
    },
    set(_value) {
      let string = _value.replace(/ /g, '');
      const parts = string.split(';');

      const [cookie, maxAge] = parts;
      const [key, value] = cookie.split('=');
      const time = maxAge ? maxAge.split('=')[1] : 'max-age-null';

      if (time === '0') {
        return;
      }

      const cookieObj = {
        value: `${key}=${value}`,
        createdAt: Date.now(),
        expiration: time === 'null' ? null : time * 1000,
      };

      map.set(key, cookieObj);
    },
    configurable: true,
  });
}

function uninstall() {
  delete document.myCookie;
}
