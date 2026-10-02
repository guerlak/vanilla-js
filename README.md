# ☕ Coffee Masters — Vanilla JavaScript PWA

A fast, lightweight, and modern Single Page Application (SPA) built with **100% Vanilla JavaScript**, native **Web Components**, and modern browser APIs — completely free of third-party frameworks, build tools, or external libraries.

Inspired by the *"Vanilla JS: You Might Not Need a Framework"* course by [Maximiliano Firtman](https://firtman.github.io/vanilla/) on [Frontend Masters](https://frontendmasters.com/courses/vanilla-js-apps/).

---

## 🚀 Key Highlights & Concepts

- **Zero Dependencies / Zero Bundlers:** Pure HTML5, CSS3, and ES6+ JavaScript running directly in any modern browser.
- **Native Web Components:** Custom Elements (`<menu-page>`, `<order-page>`, `<details-page>`) registered via `customElements.define()`.
- **Shadow DOM Encapsulation:** Isolated component styles and scoped DOM trees using `element.attachShadow({ mode: 'open' })`.
- **HTML5 Templates:** Declarative `<template>` elements cloned dynamically for optimal rendering performance.
- **Client-Side SPA Router:** Custom-built routing engine using the HTML5 History API (`pushState`, `popstate` events) without full page reloads.
- **Reactive State Management:** Centralized reactive store pattern implemented with native JavaScript `Proxy` to track state changes and trigger UI updates.
- **Progressive Web App (PWA):** `app.webmanifest` configuration, icons, standalone mobile experience, and offline-ready architecture.

---

## 📁 Project Architecture

```
coffeemasters-vanilla/
├── app.js                 # Application bootstrap & entry point
├── app.webmanifest        # PWA configuration manifest
├── index.html             # Main document with shell & HTML templates
├── styles.css             # Global layout & utility styles
├── serviceworker.js       # Service worker for offline caching & PWA support
├── components/            # Autonomous Web Components
│   ├── DetailsPage.css    # Scoped styles for product details
│   ├── DetailsPage.js     # <details-page> custom element
│   ├── MenuPage.css       # Scoped styles for the menu catalogue
│   ├── MenuPage.js        # <menu-page> custom element with Shadow DOM
│   ├── OrderPage.css      # Scoped styles for order checkout
│   └── OrderPage.js       # <order-page> custom element
├── services/              # Core application services
│   ├── API.js             # Data fetching client (menu & products)
│   ├── Router.js          # SPA navigation & History API controller
│   └── Store.js           # Global reactive state with JS Proxy
├── data/                  # Mock data & static JSON feeds
│   └── menu.json
└── images/                # Brand assets, icons & product photography
```

---

## 🛠️ How to Run Locally

Because the project uses native **ES Modules** (`import` / `export`) and `fetch()`, files must be served over an HTTP server (opening `file://index.html` directly in the browser will trigger CORS restrictions).

You can use any local static server:

### Option 1: Using VS Code / IDE Live Server
Right-click on `index.html` and select **"Open with Live Server"**.

### Option 2: Using Node.js (`npx serve`)
```bash
npx serve .
```

### Option 3: Using Python
```bash
# Python 3.x
python3 -m http.server 8000
```
Then navigate to:
```
http://localhost:8000
```

---

## 🧩 Architectural Highlights

### 1. Custom Elements & Shadow DOM
Each view is registered as a custom HTML tag with encapsulated CSS:
```javascript
export class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        // Scoped styles are loaded directly into the shadow root
    }

    connectedCallback() {
        const template = document.getElementById("menu-page-template");
        this.root.appendChild(template.content.cloneNode(true));
    }
}
customElements.define("menu-page", MenuPage);
```

### 2. Client-Side Routing
Custom router orchestrates view swapping seamlessly:
```javascript
Router.go("/order"); // Updates history.pushState and renders <order-page>
```

### 3. Reactive State with `Proxy`
State modifications notify subscribers automatically without external libraries like Redux or Vuex.

---

## 📖 Credits & Acknowledgments

- **Course:** [You Don't Need That Library](https://frontendmasters.com/courses/vanilla-js-apps/) on Frontend Masters
- **Instructor:** [Maximiliano Firtman](https://firtman.github.io/vanilla/)
