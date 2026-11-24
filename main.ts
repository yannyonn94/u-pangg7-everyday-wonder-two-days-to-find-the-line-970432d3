// Everyday Wonder, Two Days to Find the Line
// Writes one sentence about a small moment of wonder to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, one moment of wonder. A lift stops at a floor
// that does not exist, and the smell of fried shallots from a kitchen that
// closed in 1987 drifts out — the everyday, quietly impossible.
const sentence =
  "The lift stopped at floor 13, a floor my building does not have, and the doors opened on a corridor smelling of fried shallots from a kitchen that closed in 1987.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
if (sentence.length < 1 || sentence.length > 200 || sentence.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${sentence.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
