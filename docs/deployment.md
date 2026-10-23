# Deployment

> **Status: NOT deployed.** Nothing has been published and no DNS has been changed. Wait for approval and the final subdomain before doing any of this.

The site is a static export (`out/`), so any static host works. Netlify is preferred because it matches the other sites and provides form handling.

## A. Netlify (preferred)

### 1. Put the code in Git
1. Create a private GitHub repo (e.g. `harley-street/endomax-lift-site`).
2. `git remote add origin git@github.com:<org>/<repo>.git && git push -u origin main`

### 2. Create the site
1. Netlify → **Add new site → Import an existing project → GitHub** → pick the repo.
2. Build settings are read from `netlify.toml` (build `npm run build`, publish `out`, Node 22). Leave them as detected.
3. **Environment variables** (Site configuration → Environment variables), from `.env.example`:
   - `NEXT_PUBLIC_SITE_URL` = `https://endolift.harleystreetaesthetic.co.uk` (or the final subdomain)
   - `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_META_PIXEL_ID`, if confirmed
4. **Deploy site.** Check the `https://<random-name>.netlify.app` preview.

### 3. Turn on the enquiry form
1. Netlify → **Forms → Enable form detection**, then trigger a new deploy (Deploys → Trigger deploy → Clear cache and deploy).
2. Confirm a form named **`enquiry`** appears under Forms.
3. **Forms → Form notifications → Add notification → Email notification**: event "New form submission", form `enquiry`, email = the enquiry inbox **[TBC]**. For a CRM, use an **Outgoing webhook** to the CRM's endpoint instead, or as well.
4. Optional: in Forms settings, enable **spam filtering**. reCAPTCHA can be switched on by uncommenting the `data-netlify-recaptcha` line in `src/components/EnquiryForm.tsx`.
5. Submit a test enquiry on the live preview and confirm the email arrives.
6. Data protection: Netlify stores submissions. Set a retention routine and record Netlify as a processor in the privacy policy (already drafted).

### 4. Add the custom domain
1. Netlify → **Domain management → Add a domain** → `endolift.harleystreetaesthetic.co.uk` → **Verify** → **Add domain**.
2. Netlify will show "Awaiting External DNS". Add this record **at the registrar / DNS host for `harleystreetaesthetic.co.uk`**:

| Type | Host / Name | Value / Target | TTL |
|---|---|---|---|
| `CNAME` | `endolift` | `<your-site-name>.netlify.app` | 3600 (or "Auto") |

   - Use the exact `*.netlify.app` name shown in Netlify (Site configuration → Site details → Site name). You can rename it first, e.g. `hsa-endomax-lift` → `hsa-endomax-lift.netlify.app`.
   - Some registrars want the host as `endolift` and others as `endolift.harleystreetaesthetic.co.uk.`. Both mean the same.
   - Don't change any other records (the main site's A/CNAME and MX email records must stay as they are).
   - If the domain's DNS is already managed **in Netlify DNS**, Netlify adds this record itself. Check under Domains → harleystreetaesthetic.co.uk.
   - If the zone has **CAA** records, make sure one allows `letsencrypt.org`.
3. Check propagation: `dig +short endolift.harleystreetaesthetic.co.uk CNAME` should return the `netlify.app` name (usually minutes, can take up to 24 hours).

### 5. Confirm SSL/HTTPS
1. Netlify → Domain management → **HTTPS**: it should say "Your site has HTTPS enabled" with a Let's Encrypt certificate. If it says "Waiting on DNS propagation", click **Verify DNS configuration** once the CNAME resolves, then **Provision certificate**.
2. Turn on **Force HTTPS** if it is shown.
3. Visit `http://endolift.harleystreetaesthetic.co.uk`: it should redirect to `https://`, and the padlock should show a valid certificate.
4. Optional: `curl -I https://endolift.harleystreetaesthetic.co.uk` should return `HTTP/2 200` with `strict-transport-security`.
5. Uncomment the `*.netlify.app → custom domain` redirect in `netlify.toml` and redeploy, so the preview URL isn't indexed.

### 6. After launch
- Google Search Console: add the subdomain property and submit `https://endolift.harleystreetaesthetic.co.uk/sitemap.xml`.
- Test with Google's Rich Results Test (FAQ, breadcrumbs, clinics).
- Add a link from the main site's Endomax Lift page to the microsite (and decide on canonical/duplicate content between the two; see the review checklist).

## B. Vercel (alternative)
1. Vercel → **Add New → Project** → import the repo. Framework: Next.js. Build `npm run build`. Output directory `out`.
2. Add the same environment variables.
3. Deploy, then **Settings → Domains → Add** `endolift.harleystreetaesthetic.co.uk`.
4. At the registrar add **`CNAME endolift → <the value Vercel shows>`**. This is usually `cname.vercel-dns.com`, or a project-specific `*.vercel-dns-0xx.com` value. Use exactly what the dashboard displays.
5. SSL is issued automatically once DNS verifies (the domain shows "Valid Configuration").
6. **Forms:** Netlify Forms won't work on Vercel. Point `EnquiryForm.tsx` at another endpoint (e.g. Formspree, or the CRM's API) and remove `public/__forms.html`.

## Rollback
Netlify → Deploys → pick a previous deploy → **Publish deploy**. To take the site offline, remove the CNAME record or the custom domain in Netlify.
