# zipfyi-embed

[![npm](https://img.shields.io/npm/v/zipfyi-embed)](https://www.npmjs.com/package/zipfyi-embed)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/zipfyi-embed)

Embed **ZipFYI** widgets — zip codes, glossary terms, interactive tools, and inline elements — on any website. **4 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, clean), and live data from the [ZipFYI](https://zipfyi.com) database.

Every widget includes a "Powered by ZipFYI" backlink directing readers to the full reference.

> **Try the interactive widget builder at [widget.zipfyi.com](https://widget.zipfyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-zipfyi="entity" data-slug="postal-codes" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/zipfyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the ZipFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-zipfyi="entity" data-slug="..."></div>` | Entity detail card — city, mountain, earthquake, or postal code |
| `glossary` | `<div data-zipfyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `faq` | `<div data-zipfyi="faq" data-slug="..."></div>` | FAQ accordion with expand/collapse |
| `search` | `<div data-zipfyi="search" data-slug="..."></div>` | Search box linking to the full database |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-zipfyi` | entity, glossary, faq, search | required | Widget type |
| `data-slug` | e.g. "postal-codes" | — | Entity slug from the ZipFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-style` | modern, clean | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search ZIP Codes..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-zipfyi="entity" data-slug="postal-codes" data-theme="light"></div>

<!-- Dark -->
<div data-zipfyi="entity" data-slug="postal-codes" data-theme="dark"></div>

<!-- Sepia -->
<div data-zipfyi="entity" data-slug="postal-codes" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-zipfyi="entity" data-slug="postal-codes" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — clean lines, rounded corners, accent gradients -->
<div data-zipfyi="entity" data-slug="postal-codes" data-style="modern"></div>

<!-- Clean — minimal borders, utility-focused, data-first aesthetic -->
<div data-zipfyi="entity" data-slug="postal-codes" data-style="clean"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<zipfyi-entity slug="postal-codes" theme="light"></zipfyi-entity>
<zipfyi-search placeholder="Search ZIP Codes..."></zipfyi-search>

<script src="https://cdn.jsdelivr.net/npm/zipfyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Entity Card

```html
<div data-zipfyi="entity" data-slug="postal-codes" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/zipfyi-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-zipfyi="search" data-placeholder="Search ZIP Codes..."></div>
<script src="https://cdn.jsdelivr.net/npm/zipfyi-embed@1/dist/embed.min.js"></script>
```

### Glossary Term

```html
<div data-zipfyi="glossary" data-slug="example-term" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/zipfyi-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/zipfyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/zipfyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install zipfyi-embed
```

```javascript
import 'zipfyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Clean (minimal, data-first)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection)
- **CORS**: ZipFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets
- **Bundle size**: Tree-shaken per site — only includes tools available on ZipFYI

## Learn More About ZIP Codes

Visit [zipfyi.com](https://zipfyi.com) — ZipFYI is a comprehensive zip codes reference with interactive tools, guides, and developer resources.

- **API docs**: [zipfyi.com/developers/](https://zipfyi.com/developers/)
- **Widget builder**: [widget.zipfyi.com](https://widget.zipfyi.com)
- **npm package**: [npmjs.com/package/zipfyi-embed](https://www.npmjs.com/package/zipfyi-embed)
- **GitHub**: [github.com/fyipedia/zipfyi-embed](https://github.com/fyipedia/zipfyi-embed)

## Geo FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Geo FYI covers distance, mountains, earthquakes, and postal codes. Hub: [earthfyi.com](https://earthfyi.com).

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| DistanceFYI | [distancefyi.com](https://distancefyi.com) | 33,336 cities, Haversine distance, travel times | [npm](https://www.npmjs.com/package/distancefyi-embed) |
| MountainFYI | [mountainfyi.com](https://mountainfyi.com) | 2,000 mountains, elevation, difficulty grades | [npm](https://www.npmjs.com/package/mountainfyi-embed) |
| QuakeFYI | [quakefyi.com](https://quakefyi.com) | 20,702 earthquakes, magnitude scale, USGS alerts | [npm](https://www.npmjs.com/package/quakefyi-embed) |
| **ZipFYI** | [zipfyi.com](https://zipfyi.com) | 41,488 postal codes, demographics, median income | **[npm](https://www.npmjs.com/package/zipfyi-embed)** |

## FYIPedia Developer Tools

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| colorfyi | [PyPI](https://pypi.org/project/colorfyi/) | [npm](https://www.npmjs.com/package/@fyipedia/colorfyi) | Color conversion, WCAG contrast, harmonies — [colorfyi.com](https://colorfyi.com) |
| emojifyi | [PyPI](https://pypi.org/project/emojifyi/) | [npm](https://www.npmjs.com/package/emojifyi) | Emoji encoding & metadata for 3,953 emojis — [emojifyi.com](https://emojifyi.com) |
| unitfyi | [PyPI](https://pypi.org/project/unitfyi/) | [npm](https://www.npmjs.com/package/unitfyi) | Unit conversion, 220 units — [unitfyi.com](https://unitfyi.com) |
| timefyi | [PyPI](https://pypi.org/project/timefyi/) | [npm](https://www.npmjs.com/package/timefyi) | Timezone ops & business hours — [timefyi.com](https://timefyi.com) |
| holidayfyi | [PyPI](https://pypi.org/project/holidayfyi/) | [npm](https://www.npmjs.com/package/holidayfyi) | Holiday dates & Easter calculation — [holidayfyi.com](https://holidayfyi.com) |
| namefyi | [PyPI](https://pypi.org/project/namefyi/) | [npm](https://www.npmjs.com/package/namefyi) | Korean romanization & Five Elements — [namefyi.com](https://namefyi.com) |
| distancefyi | [PyPI](https://pypi.org/project/distancefyi/) | [npm](https://www.npmjs.com/package/distancefyi) | Haversine distance & travel times — [distancefyi.com](https://distancefyi.com) |
| fyipedia | [PyPI](https://pypi.org/project/fyipedia/) | — | Unified CLI for all FYI tools — [fyipedia.com](https://fyipedia.com) |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
