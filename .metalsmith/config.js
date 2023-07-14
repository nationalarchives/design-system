import { fileURLToPath } from "node:url";
import { dirname, join } from "path";

const __dirname = dirname(join(fileURLToPath(import.meta.url), "../"));

export { __dirname };
