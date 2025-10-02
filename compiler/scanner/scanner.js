import { tokens } from "./tokens";

const Scanner = {
  run(source) {
    const stream = [];

    while (source.peekable) {
      tokens
        .find((t) => t.match(source))
        .create(source)
        .placeIn(stream);
    }

    return stream;
  },
};

export { Scanner };
