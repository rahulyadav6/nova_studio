# Nova Studio — Static Website Project

A responsive, three-page creative studio website built with HTML5, CSS3 and vanilla JavaScript.

## Pages
- `index.html` — Home page and service overview
- `about.html` — Studio story, values and process
- `contact.html` — Contact details and validated demo form

## Run locally
Open `index.html` in a browser. For a local development server, run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy free with GitHub Pages
1. Create a GitHub repository and upload the contents of this folder (not the ZIP itself).
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish and copy the URL shown in the Pages settings.

The contact form is client-side validation only. Connect a backend or form service before using it to collect real submissions.

## External resources
Google Fonts (Manrope and DM Sans) and Font Awesome icons are loaded from their public CDNs. Internet access is required for those assets; the layout remains usable if they are unavailable.
