# Deploy to GitHub Pages + Connect deuxen.co.uk Domain

## Step 1: Enable GitHub Pages (Web UI)

1. Go to https://github.com/deuxenai-alt/deuxen-ai-site/settings
2. Scroll to **"Pages"** section (left sidebar)
3. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` + `/root` folder
   - Click **Save**

GitHub will automatically build and deploy on every push to main.

---

## Step 2: Update Your Domain at LCN (Web UI)

### Option A: Use GitHub's Nameservers (Recommended)

1. **Get GitHub's Nameservers:**
   - Go back to https://github.com/deuxenai-alt/deuxen-ai-site/settings/pages
   - You'll see: "Check your DNS settings. You should configure the following..."
   - Copy the nameservers listed (look like `ns-123.awsdns-45.com`)

2. **Update LCN:**
   - Log into https://www.lcn.com/ (your domain registrar)
   - Find your domain settings for `deuxen.co.uk`
   - Go to **DNS / Nameservers**
   - Replace all nameservers with GitHub's nameservers
   - Save changes
   - **Wait 24-48 hours** for DNS to propagate

### Option B: Use CNAME Record (Faster, if LCN supports it)

1. Log into https://www.lcn.com/
2. Find DNS records for `deuxen.co.uk`
3. Add or update CNAME record:
   - **Name**: `@` or leave blank (root domain)
   - **Target**: `deuxenai-alt.github.io`
4. Save and wait 5-15 minutes for propagation

---

## Step 3: Verify It's Working

Once DNS propagates:

1. Visit https://deuxen.co.uk in your browser
2. You should see your Deuxen AI site
3. Go back to GitHub Settings > Pages
4. You should see a green checkmark: "Your site is published at https://deuxen.co.uk"

---

## Making Changes & Auto-Deploying

Every time you push to `main`:

```bash
git add .
git commit -m "Update: add new feature"
git push origin main
```

GitHub automatically rebuilds and deploys within 1-2 minutes. Your site updates live at https://deuxen.co.uk.

---

## Troubleshooting

**"Site not found" after 24 hours:**
- Wait another 24 hours (DNS caches can be slow)
- Check that CNAME file exists: `public/CNAME` should contain `deuxen.co.uk`
- Verify the branch and folder are correct in GitHub Settings > Pages

**"DNS is configured but site still broken:**
- Go to https://mxtoolbox.com/
- Look up: `deuxen.co.uk`
- Verify it's pointing to GitHub's servers

**Need SSL/HTTPS:**
- GitHub Pages handles this automatically with free SSL certificates once DNS is configured
- Your site will auto-upgrade to https:// once domain is verified

---

## Next: Set Up Chatbot (n8n + Google Sheets)

See `SETUP_CHATBOT.md` for chatbot integration.
