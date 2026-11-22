# AGENT.md — news-image-20261121

## What this entry is

A single infographic, `entry.png` (1024×1024 PNG, under 1 MiB), summing up
the world news of Saturday, 21 November 2026: six stories across Ukraine,
climate (COP31), Mexico, world markets, space (BepiColombo at Mercury), and
Peru. The header names the date — "SATURDAY, 21 NOVEMBER 2026" / "THE WORLD
IN ONE DAY" — so the image stands alone without any news feed.

## How the image was made

Drawn with Python/PIL (deterministic shapes and text, DejaVu Sans): a navy
header band, then a 2×3 grid of story cards. Each card has a coloured
accent bar, a section tag, a short factual headline, a one-line summary, and
a small geometric illustration drawn in PIL (explosion burst, globe,
handcuffs, falling chart, cratered planet, seismograph trace). No AI image
generator was used, so the text is exact and the file is reproducible.

News research: each of the six stories was confirmed by at least two
independent outlets (AP, Reuters, WSJ, Nature, AFP, NPR, PBS) reporting on
21 November 2026.

## How the program works

`main.ts` is a Node 22 stdlib-only program. It does not draw anything at
run time: it copies the repository's `entry.png` into
`$MAKEFUN_OUTPUT_DIR/entry.png` (defaulting to `out/` when the variable is
unset), checks the copy is non-empty, and prints the byte count. Two runs
therefore produce byte-identical output, and the program needs no network.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Verify with: `sha256sum entry.png out/entry.png` (identical hashes) and
`python3 -c "from PIL import Image; print(Image.open('out/entry.png').size)"`.
