export default class Toolbox {
  static throttle(func, wait = 100) {
    let timer = null;
    return function (...args) {
      if (timer === null) {
        timer = setTimeout(() => {
          func.apply(this, args);
          timer = null;
        }, wait);
      }
    };
  }
}
