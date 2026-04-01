# StackPilot — Complete Affiliate Website
## Launch Guide & Customization Instructions

---

## 📁 File Structure

```
affiliate-site/
├── index.html          → Homepage (hero, featured tools, comparison table, blog preview)
├── categories.html     → All categories + product listings (8 categories, 20+ tools)
├── compare.html        → Side-by-side comparison tables (CRM, productivity, email)
├── blog.html           → Blog index with 10 SEO articles
├── contact.html        → Contact form with inquiry types
├── product-hubspot.html → Full product review template (copy for every tool)
├── styles.css          → Complete stylesheet (dark theme, responsive, animations)
├── main.js             → JS (nav, scroll reveal, forms, affiliate tracking)
└── README.md           → This file
```

---

## ✅ Step 1: Replace Affiliate Links

Search and replace all affiliate link placeholders. In every .html file, find:

| Placeholder | Replace With |
|---|---|
| `YOUR_HUBSPOT_AFFILIATE_LINK` | Your HubSpot affiliate URL |
| `YOUR_NOTION_AFFILIATE_LINK` | Your Notion affiliate URL |
| `YOUR_1PASSWORD_AFFILIATE_LINK` | Your 1Password affiliate URL |
| `YOUR_FRESHBOOKS_AFFILIATE_LINK` | Your FreshBooks affiliate URL |
| `YOUR_ACTIVECAMPAIGN_AFFILIATE_LINK` | Your ActiveCampaign affiliate URL |
| `YOUR_SALESFORCE_AFFILIATE_LINK` | Your Salesforce affiliate URL |
| `YOUR_PIPEDRIVE_AFFILIATE_LINK` | Your Pipedrive affiliate URL |
| `YOUR_MONDAY_AFFILIATE_LINK` | Your Monday.com affiliate URL |
| `YOUR_ASANA_AFFILIATE_LINK` | Your Asana affiliate URL |
| `YOUR_SEMRUSH_AFFILIATE_LINK` | Your Semrush affiliate URL |
| `YOUR_GITHUB_AFFILIATE_LINK` | Your GitHub affiliate URL |
| `YOUR_QUICKBOOKS_AFFILIATE_LINK` | Your QuickBooks affiliate URL |
| `YOUR_STRIPE_AFFILIATE_LINK` | Your Stripe affiliate URL |

**VSCode Quick Replace:** Ctrl+Shift+H → Find in all files

---

## ✅ Step 2: Add Analytics

Paste before `</head>` in every page:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Also add affiliate click tracking in main.js (replace the console.log with):
```javascript
gtag('event', 'affiliate_click', { 'tool_name': tool });
```

---

## ✅ Step 3: Set Up Newsletter

The newsletter form currently shows a success animation. Connect it to a real email service:

**Option A — Mailchimp:**
Replace the `<form>` in the newsletter section with your Mailchimp embedded form.

**Option B — ConvertKit:**
```javascript
// In handleNewsletterSubmit(), replace the placeholder with:
const res = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ api_key: 'YOUR_API_KEY', email: input.value })
});
```

**Option C — Beehiiv, Substack, etc.:**
Use their embed code or API.

---

## ✅ Step 4: Add More Product Pages

Copy `product-hubspot.html` and customize for each tool:

1. Update `<title>` and `<meta name="description">`
2. Update the h1, tagline, and all content
3. Update pricing tiers
4. Update features list, pros/cons
5. Update the sidebar specs and scores
6. Replace all affiliate links
7. Update the "Alternatives" sidebar links

**Tools to create pages for (high affiliate value):**
- product-notion.html
- product-1password.html
- product-freshbooks.html
- product-activecampaign.html
- product-copilot.html
- product-salesforce.html
- product-pipedrive.html
- product-monday.html
- product-asana.html
- product-semrush.html
- product-quickbooks.html
- product-stripe.html

---

## ✅ Step 5: Deploy the Site

**Option A — Netlify (Recommended, Free):**
1. Go to netlify.com → New site from Git
2. Connect your GitHub repo
3. Build command: (leave empty)
4. Publish directory: `.` (root)
5. Deploy → Get free SSL + CDN automatically

**Option B — GitHub Pages (Free):**
1. Push files to a GitHub repo
2. Settings → Pages → Source: main branch, root folder
3. Your site is live at `username.github.io/repo-name`

**Option C — Vercel (Free tier):**
```bash
npx vercel --prod
```

**Option D — Your own host:**
Upload all files via FTP/cPanel File Manager.

---

## ✅ Step 6: SEO Setup

### Add sitemap.xml (create this file):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://yourdomain.com/</loc><priority>1.0</priority></url>
  <url><loc>https://yourdomain.com/categories.html</loc><priority>0.9</priority></url>
  <url><loc>https://yourdomain.com/compare.html</loc><priority>0.8</priority></url>
  <url><loc>https://yourdomain.com/blog.html</loc><priority>0.8</priority></url>
  <url><loc>https://yourdomain.com/product-hubspot.html</loc><priority>0.8</priority></url>
  <!-- Add all product pages here -->
</urlset>
```

### Add robots.txt:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### Submit to Google:
Google Search Console → Add property → Submit sitemap URL

---

## 📝 10 SEO Blog Article Ideas (Write These First)

These titles target high-intent, comparison keywords:

1. **"HubSpot vs Salesforce 2026: Which CRM Is Worth It for SMBs?"**
   Target: "hubspot vs salesforce" (22K/mo searches)

2. **"Best CRM Software for Small Business in 2026 (Tested & Ranked)"**
   Target: "best crm small business" (18K/mo)

3. **"Notion vs Confluence 2026: The Honest Comparison"**
   Target: "notion vs confluence" (9K/mo)

4. **"How to Build a Business Tech Stack Under $300/Month"**
   Target: "business software stack" (4K/mo) — great for affiliate conversions

5. **"Best Accounting Software for Freelancers (Not QuickBooks)"**
   Target: "accounting software freelancers" (8K/mo)

6. **"ActiveCampaign vs Mailchimp: When Should You Upgrade?"**
   Target: "activecampaign vs mailchimp" (12K/mo)

7. **"1Password Review 2026: Is It Worth It for Teams?"**
   Target: "1password review" (6K/mo)

8. **"Best Project Management Software 2026: 8 Tools Tested"**
   Target: "best project management software" (40K/mo — very competitive, target long-tail)

9. **"Semrush Review 2026: Is It Worth $120/Month for SEO?"**
   Target: "semrush review" (8K/mo)

10. **"The Complete Guide to GDPR-Compliant Marketing Tools"**
    Target: "gdpr compliant email marketing" (3K/mo) — low competition, high intent

---

## 💡 Revenue Optimization Tips

### Highest-Converting Placements:
1. **Hero CTA** — the first button above the fold
2. **Comparison table** — the "Get Started" buttons next to winners
3. **Product page pricing box** — sticky sidebar with affiliate button
4. **End of review** — final verdict CTA button

### Increase Commission Value:
- Join **Impact.com** and **ShareASale** for higher-paying alternatives
- HubSpot pays up to $1,000 per referral for higher tiers
- Semrush pays 40% recurring commission
- Freshbooks pays $5–$55 per free trial + commission on paid

### A/B Test These:
- Button text: "Try Free →" vs "Get Started →" vs "Start for Free"
- Button color: Default purple vs green (`#22d3a0`)
- Pricing box placement: Sidebar vs inline in review

---

## 🎨 Customization

### Change Brand Name:
Replace "StackPilot" everywhere with your brand name.

### Change Colors:
Edit CSS variables in `styles.css`:
```css
:root {
  --accent: #6c63ff;        /* Main accent (purple) */
  --accent-light: #8b85ff;  /* Light accent */
  --accent-glow: rgba(108,99,255,0.25);  /* Glow effect */
  --green: #22d3a0;         /* Success / check color */
}
```

### Change to Light Theme:
```css
:root {
  --bg: #ffffff;
  --bg-1: #f8f9fa;
  --bg-2: #f0f0f5;
  --bg-3: #e8e8f0;
  --text-primary: #0a0a0f;
  --text-secondary: #444455;
  --text-muted: #888899;
  --border: rgba(0,0,0,0.08);
  --border-hover: rgba(0,0,0,0.15);
}
```

---

## 📊 Tracking Checklist

- [ ] Google Analytics 4 installed on all pages
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] All affiliate links replaced with real URLs
- [ ] Affiliate links tested (click → correct destination)
- [ ] Newsletter form connected to email service
- [ ] Contact form connected to email (Formspree / Netlify Forms)
- [ ] Mobile responsiveness tested on iPhone and Android
- [ ] Page speed tested (aim for 90+ on PageSpeed Insights)

---

Built with pure HTML, CSS, and vanilla JS. No frameworks, no build tools, no npm. Deploy anywhere.
