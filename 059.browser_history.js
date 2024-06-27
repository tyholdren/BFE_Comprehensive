// https://bigfrontend.dev/problem/create-a-browser-history

class BrowserHistory {
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
