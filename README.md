# Apna AI — Starter v0.1

A mobile-first bilingual (Hindi + English) starter website/PWA with a modern dark interface.

## Included
- `index.html` — responsive app UI and demo interactions
- `manifest.json` — installable web app metadata
- `sw.js` — basic offline cache for the app shell

## Important
This is a **working UI demo**, not yet a real AI service. The chat uses a few sample offline replies; writing tools produce instructions/templates; image/video sections generate prompts, not actual images or videos.

Do not put an AI provider secret API key in `index.html` or any public frontend code. For real AI, create a backend/server endpoint that stores the key securely, then call that endpoint from the app.

## Test on your computer
Open `index.html` in a browser. The main interactions work, but install/offline features generally require `localhost` or HTTPS.

## Test on Android
1. Upload the files to a static website host that supports HTTPS (for example, a free static hosting tier).
2. Open the HTTPS website in Chrome on Android.
3. Use Chrome menu → **Install app** or **Add to Home screen** if offered.
4. Test chat demo, prompt maker, and copy buttons.

## Next stage: connect real AI
1. Choose an AI provider and check its current free quota and billing terms.
2. Build a small backend endpoint (for example, on a serverless/free-tier host).
3. Store the API key as a server-side secret/environment variable.
4. Have the frontend send the user's prompt to your backend endpoint.
5. Add usage limits and abuse protection before sharing publicly.

## Android APK
These files do not themselves produce an APK. A website can be installed as a PWA, but a distributable APK requires an additional Android packaging step (such as Capacitor or a Trusted Web Activity) and usually a computer/build environment. We can do that as a separate next step after the website is hosted and tested.
