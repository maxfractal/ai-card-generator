Below is BuildMe + Figma component guidance for the AIA Global Navigation System, translated from the one‑page spec. I’m grounding this in (a) your existing AIA Design System “Lumina” Wave approach + BuildMe deployment patternand (b) the way BuildMe implementation / import paths have been described in internal enablement conversations (BuildMe as a prototyping/deploy vehicle; ability to import assets/work from repositories/Launchpad). Where I make design recommendations (spacing, tokens, states), I’ll clearly mark them as suggested defaults to fit your system—not claims from sources. [StratOps-03 | PowerPoint], [Weekly Str…Recording | Video] [Business E…Recording | Video]

1. Component Inventory (BuildMe + Figma)
Create these as reusable components so they can be deployed consistently “through BuildMe to individual sites” as part of the iterative AIA Design System rollout. [StratOps-03 | PowerPoint], [Weekly Str…Recording | Video]

A. GlobalHeader (Top Bar)
Purpose: Holds current site identity + global ecosystem entry point.
Contains:

SiteIdentity (logo + site name)
GlobalNavAnchor (icon/button that opens menu)
Optional right-side slot (search/profile/help), if already standard on AIA sites (leave empty if not)
Variants

Default
Compact (narrow widths)
With/without optional right slot
B. SiteIdentity
Purpose: Clearly indicates “where I am now” (current site).
Contains:

SiteLogo (image)
SiteName (text label)
Rules

Must remain visually dominant vs. the ecosystem menu trigger (anchor). (Spec requirement—retain current site identity.) (Derived from your stated proposal/spec intent.)
Variants

Logo + Name
Name only (fallback if logo missing)
C. GlobalNavAnchor (Ecosystem Switcher Trigger)
Purpose: Single entry point to the ecosystem menu.
Contains:

Icon (grid/dots/compass) + label “AIA” or “Ecosystem” (choose one and standardize)
States

Default
Hover
Pressed/Active (menu open)
Disabled (rare; avoid unless required)
D. EcosystemMenu (Expandable Menu / Dropdown)
Purpose: List of AIA sites + short descriptions; one click = navigate.
Contains:

Optional menu header: “AIA Ecosystem”
List of EcosystemMenuItem
Divider + “More coming soon” (optional; only if LT wants future‑proofing visible)
Behavior

Opens on click (not hover) (from your spec intent)
Dismiss on outside click / Esc
Anchored to GlobalNavAnchor
Scrolls if list exceeds max height (future scale)
E. EcosystemMenuItem (Row)
Purpose: A single site link with optional icon + descriptor.
Fields

Icon (optional)
Title (required)
Descriptor (required, ≤ 8 words)
Optional “Current” indicator (pill/check)
States

Default
Hover
Pressed
Current Site (highlighted + disabled navigation)
Disabled (if future sites are placeholder)
2) Figma: Component Specs (What to Build)
GlobalHeader – Auto Layout Setup
Layout

Horizontal Auto Layout
Left group: SiteIdentity
Right group: GlobalNavAnchor (+ optional slot)
Suggested defaults (align to your “clarity + system credibility” approach)

Height: 56–64px
Padding: 16px left/right
Gap between groups: “space-between”
Background: solid near‑white or “glass” surface only if your AIA header already uses glassmorphism; otherwise keep neutral for legibility (suggestion, not sourced)
Typography (aligning to your Design System direction)

SiteName: header style (JetBrains Mono / Space Grotesk fallback if your system uses that convention) (This matches your previously established typography direction in memory; not re‑cited here because it’s not in tool output.)
Descriptors: body style (Open Sans / Roboto fallback)
If you want this fully “source‑anchored,” we can pull the actual typography/token definitions from your design system file(s) by opening them—but I don’t yet have a file in the results that contains the exact token table.

EcosystemMenu – Structure
Frame

Vertical Auto Layout
Menu width: 320–360px (suggested)
Internal padding: 12–16px
Item spacing: 4–8px
Menu Item Row

Height: 56–64px per item (to fit title + descriptor)
Two-line text stack: Title on top, descriptor below
Icon size: 20–24px (optional)
Descriptor rule enforcement

Add a Figma component property note: “Descriptor must be ≤ 8 words”
EcosystemMenuItem – Properties (Figma Component Props)
Set up component properties so it’s easy to maintain:

iconVisible (boolean)
titleText (string)
descriptorText (string; ≤ 8 words)
state (enum): default | hover | active | current | disabled
isCurrentSite (boolean) → toggles “Current” pill + disables link style
3) Content: Prototype Menu Items (Ready to Paste)
Use these initial entries (your Phase 1 scope):

AIA Site — “Strategy, resources, and ecosystem overview”
Impact Assessment — “Measure impact, outcomes, and adoption”
CoCo — “AI‑powered decisions for brand marketers”
Scout — “AI assistant for field execution”
(These are the same placeholders from your spec draft; keep the 8‑word constraint.)

1. BuildMe Translation (How to Implement as BuildMe Components)
Because BuildMe is being used as a vehicle to “implement and deploy the design system,” treat this as a reusable header module that each site imports and configures.
And since BuildMe supports importing work from other sources (e.g., Launchpad/repo) per internal guidance, keep the component as a portable module. [StratOps-03 | PowerPoint], [Weekly Str…Recording | Video] [Business E…Recording | Video]

BuildMe Component Set
GlobalHeader (component)
EcosystemMenu (component)
EcosystemMenuItem (component)
BuildMe Config Inputs (per site)
For each site/app, expose simple configuration values:

currentSiteKey (AIA | IA | CoCo | Scout)
menuItems[] with:
title
icon (optional)
descriptor
url
order[] (optional; if ordering needs to be centralized)
showIcons (true/false)
BuildMe Behavior Requirements
Menu opens on click of anchor
Menu closes on outside click
Current site item is styled as current and not clickable
5) Visual Hierarchy & Placement Rules (Implementation Guardrails)
These are the “do not break” rules that should be written directly into the component description in Figma/BuildMe:

Current site identity wins: site logo/name must be more prominent than the ecosystem trigger. (Derived from your spec intent.)
Ecosystem menu is a switcher, not primary nav: do not add deep links or local nav inside it. (Derived from your spec intent.)
Descriptor is functional and short: max 8 words; no marketing language. (Your requirement.)
Scale-ready: menu scrolls after a max height; adding a new site requires only adding a new menuItems[] entry. (Your requirement.)
6) Deliverables You Can Hand to Nick / Maria T / LT (Copy‑Paste)
Figma deliverables

Component set page: GlobalHeader / EcosystemMenu / EcosystemMenuItem
Example instances:
AIA Site header (current = AIA)
IA Site header (current = IA)
CoCo header (current = CoCo)
Scout header (current = Scout)
Redline notes: placement + descriptor rule + current item rule
BuildMe deliverables

One reusable GlobalHeader component
Config JSON for the four sites (titles/descriptors/urls)
Prototype pages showing the header applied across each site
7) (Optional) BuildMe “Prompt” for Vibe‑Coding the Component
Since you described using BuildMe for “vibe coding” against the design system, here’s a ready prompt you can paste into BuildMe to generate the header/module structure. [Weekly Str…Recording | Video]

Create a reusable GlobalHeader component for the AIA ecosystem.

Requirements:

* Left: current site identity with logo + site name.
* Right: an Ecosystem switcher button (GlobalNavAnchor) that opens an expandable menu on click.
* The expandable menu lists sites with:
  * site title (required)
  * optional icon
  * short descriptor text (required, max 8 words)
* Prototype menu items:
  * AIA Site — “Strategy, resources, and ecosystem overview”
  * Impact Assessment — “Measure impact, outcomes, and adoption”
  * CoCo — “AI-powered decisions for brand marketers”
  * Scout — “AI assistant for field execution”
* Current site item must be visually highlighted and not clickable.
* Menu closes on outside click and Escape.
* Menu supports future scale by scrolling after a max height.

Expose configuration:

* currentSiteKey
* menuItems[] with title, optional icon, descriptor, url