const CACHE_NAME = 'widget-app-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './style/main.css',
  './js/main.js',
  './js/router.js',

  // Widgets
  './js/widgets/clock-widget.js',
  './js/widgets/holiday-widget.js',
  './js/widgets/weather-widget.js',
  './js/widgets/news-widget.js',
  './js/widgets/meme-widget.js',
  './js/widgets/verse-widget.js',
  './js/widgets/calendar-widget.js',
  './js/widgets/spotify-widget.js',
  './js/widgets/meals-widget.js',
  './js/widgets/links-widget.js',
  './js/widgets/flag-widget.js',

  // Icons & assets
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',

  // Manifest
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[ServiceWorker] Caching app shell...');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});