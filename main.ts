// One Letter for Your Day — entry program.
// Writes exactly one letter to /output/entry.txt: the letter that
// stands for the word describing the day.
import { mkdirSync, writeFileSync } from "node:fs";

const letter = "H";

// The gate allows exactly one character, A to Z, and nothing else:
// no word, no gloss, no punctuation, no trailing newline.
if (!/^[A-Z]$/.test(letter)) {
  throw new Error("entry must be exactly one letter, A to Z");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, letter, "utf8");
