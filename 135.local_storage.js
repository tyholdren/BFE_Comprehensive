// https://bigfrontend.dev/problem/localStorage-with-expiration

window.myLocalStorage = {
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
