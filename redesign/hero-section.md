# Hero Section Specification

The first implementation focus is only the hero / first viewport. Do not build later homepage sections unless explicitly asked.

## Purpose

The hero establishes the sequence:

Opening line -> professional identity -> navigation paths

The opening line should create a distinctive voice. The professional identity should establish credibility quickly. The actions should give readers obvious next steps.

## Required Copy

Opening line:

"I study the human questions behind technological change."

Identity:

Peiyu Chen

Research Assistant  
Booth School of Business  
The University of Chicago

Research areas:

- Human-AI Interaction
- Behavioral Economics
- Technology Governance

Quick links:

- Current Work
- Selected Writing
- Download CV

Scroll indicator:

- Scroll to explore

## Required Sequence

1. Opening sentence appears first.
2. After a short delay, the sentence shifts upward and slightly reduces in size.
3. Peiyu Chen, current position, institutional affiliation, and research areas fade in beneath it.
4. Three action links or buttons fade in.
5. A small "Scroll to explore" indicator appears near the bottom of the viewport.

The opening sentence should not remain alone for too long. The visitor should quickly understand who Peiyu is.

## Visual Direction

The hero should be:

- Minimalist
- Editorial
- Academic
- Warm
- Quiet
- Text-forward
- Spacious but not empty
- Refined but not precious

Use:

- Warm off-white, soft beige, or paper-like background
- Modern serif for the opening line and name
- Clean sans-serif for metadata, navigation, and actions
- Generous whitespace
- Subtle motion
- Understated outlined buttons or text links

Avoid:

- Purple gradients
- Cyberpunk visuals
- Startup SaaS aesthetics
- Glassmorphism
- Decorative orbs
- Excessive cards
- Stock-looking hero images
- Large portrait photo
- Loud animation
- 3D effects
- Random architectural imagery unless it has a clear conceptual reason
- Generic "Research Interests" blocks in the hero
- Anything that makes the page feel like a prettier Google Scholar profile

## Layout Guidance

- Full first viewport: use `min-height: 100vh` or `100svh`.
- Header may be fixed or absolute at the top.
- Main hero content should be vertically centered and slightly left-aligned on desktop.
- On mobile, stack content vertically and keep the opening sentence readable.
- Research metadata may use a two-column arrangement on desktop and a single column on mobile.
- Action links should be simple, outlined, and understated.

## Motion Guidance

Use CSS animations or the current framework's existing animation approach. Do not add Framer Motion or another dependency unless it already exists and is clearly appropriate.

Motion should feel calm:

- Use short delays.
- Use ease-out or similar natural timing.
- Avoid bounce, elastic, or dramatic transforms.
- Avoid looping animations except possibly a very subtle scroll cue.
- Include `prefers-reduced-motion` support.

## Accessibility And Responsiveness

- The hero must remain readable at mobile widths.
- Text must not overlap navigation, buttons, or scroll indicators.
- Buttons and links need visible focus states.
- The sequence should degrade gracefully if animations are disabled.
- Decorative visuals should be `aria-hidden="true"`.
