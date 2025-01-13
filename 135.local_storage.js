// https://bigfrontend.dev/problem/localStorage-with-expiration

window.myLocalStorage = {
  getItem(key) {
    return JSON.parse(window.localStorage.getItem(key));
  },

  setItem(key, value, maxAge) {
    if (maxAge === 0) return;

    if (maxAge) {
      setTimeout(() => {
        this.removeItem(key);
      }, maxAge);
    }

    window.localStorage.setItem(key, JSON.stringify(value));
  },

  removeItem(key) {
    window.localStorage.removeItem(key);
  },

  clear() {
    window.localStorage.clear();
  },
};

window._myLocalStorage = {
  getItem(key) {
    return window.localStorage.getItem(key);
  },

  setItem(key, value, maxAge) {
    window.localStorage.setItem(key, value);

    if (maxAge === 0) {
      this.removeItem(key);
    } else if (maxAge > 0) {
      setTimeout(() => {
        this.removeItem(key);
      }, maxAge);
    }
  },

  removeItem(key) {
    window.localStorage.removeItem(key);
  },

  clear() {
    window.localStorage.clear();
  },
};

export class LocalStorage {
  constructor() {
    this.store = new Map();
  }

  getItem(key) {
    return this.store.has(key) ? this.store.get(key) : null;
  }

  setItem(key, value, maxAge) {
    this.store.set(key, value);
    if (maxAge === 0) {
      this.removeItem(key);
    } else {
      setTimeout(() => {
        this.store.delete(key);
      }, maxAge);
    }
  }

  removeItem(key) {
    if (this.store.has(key)) {
      this.store.delete(key);
    } else {
      return 'Key does not exist';
    }
  }

  clear() {
    this.store = new Map();
  }
}

const myLocalStorage = new LocalStorage();

myLocalStorage.setItem('name', 'tyler', 1000);
console.log(myLocalStorage.getItem('name'));
setTimeout(() => {
  const value = myLocalStorage.getItem('name');
  console.log({ value });
}, 500);

setTimeout(() => {
  const value = myLocalStorage.getItem('name');
  console.log({ value });
}, 2000);
