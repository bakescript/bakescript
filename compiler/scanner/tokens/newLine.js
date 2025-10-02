import { Lexeme } from "./lexeme";

class NewLine extends Lexeme {
  placeIn() {
    return this;
  }

  static create(source) {
    source.take();
    return new NewLine();
  }

  static match(source) {
    return source.peek() === "\n";
  }
}

export { NewLine };
