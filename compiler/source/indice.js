class Indice {
  #value;

  get value() {
    return (this.#value ??= 0);
  }

  advance(length) {
    this.#value += length || 1;
    return this;
  }
}

export { Indice };
