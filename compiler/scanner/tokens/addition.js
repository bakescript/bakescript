import { Lexeme } from "./lexeme";
import { Type } from "./type";

class Addition extends Lexeme {
  get type() {
    return Type.ADDITION;
  }

  static create(source) {
    return new Addition(source.take());
  }

  static match(source) {
    return source.peek() === "+";
  }
}

export { Addition };
