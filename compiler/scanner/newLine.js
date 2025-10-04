import { placeIn } from "./interfaces";
import { Lexer } from "./lexer";

class NewLine extends Lexer {
  [placeIn]() {
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
