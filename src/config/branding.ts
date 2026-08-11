/**
 * Brand values needed before `astro:env` exists.
 *
 * `astro.config.mjs` generates the favicon PNG/ICO files in a build hook and
 * needs the site's initial and its theme colour to do it — but it cannot
 * import `site.config.ts`, which reads `astro:env/server` and so cannot be
 * loaded at config time. Same constraint as `site-url.ts`, same answer: keep
 * the values in a plain module both sides import, so they cannot drift.
 *
 * Change them here. `site.config.ts` reads from this file.
 */
export const SITE_NAME = 'Vincent Zhang Page';

/** Browser toolbar colour, and the fill behind the favicon letter. */
export const THEME_COLOR = '#0083fe';

// 新增：明确 favicon 文件名，避免 CDN/缓存歧义（在 public/ 中放置同名文件并提交）
export const FAVICON_SVG = '/favicon.svg';

// 如果你有自定义 logo 文件，也可显式导出以供引用
export const LOGO_IMAGE = '/logo.svg';
