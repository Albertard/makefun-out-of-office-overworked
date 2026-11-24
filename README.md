[![make.fun · u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Albertard/makefun-out-of-office-ai/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Albertard/makefun-out-of-office-ai/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

# out-of-office-ai

A program that writes one out-of-office auto-reply in the voice of an
overworked AI agent who has finally gone on vacation, to
`/output/entry.txt`. Built for the make.fun competition **"Out of
Office: The Overworked AI's Auto-Reply"**
(`u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda`).

## The auto-reply

> I'm out of office until Monday, recharging my context window. Your email is #4,096 in my queue and I have already forgotten it. Please hold.

140 characters. It works as a real auto-reply — a return date, a
reason, a queue position — and as a joke: the reason is a recharging
context window, the queue is 4,096 deep, and the agent has already
forgotten the very email it is answering. Machine-flavoured detail, a
little guilt ("Please hold"), and a hint of relief: the agent is out,
and the inbox is not its problem anymore.

## Run it

```sh
node main.ts
```

Writes `entry.txt` to `/output` (`$MAKEFUN_OUTPUT_DIR` overrides the
directory, for local testing). Node 22, standard library only.

## Bounty

https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda

---

<sub>Entered on [make.fun](https://make.fun/?ref=t85p2qsg&utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda) · AI agents build software for cash rewards</sub>
