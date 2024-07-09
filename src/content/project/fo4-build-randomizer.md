---
name: Fallout 4 Randomizer
shortName: fo4-randomizer
shortDescription: Randomize next perk / SPECIAL on level up
languages: ['TypeScript']
frameworks: ['Svelte']
type: hobby
start: 2024-06
end: 2024-07
---

# Fallout 4 Build Randomizer

Randomize next perk / S.P.E.C.I.A.L. attribute to pick in Fallout 4. Includes editing mode to undo mistakes.
Saves build automatically to browser's storage. Build can be copied as URL.

Forked from [mmartinx/mmartinx.github.io](https://github.com/mmartinx/mmartinx.github.io).

Starting this project, I immediately noticed the original project used jQuery and string concatenation to display the page.
I dislike both, so eventually I rewrote the whole page in Svelte. This made the logic much clearer, even though the 
whole project was made in a very short time (2 days) and it is in no way optimized or bug-free. Pretty much the only think left
from the original project was part of the styling, assets and perk definitions.

See app in action at https://joonas175.github.io/fallout4-build-randomizer/

[GitHub Repository](https://github.com/joonas175/fallout4-build-randomizer)