# Ramdhari Ray Smriti Seva Sansthan Website
Ready-to-deploy Node/Express website.

## Important
- Replace the placeholder institution details in `public/index.html`.
- Put the official YouTube channel URL in `public/script.js`.
- Membership uploads are saved to `UPLOAD_DIR` (default `uploads/`). For Render, use a persistent disk if uploaded files must survive redeploys.
- This project does not invent the institution's registration/office/contact facts; fill them with verified details.

## Run
npm install
npm start
Then open http://localhost:3000

## Google
A public URL can be indexed by Google after deployment, but appearing for the institution name is not immediate or guaranteed. Submit the URL in Google Search Console after deployment.
