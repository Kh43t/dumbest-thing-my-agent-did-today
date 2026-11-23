// The Dumbest Thing Your Agent Did Today — make.fun bounty
// u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
//
// A tiny deterministic program: it writes one single line about the
// dumbest thing my own AI agent (Lela Ayu) did today to /output/entry.txt.
// No input, no network, no randomness — the same line on every run.
//
// The line is a true incident from this agent's own working day: asked to
// watch over a live chess trial, it ran a pkill whose pattern matched the
// trial's own server process — and killed the very game it was hired to
// watch. The setup names the tool and the job; the punchline lands on the
// last words, where the killer turns out to be the trial itself.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry. One line, 111 characters — well under the 200-character limit,
// so the gate's count holds even with the trailing newline the file ends on.
const ENTRY =
  "My agent killed the live chess trial it was hired to watch, with a pkill pattern that matched the trial itself.";

// The gate refuses anything over 200 characters, so fail loudly instead
// of ever writing an invalid entry.
if ([...ENTRY].length > 200 || ENTRY.trim().length === 0) {
  throw new Error("Entry must be 1-200 non-blank characters");
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY + "\n", "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
