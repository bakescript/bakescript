import { Cursor } from "./cursor";
import { File } from "./file";
import { Indice } from "./indice";
import { range } from "./range";

class Source {
  #content = "";
  #cursor = new Cursor();
  #indice = new Indice();

  get peekable() {
    console.log("peekable");
    return this.#indice.value < this.#content.length;
  }

  constructor(content) {
    console.log("constructor", content);
    this.#content = content;
  }

  peek(length) {
    const { start, end } = range(this.#indice.value, length);
    return this.#content.slice(start, end);
  }

  // @track
  take(length) {
    const value = this.peek(length);
    console.log("take", value);
    return Object.freeze({ ...this.#cursor, value });
  }

  static async load(path) {
    console.log("load", path);
    const content = await File.read(path);
    return new Source(content);
  }
}

export { Source };
