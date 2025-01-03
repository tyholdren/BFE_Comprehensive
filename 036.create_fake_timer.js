// https://bigfrontend.dev/problem/create-a-fake-timer
class FakeTimer {
  constructor() {
    this.setTimeout = window.setTimeout;
    this.clearTimeout = window.clearTimeout;
    this.dateNow = Date.now;
    this.time = 0;
    this.fns = [];
    this.index = 0;
  }

  install() {
    window.setTimeout = (callback, delay) => {
      const execTime = this.time + delay;
      this.fns.push({ id: this.index, callback, execTime });
      this.fns = this.fns.sort((a, b) => a.execTime - b.execTime);
      return this.index++;
    };

    window.clearTimeout = _id => {
      this.fns = this.fns.filter(({ id }) => {
        if (_id === id) {
          return false;
        }
        return true;
      });
    };

    Date.now = () => this.time;
  }

  uninstall() {
    window.setTimeout = this.setTimeout;
    window.clearTimeout = this.clearTimeout;
    Date.now = this.dateNow;
  }

  tick() {
    while (this.fns.length) {
      const { callback, execTime } = this.fns.shift();
      this.time = execTime;
      callback();
    }
  }
}
