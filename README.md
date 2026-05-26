# Personal Learning Goal Codex Plugin

This is a personal Codex plugin repo for a structured learning-goal exercise. It packages the `learning-goal` skill as a local Codex marketplace so I can use it directly in Codex without maintaining it as an upstream PR.

The skill guides a learner through a 10-15 minute Mental Contrasting with Implementation Intentions (MCII) exercise: set a concrete learning goal, connect it to a meaningful outcome, identify realistic obstacles, and create if-then plans for follow-through.

It may be useful for developers who want a deliberate pause at project kickoff or before a new learning-heavy phase of work, especially when using AI coding tools and wanting to keep learning goals explicit.

## Project Name

Personal Learning Goal Codex Plugin.

## Prerequisites

- Codex
- Node.js, for the local metadata validation script
- Git, if you want to version or publish the personal plugin repo

## Installation

Install or refresh this local marketplace in Codex:

```bash
codex plugin marketplace add "/Users/velusamykaruppagounder/Documents/Learning Goal"
```

This marketplace exposes one plugin:

- `learning-goal` - the structured MCII learning-goal skill

In the current Codex CLI, adding the local marketplace registers the plugin source. The marketplace entry marks `learning-goal` as `INSTALLED_BY_DEFAULT` for this personal marketplace.

## Build And Test

There is no build step for this skill-only plugin.

Validate the Codex marketplace and plugin metadata:

```bash
node tests/validate-codex-plugin.mjs
```

Check for whitespace problems in tracked files:

```bash
git diff --check
```

## Usage

After installing the marketplace, ask Codex to run the skill:

```text
Help me set a learning goal for this project.
```

The skill should guide the conversation one step at a time and can produce a markdown learning goal card at the end.

## Customization

Useful personal adjustments:

- Add your current learning priorities to the prompt when invoking the skill.
- Pair this with `learning-opportunities` so later practice exercises can connect back to your stated goal.
- Save generated goal cards in project repos when they should stay attached to a specific codebase.
- Tune the skill instructions if you want shorter, stricter, or more reflective goal-setting sessions.

## Background

This personal plugin is adapted from Dr. Cat Hicks's Learning Goal skill. The underlying exercise is based on Mental Contrasting with Implementation Intentions, a self-regulation strategy developed by Oettingen and Gollwitzer and adapted for technical learning contexts by Dr. Cat Hicks and Dr. John Flournoy.

For more scientific context and references, see `learning-goal/skills/learning-goal/resources/PRINCIPLES.md`.

## Contact

To get in touch, email me at `sukesshvelusamy@gmail.com`.

## Acknowledgments

This project builds on:

- Dr. Cat Hicks's Learning Goal skill and learning-science writing
- Dr. John Flournoy's MCII intervention adaptation work
- Codex plugin marketplace conventions
- Creative Commons Attribution 4.0 International licensing

## License

This work is licensed under a Creative Commons Attribution 4.0 International License.
