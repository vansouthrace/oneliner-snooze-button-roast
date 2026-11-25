// Snooze Button Roast — make.fun one-liner entry.
// Writes a single roast of an alarm clock that rings at 6 AM on a Saturday
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My alarm clock ratted me out at 6 AM on a Saturday — it told Monday I was awake, and Monday is already on its way.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (entry.trim().length < 1 || entry.length > 200) {
  throw new Error(`Entry is ${entry.length} characters; must be 1-200.`);
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);
