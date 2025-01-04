// https://bigfrontend.dev/problem/create-a-middleware-system
class Middleware {
  constructor() {
    this.state = null;

    this.fns = [];
    this.errors = [];
    this.fnsIdx = 0;
    this.errorsIdx = 0;

    this.hasError = false;
    this.next = this.next.bind(this);
  }
  /**
   * @param {MiddlewareFunc} func
   */
  use(func) {
    if (func.length === 3) {
      this.errors.push(func);
    } else {
      this.fns.push(func);
    }
  }

  /**
   * @param {Request} req
   */
  start(req) {
    this.state = req;
    this.next();
  }

  async next(error) {
    if (error || this.hasError) {
      if (this.errorsIdx < this.errors.length) {
        const curError = this.errors[this.errorsIdx];
        this.errorsIdx++;
        try {
          await curError(error, this.state, this.next);
        } catch (error) {
          this.next(error);
        }
      }
    } else {
      if (this.fnsIdx < this.fns.length) {
        const curFn = this.fns[this.fnsIdx];
        this.fnsIdx++;

        try {
          await curFn(this.state, this.next);
        } catch (error) {
          this.hasError = true;
          this.next(error);
        }
      }
    }
  }
}
