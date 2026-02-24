# Content Freeze: aegisaicooperative.com

**Status:** FROZEN as of Feb 18 2026 (commit 3b2e3ff)
**Design System:** AEGIS Editorial v3.0

## What This Site Is

A public, community-facing website for the AEGIS AI Cooperative. The audience is families, students, educators, nonprofits, and community organizations interested in STEM education and AI literacy.

## What Is Allowed

- Bug fixes that do not change visible content or design
- Dependency updates and security patches
- Performance optimizations with no visual impact
- New pages ONLY with CEO approval

## What Is Forbidden

- Any change to colors, typography, layout, or design tokens
- Any change to page content or wording
- B2B, defense, CMMC, or enterprise content of any kind
- Dark/techy/engineering aesthetics (that belongs on aegisos.ai)
- Adding new navigation items without CEO approval
- Removing existing pages without CEO approval

## Design Tokens (Do Not Modify)

| Token | Value | Purpose |
|-------|-------|---------|
| --aegis-void | #faf8f5 | Warm light background |
| --aegis-accent | #8b6f47 | Tan editorial accent |
| --aegis-rust | #c45d3a | CTA and highlight color |
| --aegis-sage | #6b7c6b | Secondary accent |
| Heading font | Playfair Display | Serif editorial headers |
| Body font | Source Sans 3 | Clean readable body text |

## Two-Track Rule

| Site | Audience | Tone | Design |
|------|----------|------|--------|
| aegisaicooperative.com | Community, STEM, families | Warm, welcoming, editorial | Light bg, tan accents |
| aegisos.ai | Defense manufacturers, B2B | Technical, professional | Dark bg, blue accents |

Content that belongs on aegisos.ai must never appear here:
- CMMC compliance tools or documentation
- Defense manufacturing content
- Enterprise pricing or sales collateral
- B2B API documentation
- Security assessment tools

## Enforcement

Every CI/CD push to master deploys immediately. There is no staging environment. Any content change in git goes live within minutes. Treat every commit as a production deployment.

Agents and automated systems: check this file before modifying any content. If your change would alter visible content or design, stop and escalate to the CEO.
