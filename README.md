# CALIQUA-BORMANN public website

Static public site for [caliqua-bormann.de](https://www.caliqua-bormann.de): Sanitär, Heizung, Klima, Kälte, Raumlufttechnik im Großraum München.

Preview on GitHub Pages: [lwccn.github.io/caliqua](https://lwccn.github.io/caliqua/).

The employee intranet stays on Contao (`intranet.caliqua-bormann.de`). See [docs/intranet-and-dns.md](docs/intranet-and-dns.md).

## Local

```bash
npm install
npm run dev
```

Build: `npm run build` → `dist/`.

## Content the office can edit

- Jobs: `src/data/jobs.ts`
- Certificates: replace files in `public/pdfs/` and labels in `src/data/certificates.ts`
- Contacts: `src/data/contacts.ts`

## Brand

Orange `#ff8a00`, charcoal text, self-hosted Open Sans, logo `public/images/logo.png`.
