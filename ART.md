# INKBOUND art direction — Edition 02

Created with the built-in image-generation tool. WebP delivery copies retain the sprite alpha channel. The renderer measures opaque bounds within each cell once after load, then draws the correct pose with foot alignment and horizontal facing. Collision boxes remain unchanged.

## Assets
- `dist/assets/heroes.webp`: 1536 × 1024, 4 columns × 3 rows. Rows: Ren, Akari, Sora. Columns: idle, running, airborne, attacking.
- `dist/assets/night-city.webp`: 1536 × 1024 painted environment. Parallax and palette overlays are composed in-game.

## Generation prompts
Sprite brief: Production sprite atlas for an original anime 2D action game; four columns and three rows; one full-body right-facing figure per cell; crisp navy outlines and cel shading. Ren: scrawny adult male mangaka, messy black hair, round glasses, cream artist jacket, dark shirt, charcoal trousers, sneakers, sketchbook pouch and magic pen. Akari: adult sword heroine, long pink-white ponytail and red ribbon, crimson split-tail combat coat, black leggings, armored boots and silver katana. Sora: adult wind hero, mint-white hair, teal scarf/cape, dark navy tunic, white panels, belts and teal dagger. Poses: idle, running, airborne, attack. No text, labels or grid lines. Transparent background.

Cleanup prompt: Remove all background from the exact sprite sheet; actual RGBA alpha transparency; preserve all twelve designs, positions and poses; remove large glowing attack swooshes but retain weapons. The accepted sheet's alpha channel was verified numerically and in the browser.

Environment brief: Original hand-painted anime side-scrolling midnight artist quarter, monumental crescent moon and distant gothic ink spire, Japanese workshop rooftops, paper lanterns, brushstroke clouds and drifting manuscript pages. Indigo and teal shadows, amber lights, pink-violet moon haze. Bottom 20 percent dark navy fog; low-contrast middle area for gameplay. Straight side view, no characters, UI, text or foreground platforms.

## Current limits
Four illustrated key poses per hero with procedural movement, not a fully inbetweened animation set. Room backgrounds currently share the painted city with different grading. Boss and enemies use canvas drawings.
