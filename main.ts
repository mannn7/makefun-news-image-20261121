import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

// The infographic for Saturday 21 November 2026 lives in this repository
// as entry.png (drawn with PIL). This program just places that exact file
// into the output directory the harness expects, so both runs write
// byte-identical output.
const source = resolve(import.meta.dirname, "entry.png");
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "out");

if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts: ${source}`);
}

mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, "entry.png");
copyFileSync(source, target);

// Guard against a truncated copy: the output must be a non-empty PNG.
const copied = statSync(target);
if (copied.size === 0) {
  throw new Error(`copied entry.png is empty: ${target}`);
}
console.log(`wrote ${target} (${copied.size} bytes)`);
