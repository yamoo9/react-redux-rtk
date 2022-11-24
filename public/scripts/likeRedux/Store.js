export default class Store {
  #state;
  #listeners = [];
  #reducer = null;

  constructor(reducer) {
    this.#reducer = reducer;
    this.#state = reducer(this.getState(), {});
  }

  getState() {
    return this.#state;
  }

  dispatch(action) {
    this.#state = this.#reducer(this.getState(), action);
    this.#listeners.forEach((listener) => listener(this.getState()));
  }

  subscribe(listener) {
    this.#listeners.push(listener);
    return () => this.#listeners.filter((l) => l !== listener);
  }
}
