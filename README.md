# UNCOVr media website

Static site. No build step. The `public/` folder is the website.

- `public/index.html`: home
- `public/work/<name>/index.html`: case studies (served at `/work/<name>/`)
- `public/assets/`: CSS, JS, images, share images
- `public/sitemap.xml`, `robots.txt`, `llms.txt`: search and AI crawler files
- `wrangler.jsonc`: Cloudflare deploy settings
