# andre's site

A minimal Jekyll site that GitHub Pages builds automatically. No theme, no build step to manage.

## Go live (about 10 minutes)

1. On GitHub, create a **public** repo named exactly `YOUR-USERNAME.github.io`.
2. Upload everything in this folder (or `git init`, `git add .`, `git commit`, `git push`).
3. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, branch `main`, folder `/ (root)`.
4. Wait a minute or two. The site is at `https://YOUR-USERNAME.github.io`.

## Before you publish

- [ ] Edit `_config.yml`: your GitHub and LinkedIn links.
- [ ] Rewrite the bio in `index.md` in your own words.
- [ ] When ready, add your CV as `assets/Andre_Vaillant_CV.pdf` (web copy, no phone number) and swap the "CV coming soon" text in `_layouts/default.html` back to a link.
- [ ] Optional: add a one-line result to the BCI project in `projects.md`.

## Writing a post

Create `_posts/YYYY-MM-DD-short-title.md`:

```markdown
---
layout: post
title: "Post title"
math: true      # only if you use LaTeX
---

Your post in Markdown.
```

Push, and it appears on the Writing page and the home page automatically. Unfinished posts go in `_drafts/`, which is never published. There's an example draft there.

## Custom domain (optional, ~£10/year)

1. Buy a domain (Cloudflare, Namecheap, Porkbun…).
2. Repo **Settings → Pages → Custom domain**: enter it, and tick **Enforce HTTPS** once it's available.
3. At your domain provider, add the DNS records GitHub shows you (four `A` records for the apex domain, or a `CNAME` for `www`).
4. Set `url:` in `_config.yml` to your domain.

## Preview locally (optional)

```bash
gem install bundler jekyll jekyll-feed jekyll-seo-tag
jekyll serve
```
Then open http://localhost:4000.
