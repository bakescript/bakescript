import { DEFAULT_LENGTH } from "./constants";

class Cursor {
  #column = 1;
  #line = 1;

  get column() {
    return this.#column;
  }

  get line() {
    return this.#line;
  }

  forward(length) {
    this.#column += length || DEFAULT_LENGTH;
    return this;
  }

  break() {
    this.#column = 1;
    this.#line += 1;
    return this;
  }
}

export { Cursor };
