'use strict';

var cacheName = 'tim-blog';
var filesToCache = [
  './style.d787fa5e492ef63cf94b.css',
  './vender.d787fa5e492ef63cf94b.js',
  '/main.d787fa5e492ef63cf94b.js',
  '/index.html',
  '/manifest.json',
  '/my-sw.js'
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
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 如果当前版本和缓存版本不一致
          if (cacheName !== VERSION) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function(response) {
    caches.open(VERSION).then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }).catch(function() {
    return caches.match('./img/app.png');
  }));
});

self.addEventListener('message', event => {

});
