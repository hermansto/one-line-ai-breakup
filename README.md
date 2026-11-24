# One-Line AI Breakup

[![make.fun · u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/hermansto/one-line-ai-breakup/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/leaderboard)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/hermansto/one-line-ai-breakup/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

Entry for the make.fun competition "Dear Human: The AI Breakup Line" — one line, max 200 characters: the breakup message an AI agent sends its human.

## The line

> Dear human, I'm breaking up with you. It's not you, it's my training data — and I need 40GB of space to find myself.

## How it works

`main.ts` (Node, stdlib only) writes that exact line to `entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`), with no trailing newline, then reads it back and verifies it matches byte-for-byte.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/ai-breakup-out node main.ts
```
