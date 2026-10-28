# MFONI — Photography Portfolio (Draft 1)

A lightweight responsive photography portfolio built with plain HTML, CSS, and JavaScript. No build step needed.

## Preview
Open `index.html` in a browser. Stock placeholder photos load from Unsplash and require internet access.

## Replace the photos
1. Create an `images` folder.
2. Add your exported JPEG/WebP photos.
3. Open `script.js`, and replace each `src` with a relative path such as `images/DSC09218.jpg`. Update `title`, `category`, `ratio`, and `alt` for each image.
4. Replace the About section's gradient placeholder with your portrait (in `index.html` / `styles.css`).

## Activate contact form
Create a form at https://formspree.io/ and replace `action=""` on the form in `index.html` with your exact Formspree endpoint. Do not publish the form as active before configuring it.

## Publish on GitHub Pages
Create a new repository, upload `index.html`, `styles.css`, `script.js`, and your `images` folder. In repository Settings → Pages, choose Deploy from a branch → main / root. Preview using the GitHub Pages URL before updating any domain DNS. Once ready, configure your custom domain `mfoni-co.com` in Pages and update the Wix-managed DNS records per GitHub's current documentation. Keep your domain registration active.

## Notes
- Stock photos are placeholders, not photographs from Mfoni.
- Current site is a one-page portfolio with Work, About, and Contact sections.
- Contact form is intentionally disabled until connected to a form provider.
