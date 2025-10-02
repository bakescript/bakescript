class Lexeme {
  #data;

  get column() {
    return this.#data.column;
  }

  get line() {
    return this.#data.line;
  }

  get value() {
    return this.#data.value;
  }

  constructor(data) {
    this.#data = data;
  }

  placeIn(stream) {
    stream.push(this);
    return this;
  }

  static create() {
    return new Lexeme({});
  }

  static match() {
    return false;
  }
}

export { Lexeme };
