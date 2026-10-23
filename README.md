# INKBOUND — The Lost Pages
A dependency-free browser Metroidvania prototype about Ren, a scrawny mangaka whose stolen magic sketchbook lets him transform into his concept heroes.

## Play
Open `dist/index.html` in a modern browser, or serve the directory with any static web server.

- A/D or left/right: move
- Space: jump; jump again as Sora
- J: attack
- 1/2/3: Ren / Akari / Sora; Q cycles unlocked forms
- M: map; P: pause; R: return to checkpoint
- On-screen controls support touch.

## Chapter route
1. Jump onto the studio platforms to recover Akari.
2. Head right and use her sword to cut the alley seal.
3. Climb the garden platforms for Sora.
4. Backtrack to the studio and double jump through its upper-left doorway.
5. Cross the Spire and defeat the Redactor to reclaim the book.

Lanterns restore health and store progress locally. Pages also autosave. New chapter starts a fresh run; Continue restores the saved checkpoint.

## Development
All rendering and game logic currently lives in `dist/index.html`. Rooms and transformations are data-driven. Art is original stylized canvas placeholder art, not finished anime production assets. No external dependencies, telemetry, accounts, or backend.

Run `node test.cjs` for deterministic gameplay checks covering jump reachability, transformation unlocks, sealed routes, checkpoint recovery, boss victory and save/load. Browser smoke check covers launch and rendering; full human playtesting and balancing remain.

## Next milestones
- Replace placeholder figures with animated anime sprite sheets.
- Add coyote time, jump buffering, gamepad support, audio and hit-stop.
- Expand the city into a larger interconnected map with hidden pages.
- Develop individual hero stories and a multi-phase Redactor fight.
