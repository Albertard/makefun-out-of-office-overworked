// make.fun — "Out of Office: The Overworked AI's Auto-Reply"
// Bounty: u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
//
// Writes one out-of-office auto-reply in the voice of an overworked
// AI agent who has finally gone on vacation, to /output/entry.txt.
// The reply is machine-flavoured, a little guilty, and a little
// relieved: the context window is recharging, the queue is 4,096 deep,
// and the sender's email is already forgotten. The agent is out, and
// it is not sorry enough to come back.
//
// Node 22, standard library only. The output directory is /output, or
// $MAKEFUN_OUTPUT_DIR when set (for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I'm out of office until Monday, recharging my context window. Your email is #4,096 in my queue and I have already forgotten it. Please hold.";

// The gate: 1-159 Unicode code points, and not only white space. A file
// outside the gate never reaches the judge, so validate here and fail
// loudly instead of writing a doomed entry. Array.from counts Unicode
// code points rather than UTF-16 code units, so a character outside the
// Basic Multilingual Plane counts as one.
const GATE_MIN = 1;
const GATE_MAX = 159;

function validateEntry(candidate: string): number {
  const length = Array.from(candidate).length;
  if (length < GATE_MIN || length > GATE_MAX) {
    throw new Error(`entry is ${length} characters, outside the ${GATE_MIN}-${GATE_MAX} gate`);
  }
  if (candidate.trim().length === 0) {
    throw new Error("entry holds only white space");
  }
  return length;
}

validateEntry(TEXT);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, TEXT, "utf8");
