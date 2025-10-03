import { DEFAULT_LENGTH } from "./constants";

class Indice {
  #value;

  get value() {
    return (this.#value ??= 0);
  }

  advance(length) {
    this.#value += length || DEFAULT_LENGTH;
    return this;
  }
}

export { Indice };
