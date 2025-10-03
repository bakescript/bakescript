import { cursor, indice } from "./interfaces";

const track = (_target, _prop, descriptor) => {
  descriptor.value = new Proxy(descriptor.value, {
    apply(take, source, [length]) {
      const lexer = Reflect.apply(take, source, [length]);
      /^\n$/.test(lexer.value)
        ? (source[cursor].break(), source[indice].advance())
        : (source[cursor].forward(length), source[indice].advance(length));
      return lexer;
    },
  });
};

export { track };
