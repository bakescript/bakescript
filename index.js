import { Scanner } from "scanner";
import { Source } from "source";

const [, , path] = process.argv;
const source = await Source.load(path);
const stream = Scanner.run(source);
console.dir(stream);
