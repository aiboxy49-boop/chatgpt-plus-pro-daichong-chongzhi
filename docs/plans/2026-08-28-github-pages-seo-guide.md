# GitHub Pages SEO Guide Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Publish an original Chinese ChatGPT Plus subscription guide that introduces AI Boxy transparently and measures outbound traffic.

**Architecture:** A dependency-free static multi-page site is hosted from the root of a public GitHub repository. One core guide answers the broad query, while three articles target distinct long-tail intents. Shared CSS, canonical URLs, a sitemap, robots directives, and UTM-tagged AI Boxy links keep the site maintainable and measurable.

**Tech Stack:** HTML5, CSS, Node.js built-in test runner, GitHub Pages.

### Task 1: Define the content contract

**Files:**
- Create: `tests/site.test.js`
- Create: `package.json`

Verify page count, unique metadata, canonical URLs, disclosure copy, safety copy, UTM parameters, sitemap coverage, and absence of copied competitor branding.

### Task 2: Build the shared guide surface

**Files:**
- Create: `styles.css`
- Create: `assets/ai-boxy-logo.svg`
- Create: `index.html`

Build a responsive, trust-first comparison page using the existing AI Boxy forest and lime identity.

### Task 3: Add long-tail articles

**Files:**
- Create: `articles/chatgpt-plus-recharge.html`
- Create: `articles/payment-options.html`
- Create: `articles/account-safety.html`

Give every search intent a distinct title, description, canonical URL, body copy, and tracked conversion link.

### Task 4: Add discovery and deployment files

**Files:**
- Create: `_config.yml`
- Create: `robots.txt`
- Create: `sitemap.xml`
- Create: `.nojekyll`
- Create: `README.md`

Publish from the `main` branch root and verify every public route.

### Task 5: Verify and publish

Run `npm test`, serve locally, inspect desktop and mobile layouts, then create the public repository under the Chrome-authenticated GitHub account and enable GitHub Pages.

