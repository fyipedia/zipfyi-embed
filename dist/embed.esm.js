/* zipfyi-embed v1.0.0 | MIT | https://widget.zipfyi.com */

// src/styles/modern.ts
function getModernCSS(accent) {
  return `
    /* Modern style variant */
    .geofyi-widget {
      border-top: 3px solid ${accent};
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }
    .geofyi-widget[data-theme="dark"] {
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }
    .geofyi-header-title { color: var(--text); }
    .geofyi-img {
      border: 1px solid var(--border);
    }
  `;
}

// src/styles/clean.ts
function getCleanCSS(accent) {
  return `
    /* Clean style variant */
    .geofyi-widget {
      border: 1px solid var(--border);
      box-shadow: none;
    }
    .geofyi-header-title { color: var(--text); }
    .geofyi-img {
      background: transparent;
      border: none;
    }
    .geofyi-kv-row {
      border-bottom-style: dashed;
    }
    .geofyi-powered {
      border-top-style: dashed;
    }
  `;
}

// src/themes.ts
function getThemeCSS(accent, style = "modern") {
  const base = getBaseCSS(accent);
  const variant = style === "clean" ? getCleanCSS(accent) : getModernCSS(accent);
  return base + variant;
}
function getBaseCSS(accent) {
  return `
    :host { display: block; font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; }

    /* --- Themes --- */
    .geofyi-widget[data-theme="light"] {
      --bg: #ffffff; --text: #1e293b; --border: #e2e8f0;
      --muted: #64748b; --surface: #f8fafc; --accent: ${accent};
      --link: ${accent}; --hover: ${accent}dd;
    }
    .geofyi-widget[data-theme="dark"] {
      --bg: #1a1a1a; --text: #f3f4f6; --border: #374151;
      --muted: #9ca3af; --surface: #111827; --accent: ${accent};
      --link: ${accent}; --hover: ${accent}dd;
    }
    .geofyi-widget[data-theme="sepia"] {
      --bg: #f5f0e8; --text: #3d3529; --border: #d4c5a9;
      --muted: #8b7d6b; --surface: #ede8df; --accent: ${accent};
      --link: ${accent}; --hover: ${accent}dd;
    }

    /* --- Sizes --- */
    .geofyi-widget[data-size="compact"] { max-width: 280px; font-size: 13px; }
    .geofyi-widget[data-size="default"] { max-width: 420px; font-size: 14px; }
    .geofyi-widget[data-size="large"] { max-width: 720px; font-size: 15px; }

    /* --- Base --- */
    .geofyi-widget {
      background: var(--bg); color: var(--text); border: 1px solid var(--border);
      border-radius: 12px; padding: 16px; box-sizing: border-box;
    }
    .geofyi-widget * { box-sizing: border-box; margin: 0; padding: 0; }
    .geofyi-widget a { color: var(--link); text-decoration: none; }
    .geofyi-widget a:hover { color: var(--hover); text-decoration: underline; }

    /* --- Loading / Error --- */
    .geofyi-loading {
      display: flex; align-items: center; gap: 8px; justify-content: center;
      padding: 24px 0; color: var(--muted); font-size: 14px;
    }
    .geofyi-spinner {
      width: 16px; height: 16px; border: 2px solid var(--border);
      border-top-color: var(--accent); border-radius: 50%;
      animation: geofyi-spin 0.6s linear infinite;
    }
    @keyframes geofyi-spin { to { transform: rotate(360deg); } }
    .geofyi-error {
      text-align: center; padding: 16px 0; color: var(--muted);
    }
    .geofyi-error p { margin-bottom: 8px; }

    /* --- Header --- */
    .geofyi-header {
      display: flex; align-items: center; gap: 12px; margin-bottom: 12px;
    }
    .geofyi-img {
      width: 48px; height: 48px; border-radius: 8px; background: var(--surface);
      display: flex; align-items: center; justify-content: center;
      font-size: 24px; flex-shrink: 0;
    }
    .geofyi-header-title { font-weight: 600; font-size: 1.1em; }
    .geofyi-header-subtitle { font-size: 0.85em; color: var(--muted); margin-top: 2px; }

    /* --- Badges --- */
    .geofyi-badges { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
    .geofyi-badge {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 2px 8px; border-radius: 9999px; font-size: 0.8em; font-weight: 500;
      background: var(--surface); color: var(--text); white-space: nowrap;
    }

    /* --- Key-Value Rows --- */
    .geofyi-kv-rows { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
    .geofyi-kv-row {
      display: flex; justify-content: space-between; align-items: baseline;
      padding: 4px 0; border-bottom: 1px solid var(--border);
    }
    .geofyi-kv-row:last-child { border-bottom: none; }
    .geofyi-kv-label { color: var(--muted); font-size: 0.85em; }
    .geofyi-kv-value { font-weight: 500; text-align: right; max-width: 60%; }
    .geofyi-mono { font-family: ui-monospace, monospace; font-size: 0.9em; }

    /* --- View Link --- */
    .geofyi-view-link {
      margin: 12px 0 8px; text-align: center;
    }
    .geofyi-view-link a {
      display: inline-flex; align-items: center; gap: 4px;
      font-size: 0.85em; font-weight: 500;
    }
    .geofyi-view-link svg { width: 14px; height: 14px; }

    /* --- Powered By --- */
    .geofyi-powered {
      display: block; text-align: center; font-size: 0.75em;
      color: var(--muted); margin-top: 8px; padding-top: 8px;
      border-top: 1px solid var(--border);
    }
    .geofyi-powered a { color: var(--muted); font-weight: 500; }
    .geofyi-powered a:hover { color: var(--accent); }

    /* --- Search --- */
    .geofyi-search-input {
      width: 100%; padding: 8px 12px; border: 1px solid var(--border);
      border-radius: 8px; background: var(--surface); color: var(--text);
      font-size: 0.9em; outline: none; font-family: inherit;
    }
    .geofyi-search-input:focus { border-color: var(--accent); }
    .geofyi-search-btn {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 8px 16px; border: none; border-radius: 8px;
      background: var(--accent); color: #fff; font-size: 0.9em;
      font-weight: 500; cursor: pointer; font-family: inherit;
      margin-top: 8px; width: 100%;
    }
    .geofyi-search-btn:hover { opacity: 0.9; }
    .geofyi-search-results {
      margin-top: 8px; display: flex; flex-direction: column; gap: 4px;
    }
    .geofyi-search-item {
      display: flex; justify-content: space-between; align-items: center;
      padding: 8px; border-radius: 6px; background: var(--surface);
      text-decoration: none; color: var(--text); font-size: 0.9em;
    }
    .geofyi-search-item:hover { background: var(--border); text-decoration: none; }

    /* --- FAQ --- */
    .geofyi-faq-item {
      border-bottom: 1px solid var(--border); padding: 8px 0;
    }
    .geofyi-faq-item:last-child { border-bottom: none; }
    .geofyi-faq-q {
      font-weight: 600; cursor: pointer; display: flex;
      justify-content: space-between; align-items: center;
      font-size: 0.9em; padding: 4px 0;
    }
    .geofyi-faq-a {
      font-size: 0.85em; color: var(--muted); padding: 8px 0 4px;
      display: none;
    }
    .geofyi-faq-item.geofyi-open .geofyi-faq-a { display: block; }
    .geofyi-faq-arrow { transition: transform 0.2s; font-size: 0.8em; }
    .geofyi-faq-item.geofyi-open .geofyi-faq-arrow { transform: rotate(90deg); }

    /* --- Guide --- */
    .geofyi-guide-card {
      padding: 12px; border-radius: 8px; background: var(--surface);
      border: 1px solid var(--border); margin-bottom: 8px;
    }
    .geofyi-guide-title { font-weight: 600; font-size: 0.95em; margin-bottom: 4px; }
    .geofyi-guide-excerpt { font-size: 0.85em; color: var(--muted); }

    /* --- Glossary --- */
    .geofyi-glossary-term { font-weight: 600; font-size: 1em; margin-bottom: 4px; }
    .geofyi-glossary-def { font-size: 0.9em; color: var(--muted); line-height: 1.6; }

    /* --- Tool --- */
    .geofyi-tool-header {
      font-weight: 600; font-size: 1em; margin-bottom: 12px;
      padding-bottom: 8px; border-bottom: 1px solid var(--border);
    }
    .geofyi-tool-body { display: flex; flex-direction: column; gap: 8px; }
    .geofyi-tool-row { display: flex; flex-direction: column; gap: 4px; }
    .geofyi-tool-label { font-size: 0.8em; color: var(--muted); font-weight: 500; }
    .geofyi-tool-result { margin-top: 12px; }
    .geofyi-tool-error { color: #ef4444; font-size: 0.85em; text-align: center; }

    /* --- Magnitude Scale --- */
    .geofyi-mag-scale { display: flex; flex-direction: column; gap: 8px; }
    .geofyi-mag-row {
      display: flex; align-items: center; gap: 8px; font-size: 0.85em;
    }
    .geofyi-mag-dot { border-radius: 50%; flex-shrink: 0; }
    .geofyi-mag-label { font-weight: 600; width: 28px; font-family: ui-monospace, monospace; }
    .geofyi-mag-desc { color: var(--muted); font-size: 0.9em; }

    /* --- Copy Button --- */
    .geofyi-copy-btn {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 4px 10px; border: 1px solid var(--border); border-radius: 6px;
      background: var(--surface); color: var(--muted); font-size: 0.8em;
      cursor: pointer; font-family: inherit;
    }
    .geofyi-copy-btn:hover { border-color: var(--accent); color: var(--accent); }
    .geofyi-copy-btn svg { width: 12px; height: 12px; }
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.styleVariant || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["geofyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="geofyi-loading">
      <span class="geofyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="geofyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
function poweredByHTML(config) {
  return `<span class="geofyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
var cache = /* @__PURE__ */ new Map();
function cacheKey(url) {
  return `geofyi_embed_${url}`;
}
function getFromCache(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.ts > CACHE_TTL_MS) {
    cache.delete(key);
    return null;
  }
  return entry.data;
}
function setCache(key, data) {
  cache.set(key, { data, ts: Date.now() });
}
async function fetchAPI(baseUrl, path) {
  const url = `${baseUrl}${path}`;
  const key = cacheKey(url);
  const cached = getFromCache(key);
  if (cached !== null) return cached;
  const res = await fetch(url, {
    headers: { Accept: "application/json" }
  });
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }
  const data = await res.json();
  setCache(key, data);
  return data;
}
async function fetchList(baseUrl, path, params) {
  var _a, _b;
  const qs = params ? "?" + new URLSearchParams(params).toString() : "";
  const url = `${baseUrl}${path}${qs}`;
  const key = cacheKey(url);
  const cached = getFromCache(key);
  if (cached !== null) return cached;
  const res = await fetch(url, {
    headers: { Accept: "application/json" }
  });
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }
  const json = await res.json();
  const results = Array.isArray(json) ? json : (_b = (_a = json.results) != null ? _a : json.items) != null ? _b : [];
  setCache(key, results);
  return results;
}
async function searchAPI(baseUrl, path, query) {
  return fetchList(baseUrl, path, { q: query, limit: "10" });
}

// src/cards/shared.ts
function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}
function kvRow(label, value, mono = false) {
  if (value === "" || value === null || value === void 0) return "";
  const cls = mono ? ' class="geofyi-mono"' : "";
  return `<div class="geofyi-kv-row"><span class="geofyi-kv-label">${esc(String(label))}</span><span class="geofyi-kv-value"${cls}>${esc(String(value))}</span></div>`;
}
function badge(text, bg, color) {
  const style = bg ? ` style="background:${bg};color:${color || "#fff"}"` : "";
  return `<span class="geofyi-badge"${style}>${esc(text)}</span>`;
}
function fmtNum(n) {
  if (n === null || n === void 0) return "\u2014";
  return n.toLocaleString();
}
function fmtCurrency(n) {
  if (n === null || n === void 0) return "\u2014";
  return "$" + n.toLocaleString();
}

// src/cards/city.ts
function renderCityCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g;
  const name = String((_a = data.name) != null ? _a : "");
  const slug = String((_b = data.slug) != null ? _b : "");
  const countryName = String((_c = data.country_name) != null ? _c : "");
  const countryCode = String((_d = data.country_code) != null ? _d : "");
  const lat = Number((_e = data.latitude) != null ? _e : 0);
  const lon = Number((_f = data.longitude) != null ? _f : 0);
  const population = data.population ? fmtNum(Number(data.population)) : "\u2014";
  const timezone = String((_g = data.timezone) != null ? _g : "");
  const isCapital = Boolean(data.is_capital);
  const cityUrl = `https://${config.domain}/cities/${esc(slug)}/`;
  return `
    <div class="geofyi-header">
      <div class="geofyi-img">\u{1F30D}</div>
      <div>
        <div class="geofyi-header-title">${esc(name)}</div>
        <div class="geofyi-header-subtitle">${esc(countryName)} ${countryCode ? `(${esc(countryCode)})` : ""}</div>
      </div>
    </div>
    <div class="geofyi-badges">
      ${isCapital ? badge("Capital", "#059669", "#fff") : ""}
    </div>
    <div class="geofyi-kv-rows">
      ${kvRow("Population", population)}
      ${kvRow("Timezone", timezone)}
      ${kvRow("Coordinates", `${lat.toFixed(4)}, ${lon.toFixed(4)}`, true)}
    </div>
    <div class="geofyi-view-link"><a href="${cityUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/elevation.ts
var METERS_TO_FEET = 3.28084;
function metersToFeet(m) {
  return Math.round(m * METERS_TO_FEET);
}
function formatElevation(meters) {
  return `${meters.toLocaleString()} m (${metersToFeet(meters).toLocaleString()} ft)`;
}
function classifyDifficulty(grade) {
  switch (grade) {
    case 1:
      return { grade: 1, label: "Easy", description: "Hiking trail, no technical skills", color: "#22c55e", bgColor: "#dcfce7", textColor: "#166534" };
    case 2:
      return { grade: 2, label: "Moderate", description: "Scrambling, basic fitness", color: "#3b82f6", bgColor: "#dbeafe", textColor: "#1e40af" };
    case 3:
      return { grade: 3, label: "Difficult", description: "Mountaineering experience needed", color: "#eab308", bgColor: "#fef9c3", textColor: "#854d0e" };
    case 4:
      return { grade: 4, label: "Very Difficult", description: "Technical climbing, ropes", color: "#f97316", bgColor: "#ffedd5", textColor: "#9a3412" };
    case 5:
      return { grade: 5, label: "Extreme", description: "Expert only, extreme altitude", color: "#ef4444", bgColor: "#fee2e2", textColor: "#991b1b" };
    default:
      return { grade: 0, label: "Unknown", description: "Not classified", color: "#6b7280", bgColor: "#f3f4f6", textColor: "#374151" };
  }
}
function mountainTypeLabel(type) {
  const labels = {
    fold_mountain: "Fold Mountain",
    volcanic: "Volcanic",
    dome_mountain: "Dome Mountain",
    block_mountain: "Block Mountain",
    plateau_mountain: "Plateau Mountain",
    erosion_mountain: "Erosion Mountain",
    residual_mountain: "Residual Mountain"
  };
  return labels[type] || type.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// src/cards/mountain.ts
function renderMountainCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const name = String((_a = data.name) != null ? _a : "");
  const slug = String((_b = data.slug) != null ? _b : "");
  const elevation = Number((_c = data.elevation) != null ? _c : 0);
  const prominence = data.prominence ? Number(data.prominence) : null;
  const countryName = String((_d = data.country_name) != null ? _d : "");
  const rangeName = String((_e = data.range_name) != null ? _e : "");
  const difficultyGrade = Number((_f = data.difficulty_grade) != null ? _f : 0);
  const mountainType = String((_g = data.mountain_type) != null ? _g : "");
  const isSevenSummit = Boolean(data.is_seven_summit);
  const isEightThousander = Boolean(data.is_eight_thousander);
  const isVolcanic = Boolean(data.is_volcanic);
  const routeCount = Number((_h = data.route_count) != null ? _h : 0);
  const diff = classifyDifficulty(difficultyGrade);
  const url = `https://${config.domain}/mountains/${esc(slug)}/`;
  return `
    <div class="geofyi-header">
      <div class="geofyi-img">\u26F0\uFE0F</div>
      <div>
        <div class="geofyi-header-title">${esc(name)}</div>
        <div class="geofyi-header-subtitle">${esc(rangeName)}${countryName ? `, ${esc(countryName)}` : ""}</div>
      </div>
    </div>
    <div class="geofyi-badges">
      ${badge(diff.label, diff.bgColor, diff.textColor)}
      ${isEightThousander ? badge("8000er", "#991b1b", "#fff") : ""}
      ${isSevenSummit ? badge("Seven Summit", "#4338CA", "#fff") : ""}
      ${isVolcanic ? badge("Volcanic", "#DC2626", "#fff") : ""}
    </div>
    <div class="geofyi-kv-rows">
      ${kvRow("Elevation", formatElevation(elevation))}
      ${prominence ? kvRow("Prominence", formatElevation(prominence)) : ""}
      ${kvRow("Type", mountainTypeLabel(mountainType))}
      ${kvRow("Difficulty", `Grade ${difficultyGrade} \u2014 ${diff.label}`)}
      ${routeCount > 0 ? kvRow("Routes", String(routeCount)) : ""}
    </div>
    <div class="geofyi-view-link"><a href="${url}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/magnitude.ts
function classifyMagnitude(mag) {
  if (mag < 2) return { label: "Micro", description: "Not felt", color: "#6b7280", bgColor: "#f3f4f6", textColor: "#374151", level: "micro" };
  if (mag < 3) return { label: "Minor", description: "Rarely felt", color: "#3b82f6", bgColor: "#dbeafe", textColor: "#1e40af", level: "minor" };
  if (mag < 4) return { label: "Light", description: "Often felt, minor damage", color: "#22c55e", bgColor: "#dcfce7", textColor: "#166534", level: "light" };
  if (mag < 5) return { label: "Moderate", description: "May cause damage", color: "#eab308", bgColor: "#fef9c3", textColor: "#854d0e", level: "moderate" };
  if (mag < 6) return { label: "Strong", description: "Damaging", color: "#f97316", bgColor: "#ffedd5", textColor: "#9a3412", level: "strong" };
  if (mag < 7) return { label: "Major", description: "Serious damage", color: "#ef4444", bgColor: "#fee2e2", textColor: "#991b1b", level: "major" };
  return { label: "Great", description: "Devastating", color: "#991b1b", bgColor: "#fecaca", textColor: "#7f1d1d", level: "great" };
}
function alertColor(level) {
  switch (level == null ? void 0 : level.toLowerCase()) {
    case "green":
      return { bg: "#dcfce7", text: "#166534", label: "Green" };
    case "yellow":
      return { bg: "#fef9c3", text: "#854d0e", label: "Yellow" };
    case "orange":
      return { bg: "#ffedd5", text: "#9a3412", label: "Orange" };
    case "red":
      return { bg: "#fee2e2", text: "#991b1b", label: "Red" };
    default:
      return { bg: "#f3f4f6", text: "#374151", label: "Unknown" };
  }
}
function formatDepth(km) {
  if (km < 70) return `${km.toFixed(1)} km (shallow)`;
  if (km < 300) return `${km.toFixed(1)} km (intermediate)`;
  return `${km.toFixed(1)} km (deep)`;
}
function timeAgo(isoDate) {
  const diff = Date.now() - new Date(isoDate).getTime();
  const mins = Math.floor(diff / 6e4);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

// src/cards/earthquake.ts
function renderEarthquakeCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const slug = String((_a = data.slug) != null ? _a : "");
  const magnitude = Number((_b = data.magnitude) != null ? _b : 0);
  const depthKm = Number((_c = data.depth_km) != null ? _c : 0);
  const place = String((_d = data.place_description) != null ? _d : "");
  const occurredAt = String((_e = data.occurred_at) != null ? _e : "");
  const tsunamiFlag = Boolean(data.tsunami_flag);
  const alertLevel = String((_f = data.alert_level) != null ? _f : "");
  const feltCount = data.felt_count ? Number(data.felt_count) : null;
  const significance = data.significance ? Number(data.significance) : null;
  const magType = String((_g = data.magnitude_type) != null ? _g : "ml").toUpperCase();
  const countryName = String((_h = data.country_name) != null ? _h : "");
  const magInfo = classifyMagnitude(magnitude);
  const alert = alertLevel ? alertColor(alertLevel) : null;
  const url = `https://${config.domain}/earthquakes/${esc(slug)}/`;
  return `
    <div class="geofyi-header">
      <div class="geofyi-img" style="font-size:28px">\u{1F30B}</div>
      <div>
        <div class="geofyi-header-title">M${magnitude.toFixed(1)} Earthquake</div>
        <div class="geofyi-header-subtitle">${esc(place)}</div>
      </div>
    </div>
    <div class="geofyi-badges">
      ${badge(`M${magnitude.toFixed(1)} ${magInfo.label}`, magInfo.bgColor, magInfo.textColor)}
      ${tsunamiFlag ? badge("Tsunami Warning", "#991b1b", "#fff") : ""}
      ${alert ? badge(`Alert: ${alert.label}`, alert.bg, alert.text) : ""}
    </div>
    <div class="geofyi-kv-rows">
      ${kvRow("Location", place)}
      ${countryName ? kvRow("Country", countryName) : ""}
      ${kvRow("Depth", formatDepth(depthKm))}
      ${kvRow("Magnitude Type", magType)}
      ${occurredAt ? kvRow("Time", timeAgo(occurredAt)) : ""}
      ${feltCount ? kvRow("Felt Reports", String(feltCount)) : ""}
      ${significance ? kvRow("Significance", String(significance)) : ""}
    </div>
    <div class="geofyi-view-link"><a href="${url}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/cards/postal.ts
function renderPostalCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const code = String((_a = data.code) != null ? _a : "");
  const cityName = String((_b = data.city_name) != null ? _b : "");
  const stateName = String((_c = data.state_name) != null ? _c : "");
  const stateCode = String((_d = data.state_code) != null ? _d : "");
  const countryName = String((_e = data.country_name) != null ? _e : "");
  const countryCode = String((_f = data.country_code) != null ? _f : "").toLowerCase();
  const population = data.population ? fmtNum(Number(data.population)) : null;
  const medianIncome = data.median_household_income ? fmtCurrency(Number(data.median_household_income)) : null;
  const medianHome = data.median_home_value ? fmtCurrency(Number(data.median_home_value)) : null;
  const area = data.land_area_sq_miles ? `${Number(data.land_area_sq_miles).toFixed(1)} sq mi` : null;
  const zipType = String((_g = data.zipcode_type) != null ? _g : "");
  const timezone = String((_h = data.timezone) != null ? _h : "");
  const url = `https://${config.domain}/${countryCode}/${stateCode.toLowerCase()}/${code}/`;
  return `
    <div class="geofyi-header">
      <div class="geofyi-img">\u{1F4EE}</div>
      <div>
        <div class="geofyi-header-title">${esc(code)}</div>
        <div class="geofyi-header-subtitle">${esc(cityName)}, ${esc(stateCode)} \u2014 ${esc(countryName)}</div>
      </div>
    </div>
    <div class="geofyi-badges">
      ${zipType ? badge(zipType, "#3b82f6", "#fff") : ""}
    </div>
    <div class="geofyi-kv-rows">
      ${kvRow("City", cityName)}
      ${kvRow("State", `${stateName} (${stateCode})`)}
      ${kvRow("Country", countryName)}
      ${population ? kvRow("Population", population) : ""}
      ${medianIncome ? kvRow("Median Income", medianIncome) : ""}
      ${medianHome ? kvRow("Median Home Value", medianHome) : ""}
      ${area ? kvRow("Land Area", area) : ""}
      ${kvRow("Timezone", timezone)}
    </div>
    <div class="geofyi-view-link"><a href="${url}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/widgets/entity.ts
var CARD_RENDERERS = {
  distancefyi: renderCityCard,
  mountainfyi: renderMountainCard,
  quakefyi: renderEarthquakeCard,
  zipfyi: renderPostalCard
};
async function initEntity(el, config) {
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "geofyi-entity");
  renderLoading(root);
  const slug = el.dataset.slug || "";
  if (!slug) {
    renderError(root, "Missing data-slug attribute", config);
    return;
  }
  try {
    const apiPath = `${config.entitySlug}/${slug}/`;
    const data = await fetchAPI(config.apiBase, apiPath);
    const renderer = CARD_RENDERERS[config.site];
    if (renderer) {
      root.innerHTML = renderer(data, config);
    } else {
      renderError(root, `Unknown site: ${config.site}`, config);
    }
  } catch (e) {
    renderError(root, `Could not load ${config.entityName.toLowerCase()}`, config);
  }
}

// src/rich-snippets.ts
var SNIPPET_ATTR = "data-geofyi-snippet";
function alreadyInjected(type) {
  return document.querySelector(`script[${SNIPPET_ATTR}="${type}"]`) !== null;
}
function inject(type, jsonLd) {
  if (alreadyInjected(type)) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute(SNIPPET_ATTR, type);
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    ...jsonLd
  });
  document.head.appendChild(script);
}
function injectDefinedTerm(name, definition, url) {
  inject("DefinedTerm", {
    "@type": "DefinedTerm",
    name,
    description: definition,
    url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Geo FYI Glossary"
    }
  });
}
function injectFAQPage(faqs) {
  inject("FAQPage", {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer
      }
    }))
  });
}
function shouldSkipSnippet(el) {
  return el.dataset.noSnippet === "true";
}

// src/widgets/glossary.ts
async function initGlossary(el, config) {
  var _a, _b, _c, _d;
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "geofyi-glossary");
  renderLoading(root);
  const slug = el.dataset.slug || "";
  if (!slug) {
    renderError(root, "Missing data-slug attribute", config);
    return;
  }
  try {
    const data = await fetchAPI(config.apiBase, `glossary/${slug}/`);
    const term = String((_b = (_a = data.term) != null ? _a : data.name) != null ? _b : "");
    const definition = String((_d = (_c = data.definition) != null ? _c : data.description) != null ? _d : "");
    const url = `https://${config.domain}/glossary/${esc(slug)}/`;
    root.innerHTML = `
      <div class="geofyi-glossary-term">${esc(term)}</div>
      <div class="geofyi-glossary-def">${esc(definition)}</div>
      <div class="geofyi-view-link"><a href="${url}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
      ${poweredByHTML(config)}
    `;
    if (!shouldSkipSnippet(el)) {
      injectDefinedTerm(term, definition, url);
    }
  } catch (e) {
    renderError(root, "Could not load glossary term", config);
  }
}

// src/widgets/faq.ts
async function initFAQ(el, config) {
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "geofyi-faq");
  renderLoading(root);
  const limit = el.dataset.limit || "5";
  try {
    const faqs = await fetchList(config.apiBase, "faqs/", { limit });
    if (faqs.length === 0) {
      renderError(root, "No FAQs available", config);
      return;
    }
    const faqItems = faqs.map((faq, i) => {
      var _a, _b;
      const question = String((_a = faq.question) != null ? _a : "");
      const answer = String((_b = faq.answer) != null ? _b : "");
      return `
        <div class="geofyi-faq-item" data-idx="${i}">
          <div class="geofyi-faq-q">
            <span>${esc(question)}</span>
            <span class="geofyi-faq-arrow">\u25B6</span>
          </div>
          <div class="geofyi-faq-a">${esc(answer)}</div>
        </div>
      `;
    }).join("");
    root.innerHTML = `
      <div class="geofyi-tool-header">Frequently Asked Questions</div>
      ${faqItems}
      ${poweredByHTML(config)}
    `;
    root.querySelectorAll(".geofyi-faq-q").forEach((q) => {
      q.addEventListener("click", () => {
        const item = q.parentElement;
        item.classList.toggle("geofyi-open");
      });
    });
    if (!shouldSkipSnippet(el)) {
      injectFAQPage(faqs.map((f) => {
        var _a, _b;
        return {
          question: String((_a = f.question) != null ? _a : ""),
          answer: String((_b = f.answer) != null ? _b : "")
        };
      }));
    }
  } catch (e) {
    renderError(root, "Could not load FAQs", config);
  }
}

// src/widgets/search.ts
function initSearch(el, config) {
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "geofyi-search");
  root.innerHTML = `
    <div class="geofyi-tool-header">Search ${esc(config.name)}</div>
    <input class="geofyi-search-input" placeholder="Search ${config.entityName.toLowerCase()}\u2026" />
    <div class="geofyi-search-results"></div>
    ${poweredByHTML(config)}
  `;
  const input = root.querySelector(".geofyi-search-input");
  const results = root.querySelector(".geofyi-search-results");
  let debounce;
  input.addEventListener("input", () => {
    clearTimeout(debounce);
    const query = input.value.trim();
    if (query.length < 2) {
      results.innerHTML = "";
      return;
    }
    debounce = setTimeout(async () => {
      try {
        const items = await searchAPI(
          config.apiBase,
          "search/",
          query
        );
        if (items.length === 0) {
          results.innerHTML = `<div class="geofyi-search-item" style="justify-content:center;color:var(--muted)">No results found</div>`;
          return;
        }
        results.innerHTML = items.map((item) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i;
          const name = String((_d = (_c = (_b = (_a = item.name) != null ? _a : item.title) != null ? _b : item.term) != null ? _c : item.code) != null ? _d : "");
          const subtitle = String((_g = (_f = (_e = item.country_name) != null ? _e : item.description) != null ? _f : item.state_name) != null ? _g : "");
          const slug = String((_i = (_h = item.slug) != null ? _h : item.code) != null ? _i : "");
          const url = `https://${config.domain}/${config.entitySlug}/${slug}/`;
          return `
            <a class="geofyi-search-item" href="${url}" target="_blank" rel="noopener">
              <span>${esc(name)}${subtitle ? ` <small style="color:var(--muted)">${esc(subtitle)}</small>` : ""}</span>
              ${externalLinkIcon}
            </a>
          `;
        }).join("");
      } catch (e) {
        results.innerHTML = `<div class="geofyi-search-item" style="justify-content:center;color:var(--muted)">Search error</div>`;
      }
    }, 300);
  });
}

// src/_entry_zipfyi.ts
async function processElement(el, config) {
  if (el.shadowRoot) return;
  const type = el.getAttribute(config.attribute) || "";
  switch (type) {
    case "entity":
    case "zip-card":
      await initEntity(el, config);
      break;
    case "glossary":
      await initGlossary(el, config);
      break;
    case "faq":
      await initFAQ(el, config);
      break;
    case "search":
      initSearch(el, config);
      break;
    default:
      console.warn(`[zipfyi-embed] Unknown widget type: ${type}`);
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => {
    if (el.shadowRoot) return;
    lazyInit(el, () => {
      if (!el.shadowRoot) processElement(el, config);
    });
  });
}
(function bootstrap() {
  const config = '{"site":"zipfyi","name":"ZipFYI","domain":"zipfyi.com","accent":"#EA580C","attribute":"data-zipfyi","apiBase":"https://zipfyi.com/api/v1/","searchPath":"/search/","entityName":"ZIP Codes","entitySlug":"postal-codes"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) {
          lazyInit(el, () => {
            if (!el.shadowRoot) processElement(el, config);
          });
        }
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => {
          if (!child.shadowRoot) lazyInit(child, () => {
            if (!child.shadowRoot) processElement(child, config);
          });
        });
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"zipfyi","name":"ZipFYI","domain":"zipfyi.com","accent":"#EA580C","attribute":"data-zipfyi","apiBase":"https://zipfyi.com/api/v1/","searchPath":"/search/","entityName":"ZIP Codes","entitySlug":"postal-codes"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"zipfyi","name":"ZipFYI","domain":"zipfyi.com","accent":"#EA580C","attribute":"data-zipfyi","apiBase":"https://zipfyi.com/api/v1/","searchPath":"/search/","entityName":"ZIP Codes","entitySlug":"postal-codes"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"zipfyi","name":"ZipFYI","domain":"zipfyi.com","accent":"#EA580C","attribute":"data-zipfyi","apiBase":"https://zipfyi.com/api/v1/","searchPath":"/search/","entityName":"ZIP Codes","entitySlug":"postal-codes"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.style = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"zipfyi","name":"ZipFYI","domain":"zipfyi.com","accent":"#EA580C","attribute":"data-zipfyi","apiBase":"https://zipfyi.com/api/v1/","searchPath":"/search/","entityName":"ZIP Codes","entitySlug":"postal-codes"}'.site;
  const defs = [
    [`${site}-entity`, initEntity, ["slug"]],
    [`${site}-glossary`, initGlossary, ["slug", "letter"]],
    [`${site}-search`, initSearch, ["placeholder", "query"]],
    [`${site}-faq`, initFAQ, ["slug", "category"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();
