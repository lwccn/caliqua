/** Prefix an internal path with Astro `base` (GitHub Pages is served at /caliqua/). */
export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path;
  const hashIdx = path.indexOf("#");
  const hash = hashIdx >= 0 ? path.slice(hashIdx) : "";
  const pathname = hashIdx >= 0 ? path.slice(0, hashIdx) : path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const suffix = pathname === "/" || pathname === "" ? "" : pathname;
  const url = `${base}${suffix}` || "/";
  return `${url}${hash}`;
}

export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let p = pathname.replace(/\/$/, "") || "/";
  if (base && (p === base || p.startsWith(`${base}/`))) {
    p = p.slice(base.length) || "/";
  }
  return p;
}

export function absoluteUrl(path: string): string {
  const origin = String(import.meta.env.SITE || "https://lwccn.github.io").replace(/\/$/, "");
  return `${origin}${withBase(path)}`;
}
