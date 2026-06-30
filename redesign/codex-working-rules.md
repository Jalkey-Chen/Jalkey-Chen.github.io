# Codex Working Rules For This Redesign

These rules are for future Codex sessions working on the redesign branch.

## Read These First

Before making homepage redesign changes, read:

1. `redesign/constitution.md`
2. `redesign/design-principles.md`
3. `redesign/site-architecture.md`
4. The section-specific file, such as `redesign/hero-section.md`

Use these files as project instructions, not as optional background.

## Scope Discipline

Build the homepage section by section. Do not complete the whole homepage unless explicitly asked.

When asked to work on a section:

- Modify only that section and the styles it requires.
- Preserve unrelated pages and components.
- Preserve the existing Jekyll build system, routing, dependencies, and asset structure.
- Keep old homepage content only if it helps the current section or future migration.
- Treat the old homepage visual language as disposable.

## Design Standard

Optimize for design quality and conceptual clarity. Do not optimize for code reuse if reuse preserves the old visual language.

The design should be:

- Professional first, poetic second
- Editorial rather than decorative
- Academic rather than portfolio-like
- Text-forward rather than image-led
- Warm and minimal rather than sterile

## Implementation Standard

- Use the existing framework and styling system.
- Keep markup semantic and styles scoped.
- Prefer modular section classes.
- Do not add new dependencies unless clearly necessary.
- Avoid global style changes unless the task explicitly concerns global redesign.
- Support mobile layouts.
- Support reduced-motion preferences for animated sections.
- Keep navigation and links maintainable.

## Content Standard

Do not add unnecessary explanatory copy. Avoid filler language, marketing language, and generic portfolio phrasing.

Prefer:

- Now
- Questions
- Current Work
- Selected Writing
- Formation
- What shaped my questions
- Looking Forward

Avoid:

- About Me
- Portfolio
- Journey
- Story
- Research Interests, when used as a generic block

## Verification

After implementation changes:

- Run the local build if feasible.
- Check generated output for the changed section.
- Verify mobile responsiveness when the change affects layout.
- Note any warnings that are unrelated to the change.

## Handoff

At the end of a task, summarize:

- Files changed
- What the section now does
- Any verification performed
- Any known follow-up needed
