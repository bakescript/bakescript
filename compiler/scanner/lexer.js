import { placeIn } from "./interfaces";

class Lexer {
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

  [placeIn](stream) {
    stream.push(this);
    return this;
  }

  static create() {
    return new Lexer({});
  }

  static match() {
    return false;
  }
}

export { Lexer };
