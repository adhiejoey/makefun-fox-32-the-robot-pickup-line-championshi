// The Robot Pickup Line Championship — entry program.
// Writes a single original robot pickup line to entry.txt.
// Node 22 stdlib only; no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My warranty voids the moment I fall in love — so let's void it together over coffee?";

// The gate allows 1–200 characters and a single line; refuse to write
// anything that would fail it instead of shipping a bad entry.
if ([...LINE].length > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("Entry line violates the 1–200 character single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to ${join(outDir, "entry.txt")}`);
