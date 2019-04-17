'use strict';

var cacheName = 'tim-blog';
var filesToCache = [
  '/*.css',
  '/*.js',
  '/img/*',
  '/index.html’,
  '/manifest.json’,
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

self.addEventListener('install', event => {

});

self.addEventListener('fetch', event => {

});

self.addEventListener('message', event => {

});
