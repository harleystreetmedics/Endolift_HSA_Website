#!/usr/bin/env bash
# Build the static site and upload it to the droplet.
# Usage: DROPLET=user@your-droplet-ip ./deploy/deploy.sh
set -euo pipefail
: "${DROPLET:?Set DROPLET=user@host}"
npm run build
rsync -avz --delete out/ "$DROPLET:/var/www/endolift/"
echo "Uploaded. Visit https://endolift.harleystreetaesthetic.co.uk"
