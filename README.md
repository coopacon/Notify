# 📱 Smart Home Widget App

A modular widget dashboard created with the help of ChatGPT, powered by Vanilla JS and Web Components. Designed to run as a PWA on GitHub Pages and mobile browsers.

## ✨ Features

- Customizable widgets (clock, weather, news, Spotify, to-dos, meals, etc.)
- Optional content like memes, national flag status, proverbs, and user links
- PWA support: installable, offline-enabled
- LocalStorage-based settings
- Modern iOS-style widget layout with rounded, resizable cards

## 🚀 Deploy

Host on GitHub Pages:
1. Push to a public repo
2. Enable Pages from `Settings > Pages`
3. Set the root to `/ (main)` or `/docs`

## 🧩 Widget Architecture

Widgets are pure Web Components located in `/js/widgets`. They register with the homepage layout dynamically or statically.

## 🔐 API Integration (Planned)

- Perplexity API for smart content
- Spotify API (OAuth)
- Google/Apple Calendar
- Weather.com + News

---

## 🛠️ Setup

```bash
# Optional: serve locally
npm install -g serve
serve .