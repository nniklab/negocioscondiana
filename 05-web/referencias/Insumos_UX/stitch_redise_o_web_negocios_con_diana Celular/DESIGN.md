---
name: Negocios con Diana Identity
colors:
  surface: '#fbf8ff'
  surface-dim: '#d9d8ee'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#eeecff'
  surface-container-high: '#e8e6fd'
  surface-container-highest: '#e2e0f7'
  on-surface: '#191a2a'
  on-surface-variant: '#594140'
  inverse-surface: '#2e2f40'
  inverse-on-surface: '#f1efff'
  outline: '#8d7070'
  outline-variant: '#e1bebe'
  surface-tint: '#b32637'
  primary: '#af2435'
  on-primary: '#ffffff'
  primary-container: '#d23e4b'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b3'
  secondary: '#5c598d'
  on-secondary: '#ffffff'
  secondary-container: '#c7c3ff'
  on-secondary-container: '#514e83'
  tertiary: '#934600'
  on-tertiary: '#ffffff'
  tertiary-container: '#b45d18'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#ffb3b3'
  on-primary-fixed: '#400009'
  on-primary-fixed-variant: '#910622'
  secondary-fixed: '#e3dfff'
  secondary-fixed-dim: '#c5c0fc'
  on-secondary-fixed: '#181446'
  on-secondary-fixed-variant: '#444174'
  tertiary-fixed: '#ffdbc7'
  tertiary-fixed-dim: '#ffb688'
  on-tertiary-fixed: '#311300'
  on-tertiary-fixed-variant: '#733600'
  background: '#fbf8ff'
  on-background: '#191a2a'
  surface-variant: '#e2e0f7'
  canvas-bg: '#F6F7FB'
  surface-card: '#FFFFFF'
  gradient-coral: '#F0545F'
  gradient-orange: '#F7924A'
  navy-deep: '#2F2C5E'
  text-muted: '#5B5B6E'
  accent-green: '#3DAE3A'
  accent-cyan: '#4FC3E8'
  accent-lilac: '#A86BF0'
  accent-yellow: '#FCC96A'
typography:
  display-hero:
    fontFamily: Nunito Sans
    fontSize: 52px
    fontWeight: '800'
    lineHeight: 60px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Nunito Sans
    fontSize: 34px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Nunito Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Nunito Sans
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 34px
  headline-md:
    fontFamily: Nunito Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Nunito Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-badge:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '800'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-button:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 20px
  stat-number:
    fontFamily: Nunito Sans
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 48px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system establishes a warm, empowering, vibrant, and approachable digital presence tailored specifically for female entrepreneurs seeking mindset transformation. The visual identity avoids cold corporate rigidity and overly ethereal wellness tropes. Instead, it balances high-converting credibility with feminine energy, optimism, and dynamic modernism.

The design philosophy combines contemporary soft-tech SaaS aesthetics with vibrant editorial mentoring touches:
- **Clean Canvas:** A soft, glare-free background (`#F6F7FB`) creates breathability and calm while maintaining optimal contrast against pristine white floating cards.
- **Fluid & Organic Geometry:** Curved organic blobs, soft pill containers, circular icon badges, and dynamic framing create an inviting, human touch.
- **Warm Kinetic Accents:** Gradients shifting from radiant coral (`#F0545F`) to warm orange (`#F7924A`) generate urgency and optimistic momentum across primary call-to-actions and hero headlines.
- **Grounded Structure:** Deep navy headers (`#2F2C5E`) provide authority, maturity, and educational professionalism, assuring prospective learners of substance and clarity.

## Colors

The palette is strictly calibrated for a light mode experience. It relies on a multi-tiered functional system consisting of an energizing chromatic core, authoritative anchors, and playful accent tones:

- **Primary & Energy Driver (`#F0545F` to `#F7924A`):** The signature brand gradient merges energetic coral into warm sunlit orange. It is reserved for high-intent conversions (primary CTA buttons, highlighted key metric values, and primary hero text treatment via linear CSS gradients at 135deg).
- **Structural Anchor (`#2F2C5E`):** A deep navy tone used for major section titles, navigation logos, price cards, and structural hierarchy. It guarantees WCAG AAA legibility against the light surface.
- **Neutral & Body Text (`#5B5B6E` on `#F6F7FB`):** Body text is set in a neutral slate gray, avoiding absolute `#000000` to prevent visual fatigue while keeping an accessible contrast ratio well above 4.5:1.
- **Multi-Chromatic Accents:** Vibrant utility colors provide immediate visual feedback and categorize educational perks:
  - `accent-green` (`#3DAE3A`): Success indicators, financial security badges (e.g., Hotmart assurance), and growth graphs.
  - `accent-cyan` (`#4FC3E8`): Digital convenience, access badges, and immediate connectivity.
  - `accent-lilac` (`#A86BF0`): Mindset expansion, self-worth, and inner reflection topics.
  - `accent-yellow` (`#FCC96A`): Focus, energetic highlights, and badge callouts.

## Typography

The typography leverages `Nunito Sans` systematically across all hierarchies to produce a rounded, welcoming, yet punchy visual character.

- **Display & Headlines:** Main headers utilize an ultra-bold weight (`800`) to maximize presence and convey warmth without sharp terminals. Gradient headlines use background-clip techniques (`background: linear-gradient(135deg, #F0545F 0%, #F7924A 100%); -webkit-background-clip: text; color: transparent;`). Section headers utilize `#2F2C5E` with tight letter spacing for maximum reading velocity.
- **Body & Captions:** Regular weights (`400`) and balanced line heights (1.5x) ensure effortless readability for longer narrative copy and curriculum outlines. Secondary text is tinted with `#5B5B6E`.
- **Badges & Overlines:** Upper-cased tags like `"BIENVENIDA"` adopt `800` weight with wide letter tracking (`0.08em`) to act as crisp organizational flags above flowing titles.

## Layout & Spacing

The layout is built around a responsive 12-column grid system (4 columns on mobile, 8 on tablet, 12 on desktop with a maximum centered container width of `1200px`).

- **Vertical Rhythm:** Sections breathe generously via `space-2xl` (mobile) to `space-3xl` (desktop) intervals. This negative space prevents visual clutter, allowing each mentoring point and floating card to hold sovereign visual weight.
- **Card Grids:** Benefit cards and offer modules deploy dynamic equal-height grids with `gutter: 1.5rem`.
- **Asymmetric Composition:** Large hero imagery and featured founder portraits are placed alongside curved blob decorations and overlaid with off-grid floating cards using negative margins and absolute positioning to evoke playful dimensional layering.

## Elevation & Depth

Visual depth is achieved through high-diffusion, soft-tinted ambient shadows that mimic natural daylight casting across pristine white cards. This keeps the light aesthetic clean and airy.

- **Level 0 (Flat Base):** Background canvas (`#F6F7FB`) with zero elevation.
- **Level 1 (Resting Cards):** Pure white container (`#FFFFFF`) with shadow `0 10px 30px -5px rgba(47, 44, 94, 0.06), 0 4px 12px -2px rgba(47, 44, 94, 0.03)`. The tinted navy ambient occlusion keeps the shadow clean rather than dirty gray.
- **Level 2 (Hover & Floating Elements):** Floating callout chips over photographs, interactive pricing cards, and active states elevate with `0 20px 40px -8px rgba(47, 44, 94, 0.12), 0 8px 16px -4px rgba(47, 44, 94, 0.04)`.
- **Level 3 (Action Shadow):** Primary conversion buttons feature a dedicated chromatic glow shadow: `0 12px 28px -6px rgba(240, 84, 95, 0.38)`. This gives the button an illuminated, clickable presence.

## Shapes

The design system embraces level 3 pill-shaped and organic geometries. Roundness communicates approachability, empathy, and comfort.

- **Interactive Elements:** Buttons, search bars, tag badges, and text inputs feature continuous stadium / pill geometry (`border-radius: 9999px` or `2rem`).
- **Surface Cards:** Content containers and modals utilize a consistent `1.5rem` (24px) to `2rem` (32px) border radius.
- **Photographic Masks & Blobs:** All imagery showcasing female entrepreneurs and Diana Yela uses smooth SVGs or `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%` morphing outlines, paired with subtle geometric background motifs (concentric dots, triangles, and colored curved lines).

## Components

### Buttons
- **Primary CTA ("Adquirir masterclass"):** Full pill-radius (`9999px`), gradient fill (`linear-gradient(135deg, #F0545F 0%, #F7924A 100%)`), white bold text, zero border, and elevated warm glow shadow (`rgba(240, 84, 95, 0.38)`). Scales up slightly on hover (`transform: translateY(-2px)`).
- **Secondary / Ghost ("Ver video"):** Pill-radius, transparent background, solid border (`1.5px solid #2F2C5E`), text in `#2F2C5E`, turning into light navy tint (`rgba(47, 44, 94, 0.04)`) on hover.

### Floating Feature Cards & Badges
- **Floating Badges:** Compact white surface with `Level 2` shadow, pill or rounded-2xl corners, paired with an icon housed inside a soft pastel circular badge (tinted with `#3DAE3A`, `#4FC3E8`, `#A86BF0`, or `#FCC96A`).
- **Pill Tags ("BIENVENIDA"):** Small pill badge with `rgba(240, 84, 95, 0.12)` background, text in `#F0545F`, bold uppercase tracking.

### Cards & Modules
- **Benefit Cards:** White background (`#FFFFFF`), `24px` border radius, subtle border (`1px solid rgba(47, 44, 94, 0.04)`), soft ambient shadow, housing a 48px circular icon with individual pastel tints and `#2F2C5E` typography.
- **Pricing Card:** Elevated white card featuring a navy top-banner or gradient border highlight, strike-through text for original price (`#5B5B6E`), large emphasized price tag (`stat-number` in `#2F2C5E`), followed by the primary CTA button.
- **Metrics / Metric Strip:** Clean white containers displaying numerical accomplishments using gradient numbers (`stat-number`) and small descriptive body copy.

### Form Inputs & Checkboxes
- **Text Inputs:** Pill-shaped input fields with background `#FFFFFF`, border `1.5px solid #E2E4ED`, focus ring `0 0 0 3px rgba(240, 84, 95, 0.25)`.
- **List Items & Checkmarks:** Bulleted learning modules highlighted with rounded green check circle icons (`#3DAE3A`) to provide positive affirmation of value.