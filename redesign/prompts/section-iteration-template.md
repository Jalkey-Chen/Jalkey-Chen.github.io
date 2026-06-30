# Section Iteration Template

Use this template when asking Codex to add or revise a homepage section after the hero.

```text
You are working on the redesign branch of Peiyu Chen's personal academic website.

Before making changes, read:
- redesign/constitution.md
- redesign/design-principles.md
- redesign/site-architecture.md
- redesign/codex-working-rules.md

Section to work on:
[Now / Questions / Works / Formation / Looking Forward / News]

Scope:
Work only on this section and the styles it requires. Do not redesign unrelated sections. Preserve the existing Jekyll build system, routing, dependencies, and reusable assets.

Purpose of this section:
[Describe what this section needs to accomplish for the reader.]

Content to include:
[Provide exact copy, data sources, links, or rough notes.]

Editorial direction:
The section should support the site's core philosophy: professional first, poetic second. It should feel quiet, academic, editorial, and specific to Peiyu's intellectual map. Organize around questions and intellectual movement where appropriate.

Avoid:
- Generic portfolio structure
- Startup landing page styling
- Decorative cards without editorial purpose
- Overly sentimental personal storytelling
- Heavy animation
- New dependencies unless absolutely necessary

Implementation requirements:
- Use the current Jekyll and SCSS structure.
- Keep classes scoped and maintainable.
- Make the section responsive.
- Preserve reduced-motion accessibility if animation is used.
- Do not add unnecessary explanatory copy.

After implementation:
Summarize files changed, what the section now does, and verification performed.
```
