# Deployment (DigitalOcean droplet)

> **Status: NOT deployed.** Nothing has been published and no DNS has been changed. Wait for approval and the final subdomain before doing any of this.

The site is a static export: `npm run build` creates the `out/` folder, which is plain HTML, CSS, JS and images. On the droplet, nginx serves that folder. No Node.js process is needed on the server.

## 1. Build
On any machine with Node 20.9+ (22 recommended):
```
npm install
npm run build
```
Set `NEXT_PUBLIC_SITE_URL` first if the subdomain isn't `endolift.harleystreetaesthetic.co.uk` (copy `.env.example` to `.env.local`). Tracking IDs go in the same file.

## 2. Prepare the droplet (once)
SSH into the droplet (it already runs nginx for the main site):
```
sudo mkdir -p /var/www/endolift
sudo chown $USER:$USER /var/www/endolift
```
Copy the two nginx files from `deploy/`:
- `deploy/endolift-headers.conf` → `/etc/nginx/snippets/endolift-headers.conf`
- `deploy/nginx-endolift.conf` → `/etc/nginx/sites-available/endolift`, then
```
sudo ln -s /etc/nginx/sites-available/endolift /etc/nginx/sites-enabled/endolift
sudo nginx -t && sudo systemctl reload nginx
```
This adds a new server block for the subdomain only. The main site's config is not touched.

## 3. Upload
From your machine: `DROPLET=user@<droplet-ip> ./deploy/deploy.sh` (uses rsync).
On Windows without rsync, use `scp -r out/* user@<droplet-ip>:/var/www/endolift/` or WinSCP/FileZilla, uploading the **contents** of `out/`.

## 4. DNS
At the DNS host for `harleystreetaesthetic.co.uk` (DigitalOcean Networking → Domains if the domain is managed there), add one record:

| Type | Hostname | Value | TTL |
|---|---|---|---|
| `A` | `endolift` | the droplet's public IPv4 address (the same one the main site uses) | 3600 |

Don't change any other records. Check with `nslookup endolift.harleystreetaesthetic.co.uk`.

## 5. HTTPS
Once DNS resolves:
```
sudo certbot --nginx -d endolift.harleystreetaesthetic.co.uk
```
Choose the redirect option so HTTP goes to HTTPS. Certbot renews automatically. Check `https://endolift.harleystreetaesthetic.co.uk` shows a padlock.

## 6. Booking calendar
Bookings go through the clinic's calendar (https://link.harleystreetaesthetic.co.uk/widget/bookings/aesthetic-consultant-1), embedded on the home, London, Glasgow and Book pages. Nothing to set up on the server. To change it, edit `BRAND.bookingUrl` in `src/content/site.ts`.

## 7. After launch
- Google Search Console: add the subdomain and submit `/sitemap.xml`.
- Test with Google's Rich Results Test.
- Link to the site from the main site's Endomax Lift page.

## Updating the site
Make changes, run `npm run build`, and upload `out/` again (step 3).

## Rollback
Keep a copy of the previous `out/` folder and upload it again. To take the site offline, remove the `endolift` symlink from `sites-enabled` and reload nginx.
