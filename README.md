# [wip] dungeon-tools

[![Greenkeeper badge](https://badges.greenkeeper.io/yaycmyk/dungeon-tools.svg)](https://greenkeeper.io/)

This is an ongoing side project to create a set of tools that procedurally-generate a dungeon based on 5th edition D&D rules.

- [x] description generator
- [ ] dungeon layout generated in JSON form
- [ ] JSON -> SVG outlines
- [ ] some sort of website

### nice to have

- [ ] more flavor in the generated descriptions (some kind of thesaurus integration?)
- [ ] SVG background textures based on the layout segment type
- [ ] furniture?
- [ ] fog of war & click to dismiss on individual layout segments (great for DMs)

## usage

```js
import descriptionGenerator from 'dungeon-tools/description';

descriptionGenerator(); /* 'An Elven maze, on the back of a Gargantuan living creature. Rumor has it that the original creator is still in control.' */
```
