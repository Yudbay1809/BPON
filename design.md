# BPON Design System
> PT BERLIAN PALM OIL NUSANTARA — Official Design Guide
> Generated with `uipro-cli` (Enterprise Gateway pattern) + Brand customization
> Last updated: May 2026

---

## 1. Brand Identity

### Logo
- **Mark**: Letter "B" geometris, kotak rounded merah (#C0392B) dengan huruf B putih
- **Wordmark**: "BPON" — font-black, letter-spacing tight
- **Tagline**: "Berlian Palm Oil Nusantara"
- **Usage**: Selalu tampilkan logo dengan clear space minimum 16px di semua sisi

### Brand Personality
> **Trust & Authority** — Tegas, Profesional, Bertanggung Jawab, Berkelanjutan

---

## 2. Color Palette

### Primary Palette — Red Corporate Brand

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--primary` | BPON Red | `#B91C1C` | CTA, navbar scroll, logo background |
| `--primary-light` | Red Light | `#DC2626` | Hover states, active links |
| `--primary-dark` | Red Dark | `#7F1D1D` | Footer accents, section dividers |
| `--primary-foreground` | White | `#FFFFFF` | Text on primary |

### Secondary Palette — Deep Authority

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--secondary` | Deep Dark | `#1A0A0A` | Footer background |
| `--secondary-mid` | Dark Red | `#450A0A` | Footer sections |
| `--accent` | Gold | `#C9A227` | Stats, badges, highlights |
| `--accent-foreground` | White | `#FFFFFF` | Text on accent |

### Neutral Palette — Clean Corporate

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--background` | Off White | `#FAF9F9` | Page background |
| `--foreground` | Near Black | `#1A1A1A` | Body text, headings |
| `--card` | White | `#FFFFFF` | Card backgrounds |
| `--muted` | Light Gray | `#F4F4F5` | Section backgrounds (zebra) |
| `--muted-foreground` | Gray | `#71717A` | Captions, helper text |
| `--border` | Border Gray | `#E4E4E7` | Card borders, dividers |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#16A34A` | Sustainability badges, positive stats |
| `--destructive` | `#DC2626` | Error states, alerts |
| `--warning` | `#D97706` | Warning states |

---

## 3. Typography

> Source: uipro-cli recommendation — Enterprise/Government/Finance

### Font Stack

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| **Heading** | Lexend | 700, 600 | H1–H4, card titles, section labels |
| **Body** | Source Sans 3 | 400, 500, 600 | Body text, nav links, descriptions |
| **Mono** | Geist Mono | 400 | Code blocks, data values |

### Type Scale

| Size | Class | Usage |
|------|-------|-------|
| 4.5rem / 72px | `text-7xl` | Hero H1 |
| 3rem / 48px | `text-5xl` | Page H1, section heroes |
| 2.25rem / 36px | `text-4xl` | Section H2 |
| 1.5rem / 24px | `text-2xl` | Card H3, sub-sections |
| 1.125rem / 18px | `text-lg` | Lead paragraph |
| 1rem / 16px | `text-base` | Body text |
| 0.875rem / 14px | `text-sm` | Captions, badges, nav |
| 0.75rem / 12px | `text-xs` | Legal, overlines, labels |

### Typography Rules
- Letter-spacing headings: `-0.02em`
- Line-height headings: `1.15`
- Line-height body: `1.65`
- Overline labels: `tracking-widest uppercase text-xs font-bold`

---

## 4. Layout & Spacing

### Container
```
max-w-7xl mx-auto px-4 md:px-8
```

### Section Spacing
| Size | Value | Usage |
|------|-------|-------|
| Section padding | `py-24` (96px) | Standard sections |
| Section padding large | `py-28` (112px) | Featured sections |
| Component gap | `gap-8` (32px) | Card grids |
| Text block gap | `space-y-6` (24px) | Content within sections |

### Breakpoints
| Breakpoint | Width | Usage |
|-----------|-------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop nav change |
| `xl` | 1280px | Wide content |
| `2xl` | 1536px | Ultra-wide |

---

## 5. Components

### Navbar — Fixed with Scroll Behavior
```
Transparent (at top of page):
  - Background: transparent
  - Text: white
  - Logo: white text + red B mark
  - PROBLEM FIX: Always ensure bg semi-dark overlay or
    logo text has text-shadow / bg-black/20 base at top

Scrolled (>30px):
  - Background: white/95 + backdrop-blur
  - Shadow: shadow-md
  - Text: foreground (#1A1A1A)
  - Logo: red B mark + dark text
```

**Rule**: Tambahkan `bg-black/20 backdrop-blur-sm` pada keadaan transparent agar teks selalu terbaca.

### Buttons
| Variant | Style | Usage |
|---------|-------|-------|
| Primary | `bg-primary text-white hover:bg-primary-light` | Main CTA |
| Secondary | `border border-primary text-primary hover:bg-primary hover:text-white` | Secondary CTA |
| Outline White | `border-white/60 text-white hover:bg-white/10` | On dark/image bg |
| Ghost | `text-primary hover:bg-primary/8` | Nav actions |

### Cards
```css
border border-border/40 rounded-2xl p-6-8
hover:border-primary/30 hover:shadow-xl hover:-translate-y-1
transition-all duration-300
```

### Section Labels (Overline)
```html
<p class="text-primary font-bold tracking-widest uppercase text-xs mb-3">
  Kategori
</p>
```

---

## 6. Design Patterns (uipro Enterprise Gateway)

### Page Structure (Landing)
1. **Hero** — Full screen, dark overlay, stats bar pinned at bottom
2. **Core Business** — 3-card grid (Perkebunan, Produksi, Distribusi)
3. **About Preview** — Split layout (image left, content right)
4. **Products** — 4-card grid with hover color flip
5. **Sustainability** — Full-bg dark section with icon cards
6. **News** — Card grid with category badges
7. **CTA** — Full-width primary bg with dual CTAs

### Trust Signals (uipro Trust & Authority)
- Certification badges: RSPO, ISPO, ISCC, ISO 14001, Halal
- Statistics with gold accent color
- Before/after metric comparisons
- Case studies with specific numbers

---

## 7. Effects & Animation

| Effect | Implementation | Duration |
|--------|---------------|----------|
| Hover lift | `hover:-translate-y-1` | 300ms |
| Color transition | `transition-colors` | 200ms |
| Link underline | `hover:text-primary` | 200ms |
| Card shadow | `hover:shadow-xl` | 300ms |
| Border accent | `group-hover:h-full` | 500ms |

**Anti-patterns (uipro warning):**
- ❌ Playful/rounded bubbly design
- ❌ AI purple/pink gradients
- ❌ Hidden credentials
- ❌ Emoji sebagai icon UI
- ❌ Teks putih tanpa background memadai (navbar issue)

---

## 8. Navbar Fix — Contrast Rules

### Problem
Navbar transparent di atas hero → teks putih tidak terlihat jika background terang/grey.

### Solution
```
Transparent state: tambahkan bg-gradient overlay atau bg-black/25 di navbar
Scrolled state: bg-white/95 dengan text-foreground (#1A1A1A)
```

### Implementation
```tsx
// Transparent = selalu ada semi-dark base agar teks terbaca
'bg-gradient-to-b from-black/40 to-transparent py-5'

// Scrolled = solid white
'bg-white/95 backdrop-blur-md shadow-md py-3'
```

---

## 9. Accessibility Checklist (uipro WCAG AAA)

- [ ] Text contrast ≥ 4.5:1 (AA) semua teks
- [ ] Focus ring visible (2px primary outline)
- [ ] cursor-pointer semua elemen interaktif
- [ ] Alt text semua gambar
- [ ] Semantic HTML (h1 per page, nav, main, footer)
- [ ] prefers-reduced-motion fallback
- [ ] Keyboard navigable (Tab order logis)
- [ ] No horizontal scroll on 375px

---

## 10. Color Change Summary

### Before (Green)
```
primary: #1B5E20 (dark green)
secondary: #2E7D32
background: #F8FAF8
```

### After (Red Corporate)
```
primary: #B91C1C (corporate red)
secondary: #991B1B (dark red)
accent: #C9A227 (gold - tetap)
background: #FAF9F9 (warm white)
```

> Merah BPON dipilih sebagai warna korporat yang mencerminkan keberanian, ketegasan, dan kepercayaan — sesuai dengan identitas logo "B" merah-putih perusahaan.
