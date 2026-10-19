# Apna AI — Complete Starter (free-tier setup)

This package contains a mobile-friendly GitHub Pages front end and a separate Cloudflare Worker backend example. It does **not** mean every AI feature is already live.

## What works immediately
- Responsive Apna AI website and logo
- AI chat interface (needs backend URL to answer with a real model)
- Local prompt drafts for image, video, writing, ideas and translation tools
- Basic installable PWA files

## What needs a separate service
- Real AI answers: deploy `backend/worker.js` to Cloudflare Workers and enable the Workers AI binding. Free access/quotas and account requirements can change.
- Image generation, image understanding, voice input/output and actual video generation are **not active in this starter**. Each needs a compatible API/model and may exceed free quotas or cost money.
- GitHub Pages hosts only the website, not the backend.

## Part A — upload website files to GitHub
1. Open your `APNA-AI` repository on GitHub.
2. Upload/replace the root `index.html`, `manifest.json`, and `sw.js` from this folder.
3. Upload the `assets` folder with both files inside. On mobile, use **Add file → Upload files** and select files; make sure the final paths are `assets/apna-ai-logo.svg` and `assets/apna-ai-profile.png`.
4. Commit changes to `main`, then wait a minute and refresh the GitHub Pages site.

## Part B — deploy the backend (separate from GitHub Pages)
1. Create/sign in to a Cloudflare account and open Workers & Pages.
2. Create a Worker named `apna-ai-api`.
3. Copy the code from `backend/worker.js` into the Worker editor and save/deploy.
4. In the Worker settings, enable **Workers AI** / create the `AI` binding for the Worker. The binding name must be `AI`.
5. Copy the deployed Worker HTTPS URL.
6. In root `index.html`, find `const API_URL = "";` and replace the empty string with your Worker URL, for example `const API_URL = "https://apna-ai-api.YOUR-SUBDOMAIN.workers.dev";`.
7. Commit the updated `index.html` to GitHub and refresh the site.

## Important safety notes
- Never put secret API keys in `index.html`, GitHub, or the APK.
- This sample Worker has permissive CORS (`*`) for easy testing. Before public production use, change `Access-Control-Allow-Origin` to your exact GitHub Pages origin and add rate limiting/abuse protection.
- Free services have usage limits; “free” does not mean unlimited.
- The profile picture in this starter is a generic AI-style placeholder, not a verified personal photo. Replace it only with a photo you choose and have permission to use.
