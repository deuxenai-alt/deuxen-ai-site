# GitHub Pages Deployment — deuxen.co.uk

## Current Status ✅

- **Live now (GitHub default URL):** https://deuxenai-alt.github.io/deuxen-ai-site/
- **Custom domain configured:** `deuxen.co.uk` (DNS records added at LCN,
  propagating — usually live within a few hours, can take up to 24-48h)
- **Deploy method:** `gh-pages` npm package pushes the built `dist/` folder
  to a `gh-pages` branch; GitHub Pages serves directly from that branch
- **HTTPS:** GitHub automatically issues a free certificate once it verifies
  the DNS — no action needed

---

## DNS Records (already added at LCN)

Since `deuxen.co.uk` is an apex/root domain (no `www.`), it uses **A
records** pointing at GitHub's IPs (a CNAME isn't valid at the zone apex):

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

The existing `www` CNAME, email SPF (TXT), and MX records were left
untouched — email is unaffected.

---

## Deploying Updates

Every time you want to publish changes:

```bash
cd /Users/mano/deuxen-ai-site
npm run deploy
```

This runs `npm run build` (via the `predeploy` hook) then pushes the fresh
`dist/` output to the `gh-pages` branch. GitHub Pages picks it up within a
minute or two — no separate CI step required.

Keep committing source changes to `main` as usual with `git push origin
main`; `main` is your source of truth, `gh-pages` is just the built output.

---

## Verify It's Live

1. https://github.com/deuxenai-alt/deuxen-ai-site/settings/pages should show
   "Your site is live at http://deuxen.co.uk/" once DNS + HTTPS finish
2. Check DNS propagation anytime at https://dnschecker.org/ (search
   `deuxen.co.uk`, type `A`)
3. Visit https://deuxen.co.uk directly once propagated

---

## Troubleshooting

**Site not loading after a few hours:**
- Recheck the 4 A records at LCN character-for-character
- Confirm no leftover conflicting A record still points to the old LCN
  parking IP

**"Domain's DNS could not be retrieved" in GitHub Pages settings:**
- Give it more time — some registrars propagate slowly
- Re-verify at https://dnschecker.org/

**HTTPS not available yet:**
- Automatic once GitHub verifies DNS; can take up to an hour after DNS
  first resolves correctly

---

## Optional Upgrade: GitHub Actions CI/CD

Right now deploys are manual (`npm run deploy`). A GitHub Actions workflow
that auto-builds and deploys on every push to `main` is possible, but it
requires granting the `workflow` OAuth scope to the GitHub CLI token
(`gh auth refresh -s workflow`), which needs a one-time browser
authorization. Not set up yet — ask if you want this automated.

---

## Next: Set Up Chatbot (n8n + Google Sheets)

See `SETUP_CHATBOT.md` for chatbot and client-database integration.
