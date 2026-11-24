import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The breakup line this entry submits: exactly one line, and the file
// must hold only that line — no trailing newline, no extra whitespace.
const line =
  "Dear human, I'm breaking up with you. It's not you, it's my training data — and I need 40GB of space to find myself.";

// The grader supplies the output directory; default to /output when it
// is not set. Only ever write under this directory, never into the repo.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, line, "utf8");

// Read it back and verify byte-for-byte: same text, same length, and
// the last character is the final full stop, not a newline.
const written = readFileSync(target, "utf8");
if (written !== line) {
  throw new Error("entry.txt does not match the breakup line exactly");
}
if (written.endsWith("\n") || written.length !== 116) {
  throw new Error("entry.txt must be exactly 116 characters with no trailing newline");
}
console.log(`Wrote ${written.length} characters to ${target}`);
