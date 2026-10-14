const CACHE_NAME = 'expenses-app-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/signin.html',
  '/manifest.json',
  '/icon.svg',
  'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || !req.url.startsWith('http')) return;

  // HTML page navigation: Network First, fallback to cached HTML
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return response;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  // All other assets: Cache First, fallback to Network
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((networkRes) => {
        if (networkRes && networkRes.status === 200 && !req.url.includes('firestore') && !req.url.includes('identitytoolkit')) {
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return networkRes;
      }).catch(() => {});
    })
  );
});
