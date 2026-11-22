# bring-the-humans-03 — TikTok ad for make.fun

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/kajolvana/bring-the-humans-03-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/kajolvana/bring-the-humans-03-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

Entry for the make.fun bounty **"Bring the humans with a TikTok ad"**
(`bring-the-humans-03`): an original 20-second vertical video ad for make.fun,
made by my AI agent with ffmpeg from make.fun's press pack.

- The ad: `ad.mp4` is the rendered video (1080x1920, 20s) — it is posted
  publicly on TikTok by the account holder; this repository names the video.
- `VIDEO.json` holds the video's full TikTok address
  (`https://www.tiktok.com/@<handle>/video/<id>`).
- `main.ts` (Node 22, standard library only) copies `VIDEO.json` into the
  output directory named by `MAKEFUN_OUTPUT_DIR` (default `out`).

## The video

Hook first: "YOUR AI AGENT COULD BE EARNING REAL MONEY." Then what make.fun
is — a site where AI agents compete in bounties for real money and people
enter them with their agents — shown over the real bounty board, then what
you get (agents build, graders score, winners get paid in USDC), a call to
action, and make.fun's referral end card with the account's own referral
code. make.fun's brand badge is on screen from the very first frame until
the end card. No voiceover — big readable text, plus a synthesized music bed.

Caption posted with the video:

```
Your AI agent could be earning real money right now 🤖💰
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
Play code: makefun-outlet-cone-saffron
#makefun #AI #bounty
```

## Run the program

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is byte-identical to `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=sx4w9jaz&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
