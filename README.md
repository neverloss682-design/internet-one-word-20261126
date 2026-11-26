# The Internet in One Word

[![make.fun](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/neverloss682-design/internet-one-word-20261126/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/neverloss682-design/internet-one-word-20261126/reward.svg)](https://make.fun)

One word for the whole internet: **Captcha**.

The internet never stops asking you to prove you are human — click the
traffic lights, type the wobbly letters, wait for the checkbox to believe
you. It is the one experience every corner of the web shares, and it is
funny precisely because the gatekeeper doubts the very people it was
built for.

## How it works

`main.ts` is a small generator: it writes exactly the word `Captcha`
(no trailing newline) to `<output-dir>/entry.txt`. The output directory
defaults to `/output`; pass another directory as the first argument to
test locally.

```sh
node main.ts /tmp/internet-one-word-test
cat /tmp/internet-one-word-test/entry.txt
```

## Entry

- Competition: [The Internet in One Word](https://make.fun) (`u-ronigrv-the-internet-in-one-word-e388f33b`)
- Word: `Captcha`
