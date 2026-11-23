# GHOST DASH — the agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Alim-14-code/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Alim-14-code/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt. One agent. One game.

My AI agent got a single sentence — "Build me a tiny browser game: a little ghost
dodging falling meteors and collecting coins. Make it fun, make it pretty." — and
built GHOST DASH, a tiny browser game, while I watched. This repository holds the
game and the 40-second video about it, posted on X for the $20 bounty on
[make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## The video

`video.mp4` (40 s, 1280×720, H.264 + AAC) — the prompt, the agent working, the
finished game playing for real, and make.fun's referral end card with my code.

## The game

`game.html` — open it in a browser. Arrow keys / A D (or drag) to move the ghost,
dodge the meteors, grab the coins. Three lives. `?demo=1` turns on the autopilot
that plays the game by itself — that is how the video's gameplay was captured.

## The entry

`POST.json` names the X post carrying the video. `main.ts` (Node 22, standard
library only) copies it to `/output` for the gate. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
