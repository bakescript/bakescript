import { DEFAULT_LENGTH } from "./constants";

function range(start, length) {
  const end = start + (length || DEFAULT_LENGTH);
  return { start, end };
}

export { range };
