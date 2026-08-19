# UNCOVr media — new site: SEO & AIO notes

This is a new, multi-page build using the same verbiage as the current
uncovrmedia.com, with the same fonts (Montserrat headings / Libre Baskerville
body) and the same color palette (dark backgrounds, amber `#f9a828` accent,
teal `#07617d` links). It's restructured and optimized for search engines and
AI answer engines (ChatGPT, Perplexity, Google AI Overviews, etc.).

## Site structure

Six pages instead of one scrolling page, each targeting a different search intent:

- `index.html` — brand overview, condensed pitch, links out to everything else
- `about.html` — company story + leadership bios (Mike LaBella, Andrea Giancontieri)
- `services.html` — the four principles, full detail
- `works.html` — all four case studies in full (Kabbage, Grasshopper, Society of Grownups, Atrius Health)
- `faq.html` — 8 new Q&A pairs written from the existing content (not on the original site — see note below)
- `contact.html` — contact details + form

Why multi-page: each page gets its own indexable URL that can rank for its
own terms ("media planning services," "media agency case studies," etc.)
instead of competing with itself on one URL. It also gives AI answer engines
a specific page to cite instead of a fragment of a longer scroll.

## What's optimized

**On-page SEO**
- Unique `<title>` and meta description per page, written for click-through, not stuffed with keywords
- Canonical URL on every page
- Single `<h1>` per page, logical heading hierarchy below it
- Descriptive internal links between pages (not just "click here")
- Descriptive `alt` text on every image
- Open Graph + Twitter Card tags per page (so links posted on social/Slack/etc. preview correctly)

**Structured data (JSON-LD)** — this is what powers Google rich results and gives AI engines clean, unambiguous facts to cite:
- `ProfessionalService` (Organization) on every page — name, address, phone, email, founding date, service area, founders
- `Person` schema for Mike and Andrea on the About page
- `Service` schema on the Services page
- `ItemList` of case studies on the Works page
- `FAQPage` schema on the FAQ page (eligible for Google's expandable FAQ rich results)
- `BreadcrumbList` on every subpage

**AIO (AI answer engine optimization)**
- `llms.txt` at the site root — an emerging convention (like robots.txt, but for LLMs) that gives AI crawlers a concise, structured summary of who UNCOVr is, what it does, and where to find more
- `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, and Google-Extended, so the site can be crawled and cited by AI tools (some sites block these by default without realizing it)
- FAQ content written as direct, quotable answers to the exact questions people ask AI assistants ("What does UNCOVr Media do?", "Where is UNCOVr Media located?")
- Consistent, unambiguous facts (address, phone, founding year, leadership) repeated identically across the schema, the FAQ, and the visible page copy — AI systems trust facts more when they're consistent everywhere they appear

**Technical SEO**
- `sitemap.xml` listing all 6 pages
- Custom `404.html` (avoids soft-404 issues)
- Fast static HTML/CSS — no framework, no render-blocking JS for content
- Mobile-first responsive layout with a proper mobile nav
- Cache headers (`_headers`) for Cloudflare Pages

## One content addition

The original site had no FAQ section — just the sections you already had. I
added `faq.html` because FAQ content is one of the highest-leverage things
for both Google rich results and AI citability, but it's new, not pulled
from the existing site. Every answer is grounded in facts already on the
site (nothing invented). Delete the page or edit the questions freely.

## Images

Same approach as before — this uses the same image filenames/paths as your
current site, so you can drop them straight in:

| From your current site | Goes in this project at |
|---|---|
| `/logo.png` | `images/logo.png` |
| `/favicon.ico` | `favicon.ico` |
| `/images/hero-bg.jpg` | `images/hero-bg.jpg` |
| `/images/services-bg.jpg` | `images/services-bg.jpg` |
| `/images/contact-bg.jpg` | `images/contact-bg.jpg` |
| `/images/avatars/user-03.jpg` (Mike) | `images/avatars/user-03.jpg` |
| `/images/avatars/user-02.jpg` (Andrea) | `images/avatars/user-02.jpg` |
| `/images/portfolio/shutterbug.jpg` (Kabbage) | `images/portfolio/shutterbug.jpg` |
| `/images/portfolio/yellowwall.jpg` (Grasshopper) | `images/portfolio/yellowwall.jpg` |
| `/images/portfolio/architecture.jpg` (Society of Grownups) | `images/portfolio/architecture.jpg` |
| `/images/portfolio/minimalismo.jpg` (Atrius Health) | `images/portfolio/minimalismo.jpg` |
| `/images/clients/mozilla.png` (Kabbage logo) | `images/clients/mozilla.png` |
| `/images/clients/bower.png` (Grasshopper logo) | `images/clients/bower.png` |
| `/images/clients/codepen.png` (MassMutual logo) | `images/clients/codepen.png` |
| `/images/clients/envato.png` (Atrius Health logo) | `images/clients/envato.png` |
| `/images/clients/firefox.png` (Northeastern logo) | `images/clients/firefox.png` |
| `/images/clients/grunt.png` (Beth Israel Deaconess logo) | `images/clients/grunt.png` |

Until then, images show a soft placeholder pattern instead of a broken-image icon.

Also **compress these before uploading** — large hero/background photos are
one of the most common Core Web Vitals / page-speed problems, and page speed
is a ranking factor. Run them through a tool like Squoosh or TinyPNG first;
aim for under ~200KB each.

## Deploying + next steps for ranking

1. Deploy to Cloudflare Pages the same way as before (Upload assets, or connect a git repo — see the previous DEPLOY.md if you still have it, same process applies here).
2. Once the domain is live, submit `sitemap.xml` in [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters) — this is what actually gets new pages crawled quickly rather than waiting weeks.
3. Claim/update your **Google Business Profile** for UNCOVr Media — for a services business like this, local pack visibility often matters more than organic ranking, and it's free.
4. Backlinks matter more than any on-page tweak: ask past clients (Kabbage, Grasshopper, MassMutual, Atrius Health, Northeastern, Beth Israel Deaconess) if they'll link to UNCOVr from a "partners" or "vendors" page, or a case study on their own site.
5. Re-run this site through Google's [Rich Results Test](https://search.google.com/test/rich-results) and [PageSpeed Insights](https://pagespeed.web.dev/) after the real images are in, to confirm the schema validates and load times are healthy.
