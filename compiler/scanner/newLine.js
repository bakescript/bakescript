import { Lexer } from "./lexer";
import { placeIn } from "./interfaces";

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
