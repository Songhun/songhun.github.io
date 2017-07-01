var cacheName = 'ProtoPie-shared-url';
var filesToCache = [
  '/',
  '/index.html',
  '/public/409cf4562554eb14aaf1dc2c45ae3f5f.css',
  '/public/c8894ac5acb53aed071d.js',
  '/public/assets/938117f090ae27ea6815920a928a6d61.png',
  '/public/assets/e5715748f85883d20b766679ed4212f9.png',
  '/public/assets/16baf0c9c17a9845494d71e746d53448.woff2',
  '/public/assets/22536bfa85d6d30f3a5216e684de14e7.woff2',
  '/public/assets/d60d9c980e3a3f6413890b257f837d08.woff2',
  '/public/assets/dc0324a924a47a9efe01e39b3236de80.woff2',
  '/public/assets/f7a9ebdb00b5bf119d0b733d46ae5569.woff2'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});