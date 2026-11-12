# Demon Slayer Website - Issue Report

| # | Severity | File | Problem | Proposed fix |
|---|---|---|---|---|
| 1 | Critical | All HTML files | Inline styles with fixed values (`gap: 30%`, `height: 80px`, `width: 900px`, `margin-top: 615px`). Causes severe layout breakage and overflow on mobile/tablet. | Move layout styles to `style.css`. Use Flexbox/Grid with `flex-wrap: wrap`, percentages, and media queries for responsive layouts. |
| 2 | Critical | All HTML files | No mobile navigation (hamburger menu). Navbar overflows on small screens. | Implement a responsive navbar with a hamburger menu for mobile screens (CSS + JS). |
| 3 | Critical | `AnimeniKo'rish.html` | The video iframe and episode list have fixed widths (`900px`, `600px`). | Use `width: 100%`, `max-width`, and `aspect-ratio: 16/9` for iframe. Allow the episode list to wrap and fill available space. |
| 4 | Critical | `Qaxramonlar.html` | Invalid semantic HTML (`<ul>` inside `<ol>`, standalone `<li>` without parents). Images have fixed heights causing aspect ratio distortion. | Fix semantic HTML structure. Use CSS `object-fit: cover` and `height: auto` or `aspect-ratio`. |
| 5 | Important | `app.js` | Highly repetitive code (27 identical event listeners for episodes). | Refactor to use event delegation or a loop over an array of episode objects. |
| 6 | Important | `index.html` (and others) | Fixed positioning/margins on footer (`margin-top: 615px`, `gap: 220px`). | Use flexbox layout for the footer, `flex-wrap: wrap`, and remove hardcoded margins to let it naturally flow at the bottom of the page. |
| 7 | Minor | All HTML files | Missing lazy loading for images, basic SEO meta tags, and accessibility attributes. | Add `loading="lazy"`, Open Graph meta tags, descriptive `alt` texts, and better focus states for links/buttons. |

