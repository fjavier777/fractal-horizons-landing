# Architecture rules
- Keep the commercial landing in a separate `/sites` leaf route and `components/commercial` modules; the institutional route and global design system remain untouched to preserve the published experience.
- Centralize commercial demo URLs in `src/lib/commercial-sites.ts`; both product links read this configuration so replacements happen in one place.
- Use existing UI primitives and landing utilities for commercial controls and surfaces; local header/footer variants keep commercial navigation and copy isolated from the institutional page.