import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const src = join(here, "VIDEO.json");
const bytes = readFileSync(src);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), bytes);
// The grader requires the two runs to write identical bytes: verify the
// copy landed byte-identical instead of silently trusting the write.
if (!readFileSync(join(outDir, "VIDEO.json")).equals(bytes)) {
  throw new Error("VIDEO.json copy mismatch");
}
