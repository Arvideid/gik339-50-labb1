# AI-användningsdokumentation

## Översikt
Detta dokument loggar användningen av AI-verktyg under projektets utveckling. De primära AI-verktygen som användes var:
- Claude 3.5 Sonnet

## Interaktionslogg

### 2024-03-XX: CSS-styling förbättring
**Fråga**: "can you improve our css styling? no animations, polished styling. use a responsive vertical layout"
**AI-verktyg**: Claude 3.5 Sonnet

![CSS-styling förfrågan](./images/cssstyling.png)

**Sammanfattning av svar**: AI:n förbättrade CSS-stylingen med:
- Grundläggande reset och typografi
- Responsiv vertikal layout
- Polerad styling utan animationer
- Förbättrad läsbarhet och struktur i koden

**Påverkad kod**: `src/css/styles.css`

### 2024-03-XX: Svenska JavaScript-kommentarer
**Fråga**: "kan du lägga till kommentarer i javascript koden på svenska"
**AI-verktyg**: Claude 3.5 Sonnet

![JavaScript-kommentarer förfrågan](./images/jscomments.png)

**Sammanfattning av svar**: AI:n lade till svenska kommentarer i JavaScript-koden för att förbättra kodens läsbarhet och underhållbarhet:
- Beskrivande kommentarer för DOM-element
- Förklaringar av eventhantering
- Tydlig dokumentation av funktionalitet

**Påverkad kod**: `src/js/main.js`

## Riktlinjer för dokumentation
Vid tillägg av nya poster:
1. Inkludera datum
2. Specificera vilket AI-verktyg som användes
3. Dokumentera frågan/prompten
4. Sammanfatta AI:ns svar
5. Notera vilka kodändringar som resulterade från interaktionen

## Påverkan på utvecklingen
AI-verktygen har varit särskilt hjälpsamma för:
- Initial strukturering av HTML enligt specifikationerna
- Förbättring av CSS-styling med fokus på användbarhet och responsivitet
- Implementering av tydliga svenska kommentarer i JavaScript-koden
- Effektivisering av utvecklingsprocessen genom snabb feedback och kodförslag

Alla AI-genererade förslag har granskats och anpassats manuellt för att säkerställa kvalitet och korrekthet. 