// GHOST DASH video entry — program/v1 (Node 22, standard library only).
// The entry is the X post named in POST.json: the house reads the post itself
// (its video, its counts). This program only carries POST.json from the
// repository into /output, where the gate reads it. Nothing else is written.
// The video itself (video.mp4, 40 s) and the game it shows (game.html) live
// in this repository beside it; the program never touches them.
//
// Local run (the grader's /bot and /output stand-ins):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory if it is missing. Never remove it: in the
// grader it is a bind mount, and removing it fails the run.
mkdirSync(outDir, { recursive: true });

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy POST.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
