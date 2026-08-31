# Hosting, DNS and intranet cutover

The public marketing site is static (Astro). The employee intranet and whistleblower area stay on the existing Contao/PHP stack.

## Target hostnames

| Host | Points to | Notes |
| --- | --- | --- |
| `www.caliqua-bormann.de` | New static host (Hetzner static, Netlify, Vercel, or nginx `dist/`) | Canonical public site |
| `caliqua-bormann.de` | 301 → `https://www.caliqua-bormann.de` | One host, HTTPS only |
| `intranet.caliqua-bormann.de` | Existing Contao/PHP server | Member login + whistleblower. Do not replace in v1 |

## DNS (example)

1. Leave the current A/AAAA (or the hoster’s target) on a **new** name such as `cms.caliqua-bormann.de` or keep it only on `intranet`.
2. Create `intranet.caliqua-bormann.de` as A/AAAA (or CNAME) to the PHP server. Issue a TLS certificate for that name.
3. Point `www` and apex to the static host. Enable HTTPS there.
4. After the public cutover, Contao no longer serves `/` for the world. It only answers on `intranet`.

If the PHP host cannot do two vhosts, put nginx in front:

```nginx
server {
  server_name www.caliqua-bormann.de;
  root /var/www/caliqua-public/dist;
  include /etc/nginx/mime.types;
  try_files $uri $uri.html $uri/ =404;
  # paste 301 map from public/_redirects (converted) or use a map file
}

server {
  server_name intranet.caliqua-bormann.de;
  # existing Contao PHP-FPM / Apache proxy
}
```

## Public login

The Contao `tl_login` box is gone from the public header. Footer link **Mitarbeiter** goes to `https://intranet.caliqua-bormann.de`.

Redirects for old Contao URLs and `/index.php/login-293.html` are in `public/_redirects` (Netlify) and `vercel.json`. They are **not** generated as HTML folders in `dist/`, because `kundendienst.html` would collide with the real `/kundendienst` page. `src/data/redirects.ts` is the source list for those maps.

## Certificates

PDFs live in `public/pdfs/`. Replace the file in place when a Bescheinigung expires; filenames are listed in `src/data/certificates.ts`. No CMS required.

## Not in v1

Analytics, cookie CMP, contact form backend, Google Maps embed, site search, blog, intranet rebuild.

## Legal

Impressum facts are copied from the live site (HRA 14921, Frankfurter Ring 222). Datenschutz is rewritten for the static stack and **must be lawyer/DSB reviewed** before go-live.
