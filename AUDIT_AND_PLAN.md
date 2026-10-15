# EspañaTransparente — Content, UI/UX Audit & Redesign Plan

## 1. Content & Data Credibility Fixes
1. **Unified Regional Presidency Counts:** Resolved the discrepancy between the KPI card (11 PP / 3 PSOE / 3 Otros) and the section header (13 PP / 4 PSOE / 2 Otros) by deriving all counts from a single source of truth with an explicit toggle for the 17 CCAA vs. 19 territories (including Ceuta and Melilla).
   - **17 Comunidades Autónomas:** 11 PP (Andalucía, Aragón, Baleares, Cantabria, Castilla y León, Comunitat Valenciana, Extremadura, Galicia, Madrid, Murcia, La Rioja), 4 PSOE (Asturias, Castilla-La Mancha, Cataluña, Navarra), 2 Otros (Canarias - CC, País Vasco - PNV).
   - **19 Territorios (incl. Ceuta y Melilla):** 13 PP, 4 PSOE, 2 Otros.
2. **Eliminated Triple Repetition Above the Fold:** Compressed the header and hero by 50% and turned the 4 KPI cards into an interactive WAI-ARIA compliant tab switcher (`congreso`, `autonomias`, `promisometro`, `justicia`).
3. **350-Seat Parliamentary Math:** Added the 59 seats belonging to parliamentary partners (Sumar, ERC, Junts, EH Bildu, PNV, BNG, CC, UPN, Podemos) alongside PP (137), PSOE (121), and Vox (33) so legislative majorities (176 seats) add up accurately.
4. **Primary Source Deep Links:** Every regional card, campaign promise, congressional vote, and judicial record links directly to the corresponding BOE, Diario de Sesiones, or CENDOJ record.
5. **URL Deep Linking:** Preserves module navigation state in the browser URL via query parameter sync (`?modulo=...`).

## 2. Included Architecture
- `src/lib/data.ts` — Unified TypeScript store & party color tokens (19 territories, full parliamentary seats).
- `src/app/page.tsx` — Main entry with URL query param sync (`?modulo=...`).
- `src/components/ObservatorioShell.tsx` — Compact top bar, methodology drawer, 4-KPI interactive tab switcher, and institutional sources footer.
- `src/components/AutonomiasSplitView.tsx` — 2-column split map selector and sticky regional parliament inspector with 17 CCAA vs 19 territories toggle and party filters.
- `src/components/CongresoView.tsx` — 350-seat hemicycle breakdown and nominal voting comparator with Diario de Sesiones links.
- `src/components/PromisometroView.tsx` — Side-by-side JEC Manifesto vs. BOE Law verification cards with party and status filters.
- `src/components/JusticiaView.tsx` — CENDOJ penal causes, TCu/JEC sanctions, and Regional Emergency audits with official resolution links.
