# Client Fonts Setup

Place the provided Arabic font files in this folder using the following filenames (or update `src/index.css` to match your exact filenames):

The Year of Handicrafts
- TheYearOfHandicrafts-Regular.woff2 / .woff / .otf
- TheYearOfHandicrafts-Med.woff2 / .woff / .otf
- TheYearOfHandicrafts-SemBd.woff2 / .woff / .otf

DIN Next Arabic
- DINNextArabic-UltraLight.woff2 / .woff / .otf
- DINNextArabic-Light.woff2 / .woff / .otf
- DINNextArabic-Regular.woff2 / .woff / .otf
- DINNextArabic-Medium.woff2 / .woff / .otf
- DINNextArabic-Bold.woff2 / .woff / .otf
- DINNextArabic-Heavy.woff2 / .woff / .otf
- DINNextArabic-Black.woff2 / .woff / .otf

Ruq'ah (Display)
- Ruqah-Regular.woff2 / .woff / .otf
- Ruqah-Bold.woff2 / .woff / .otf

Notes
- We registered these in `src/index.css` with `@font-face` and in `tailwind.config.ts` under `fontFamily` as:
  - `font-arabic` and `font-din_ar` → "DIN Next Arabic"
  - `font-handicrafts` → "The Year of Handicrafts"
  - `font-ruqah` → "Ruqah"
- The site body already uses `font-arabic` by default.
- Use `className="font-ruqah"` on section titles if you prefer Ruq'ah style.
- You can still use `className="font-handicrafts"` for titles that should use the Handicrafts display font.
