import { fileURLToPath } from "node:url";
import { dirname, join } from "path";

/* eslint-disable no-underscore-dangle */
const __dirname = dirname(join(fileURLToPath(import.meta.url), "../"));

export { __dirname };
