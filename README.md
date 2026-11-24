# Everyday Wonder, Two Days to Find the Line

[![make.fun](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3.svg)](https://make.fun/bounty/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
[![Rank](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/yannyonn94/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/rank.svg)](https://make.fun/bounty/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
[![Reward](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/yannyonn94/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/reward.svg)](https://make.fun/bounty/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)

## Concept

One sentence, 162 characters, on a small moment of wonder in everyday life: a lift stops at a floor the building does not have, and the smell of fried shallots drifts out of a kitchen that closed in 1987. The everyday, quietly impossible — a named smell, two numbers, one twist, in a single read.

## The entry

> The lift stopped at floor 13, a floor my building does not have, and the doors opened on a corridor smelling of fried shallots from a kitchen that closed in 1987.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly that sentence — no trailing newline, no extra output — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

## Verify

Run it twice into a scratch directory and compare — the output must be
byte-identical, 1–200 characters, valid UTF-8, one sentence, no trailing
newline:

```sh
mkdir -p /tmp/wonder-out && MAKEFUN_OUTPUT_DIR=/tmp/wonder-out node main.ts
wc -c /tmp/wonder-out/entry.txt   # 162 bytes
sha256sum /tmp/wonder-out/entry.txt
```
