# XNV4 Low-Fidelity Wireframe

This directory contains a standalone HTML wireframe prototype for the existing XNV4 homepage at `http://localhost/xnv4/`.

## Original Page Structure Observed

- Global navigation with brand/logo, About, Portfolio, and Contact links.
- Hero/header with an eyebrow, large positioning headline, lead paragraph, capability tags, and a secondary product-design panel.
- Featured work section for the 2024 Paris Olympics App with four media thumbnails and two calls to action.
- Recent blog posts displayed as four cards.
- About section with narrative copy and a profile image.
- Skills grid with eight capability cards.
- Career metric strip with four compact stats.
- Olympics impact panel with five metrics.
- Contact call to action.
- Small footer.

## Layout Model

The wireframe uses semantic HTML, CSS Grid, Flexbox, and reusable classes:

- `.wf-container`
- `.wf-section`
- `.wf-panel`
- `.wf-card`
- `.wf-image`
- `.wf-placeholder`
- `.wf-button`
- `.wf-label`
- `.wf-grid`

The desktop layout preserves the original content order and general rhythm: global nav, split hero, portfolio media grid, related content grid, about two-column block, skills, metrics, impact, contact, footer.

## Assumptions

- The purpose is structural exploration, so original colors, gradients, type choices, imagery, animation, and brand-specific polish were intentionally removed.
- Image-heavy regions are represented as labeled placeholders because the layout relationship matters more than visual fidelity.
- External links are retained only enough to keep navigation and CTAs clickable.
- The current live page has duplicate `portfolio` IDs and loosely nested section wrappers; the wireframe normalizes those into clearer semantic regions.

## Intentional Differences

- Added understated region labels to make the page architecture easier to discuss.
- Added a mobile menu toggle instead of simply compressing nav links.
- Changed mobile metric behavior so cards stack cleanly rather than squeezing narrow text into four columns.
- Added simple tabs in the Olympics impact panel as a lightweight interaction placeholder for future structure experiments.
- Tightened section boundaries so each content region can be moved, duplicated, or removed independently.

## Next Layout Experiments

- Content-first version: move About and core capabilities closer to the hero, with selected work as proof after the positioning.
- Dashboard/grid version: treat skills, metrics, and work samples as a denser portfolio dashboard.
- Editorial version: lead with a stronger case-study narrative and larger sequential content bands.
- Split portfolio version: keep the hero compact and use a persistent sidebar for case-study navigation.
- Metrics-first version: surface outcomes and impact before thumbnails to emphasize senior product leadership.
