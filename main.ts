// The Internet in One Word — entry generator.
//
// The whole internet, in a single word: Captcha.
//
// Why this word: the internet never stops asking you to prove you are
// human — click the traffic lights, type the wobbly letters, wait for
// the checkbox to believe you. It is the one experience every corner of
// the web shares, from the smallest blog to the biggest platform, and it
// is funny precisely because the gatekeeper doubts the very people it
// was built for. It lands in one beat, needs no explanation, and no one
// reaches for it first.
//
// The program writes exactly that word — nothing else, no newline — to
// <output-dir>/entry.txt. The output directory defaults to /output (the
// grader's directory); pass another directory as argv[2] to test locally.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one word, seven letters, no trailing newline.
const WORD = "Captcha";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-30 chars
// that is not only whitespace. Fail loudly here instead of shipping
// an invalid entry.
if (WORD.length < 1 || WORD.length > 30 || /\s/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

function main(): void {
  const outDir = process.argv[2] ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}

main();
