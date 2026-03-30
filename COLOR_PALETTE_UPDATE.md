# Zaxa Studio Color Palette Update

## New Color Scheme

The website has been updated with a fresh, modern color palette featuring teal accents on dark backgrounds.

### Color Palette

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Pure Black** | `#000000` | `rgb(0, 0, 0)` | Primary background, deep shadows |
| **Dark Gray** | `#222222` | `rgb(34, 34, 34)` | Secondary backgrounds, borders, cards |
| **Teal Primary** | `#1DCD9F` | `rgb(29, 205, 159)` | Primary text, accents, highlights |
| **Teal Secondary** | `#169976` | `rgb(22, 153, 118)` | Hover states, secondary accents |
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | Headings, high-contrast text |

## Color Mapping (Old → New)

### HEX Colors
- `#0A111F` (Deep Navy) → `#000000` (Pure Black)
- `#1E293B` (Steel Blue) → `#222222` (Dark Gray)
- `#E2E8F0` (Cyber Silver) → `#1DCD9F` (Teal Primary)

### RGBA Colors  
- `rgba(10, 17, 31, X)` → `rgba(0, 0, 0, X)`
- `rgba(30, 41, 59, X)` → `rgba(34, 34, 34, X)`
- `rgba(226, 232, 240, X)` → `rgba(29, 205, 159, X)`

## CSS Custom Properties

Updated in `/src/styles/theme.css`:

```css
:root {
  --color-black: #000000;
  --color-dark-gray: #222222;
  --color-teal-primary: #1DCD9F;
  --color-teal-secondary: #169976;
}

.dark {
  --background: #000000;
  --foreground: #1DCD9F;
  --primary: #1DCD9F;
  --secondary: #222222;
  --border: #222222;
  --muted-foreground: #169976;
}
```

## Implementation Status

### ✅ Updated Files
- `/src/styles/theme.css` - CSS custom properties updated

### 🔄 Files to Update
The following files contain hardcoded color values that need updating:

#### Components
- `/src/app/components/Button.tsx`
- `/src/app/components/IntroAnimation.tsx`
- `/src/app/components/ProjectCard.tsx`
- `/src/app/components/ProjectDetailLayout.tsx`
- `/src/app/components/Navigation.tsx`
- `/src/app/components/Footer.tsx`

#### Pages
- `/src/app/pages/HomePage.tsx`
- `/src/app/pages/AboutPage.tsx`
- `/src/app/pages/ServicesPage.tsx`
- `/src/app/pages/ProjectsPage.tsx`
- `/src/app/pages/ContactPage.tsx`
- `/src/app/pages/CaseStudyTemplate.tsx`
- All case study pages in `/src/app/pages/case-studies/`

## Usage Guidelines

### Backgrounds
- **Primary Background**: `#000000` - Use for main page backgrounds
- **Secondary Background**: `#222222` - Use for cards, modals, overlays

### Text & Accents
- **Primary Text/Accents**: `#1DCD9F` - Main text color, interactive elements
- **Secondary Accents**: `#169976` - Hover states, subtle highlights
- **Headings**: `#FFFFFF` - High-impact typography

### Borders & Dividers
- **Primary Borders**: `#222222` at various opacities
- **Accent Borders**: `#1DCD9F` at low opacity for highlights

## Examples

### Background Gradients
```tsx
bg-gradient-to-br from-[#000000] via-[#222222] to-[#000000]
```

### Text with Opacity
```tsx
text-[#1DCD9F]/70  // 70% opacity
text-[#1DCD9F]/80  // 80% opacity
```

### RGBA with Transparency
```tsx
bg-[rgba(34,34,34,0.8)]  // Dark gray with 80% opacity
border-[rgba(29,205,159,0.3)]  // Teal border with 30% opacity
```

### Shadows & Glows
```tsx
shadow-[0_0_20px_rgba(29,205,159,0.8)]  // Teal glow effect
```

## Notes

- The new palette maintains high contrast ratios for accessibility
- Teal accents provide a modern, tech-forward aesthetic
- Pure black backgrounds create depth and sophistication
- All opacity values from the old palette are preserved in the new system
