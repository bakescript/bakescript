import { Cursor } from "./cursor.js";
import { File } from "./file.js";
import { Indice } from "./indice";
import { cursor, indice } from "./interfaces";
import { range } from "./range.js";
import { track } from "./track";

class Source {
  #content = "";
  [cursor] = new Cursor();
  [indice] = new Indice();

  get peekable() {
    return this[indice].value < this.#content.length;
  }

  constructor(content) {
    this.#content = content;
  }

  peek(length) {
    const { start, end } = range(this[indice].value, length);
    return this.#content.slice(start, end);
  }

  @track
  take(length) {
    const value = this.peek(length);
    return Object.freeze({ ...this[cursor], value });
  }

  static async load(path) {
    const content = await File.read(path);
    return new Source(content);
  }
}

export { Source };
