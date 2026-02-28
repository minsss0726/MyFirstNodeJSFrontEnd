# Frontend Design Rules

## Monotone Contemporary UI System

---

## 1. Core Design Philosophy

This project follows a **Monotone Contemporary Design System**.

Design must be:

- Minimal
- Clean
- Structured
- Calm
- Content-focused
- Functional over decorative

Avoid visual noise.
Avoid unnecessary color usage.
Avoid heavy shadows and gradients.

White space is a primary design element.

---

## 2. Color System

### Primary Palette (Monotone Only)

Use grayscale only.

| Role                    | Color   |
| ----------------------- | ------- |
| Background              | #FFFFFF |
| Sub Background          | #F5F5F5 |
| Border                  | #E5E5E5 |
| Primary Text            | #111111 |
| Secondary Text          | #666666 |
| Disabled Text           | #AAAAAA |
| Accent (Only if needed) | #000000 |

Rules:

- Do not use multiple accent colors.
- Do not use strong brand colors.
- No bright or saturated colors.
- Red is allowed ONLY for destructive actions.

---

## 3. Typography Rules

Font style must be:

- Sans-serif
- Modern
- Neutral

Recommended:

- Inter
- Pretendard
- System UI font stack

### Font Scale

- H1: 32px / 700
- H2: 24px / 600
- H3: 18px / 600
- Body: 14–16px / 400
- Caption: 12px / 400

Rules:

- Do not mix more than 2 font weights in one section.
- Line height must be at least 1.5.
- Avoid letter-spacing unless subtle (0.2px–0.5px).

---

## 4. Layout Rules

### Spacing System (8px Grid)

Use multiples of 8:

- 8px
- 16px
- 24px
- 32px
- 40px
- 48px

Never use arbitrary spacing like 13px, 27px.

### Layout Principles

- Use max-width container (e.g., 720px for memo app).
- Content centered horizontally.
- Generous padding.
- Clear separation between sections.

---

## 5. Component Design Principles

### Buttons

Style:

- Background: Black
- Text: White
- Border radius: 8px
- Padding: 8px 16px

Hover:

- Slight opacity change (0.85)
- No glow effects

Secondary Button:

- Background: Transparent
- Border: 1px solid #E5E5E5
- Text: Black

No gradients.
No complex shadows.

---

### Inputs & Textareas

Style:

- Border: 1px solid #E5E5E5
- Border radius: 8px
- Padding: 12px
- Background: #FFFFFF

Focus:

- Border color: #000000
- No blue default outline

Avoid heavy inner shadows.

---

### Cards

- Background: #FFFFFF
- Border: 1px solid #E5E5E5
- Border radius: 12px
- Padding: 16px–24px
- No drop shadows (or very subtle only)

---

## 6. Interaction Rules

- Animations must be subtle.
- Use 150–200ms transitions.
- Use ease-in-out.
- No bouncing.
- No exaggerated scaling.

Micro-interactions only.

---

## 7. Icon Rules

- Use simple line icons.
- Stroke width consistent.
- Avoid filled icons.
- Avoid colorful icons.

Icons must not dominate the UI.

---

## 8. Visual Hierarchy Rules

Hierarchy must be created by:

- Spacing
- Typography scale
- Contrast (dark vs light gray)
- Layout alignment

NOT by:

- Bright colors
- Heavy shadows
- Borders everywhere

---

## 9. Page Design Principles (Memo App Specific)

### Memo List Page

- Clean vertical list
- Title bold
- Content preview in light gray
- Timestamp small and subtle
- Clear separation between items

### Memo Detail Page

- Large title
- Generous spacing
- Focus on readability
- No side distractions

---

## 10. Anti-Pattern Rules (Strictly Forbidden)

Do NOT:

- Use gradients
- Use multiple brand colors
- Use neumorphism
- Use glassmorphism
- Add random shadows
- Use rounded corners larger than 16px
- Mix multiple visual styles

Consistency over creativity.

---

## 11. Future Scalability

The design must remain:

- Extendable
- Consistent
- Calm
- Professional

Even if features increase (auth, tags, search),
visual tone must remain monochrome and minimal.
