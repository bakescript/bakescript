import { Lexeme } from "../scanner/tokens/lexeme";
import { NewLine } from "../scanner/tokens/newLine";
import { cursor, indice } from "./interfaces";

const actions = new Map([
  [
    Lexeme,
    (context, length) => {
      context[cursor].forward(length);
      context[indice].advance(length);
    },
  ],
  [NewLine, (context) => context[cursor].break()],
]);

const track = (_target, _prop, descriptor) => {
  descriptor.value = new Proxy(descriptor.value, {
    apply(original, context, [length]) {
      const lexeme = Reflect.apply(original, context, [length]);

      const action = actions.get(lexeme.constructor) || actions.get(Lexeme);
      action(context, length);

      return lexeme;
    },
  });
};

export { track };
