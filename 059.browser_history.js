// https://bigfrontend.dev/problem/create-a-browser-history

// https://bigfrontend.dev/problem/create-a-browser-history
class BrowserHistory {
  constructor(url) {
    this.history = [];
    this.index = -1;

    if (url !== undefined) {
      this.visit(url);
    }
  }

  visit(url) {
    this.history = this.history.slice(0, this.index + 1);
    this.history.push(url);
    this.index = this.history.length - 1;
  }

  get current() {
    if (this.index >= 0) {
      return this.history[this.index];
    }
    return undefined;
  }

  goBack() {
    if (this.index > 0) {
      this.index--;
    }
  }

  forward() {
    if (this.index < this.history.length - 1) {
      this.index++;
    }
  }
}

class BrowserHistory2 {
  /**
   * @param {string} url
   * if url is set, it means new tab with url
   * otherwise, it is empty new tab
   */
  constructor(url) {
    this.history = [url || undefined];
    this.currentPage = 0;
  }
  /**
   * @param { string } url
   */
  visit(url) {
    this.history = this.history.slice(0, this.currentPage + 1);
    this.history.push(url);
    this.currentPage += 1;
  }

  /**
   * @return {string} current url
   */
  get current() {
    return this.history[this.currentPage];
  }

  // go to previous entry
  goBack() {
    this.currentPage = Math.max(0, this.currentPage - 1);
  }

  // go to next visited url
  forward() {
    this.currentPage = Math.min(this.history.length - 1, this.currentPage + 1);
  }
}
