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

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cachedName) {
          // 如果当前版本和缓存版本不一致
          if (cachedName !== cacheName) {
            return caches.delete(cachedName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  var requestType = event.request.url.split('.')[event.request.url.split('.').length - 1].toLowerCase()
  if (['html', 'css', 'json', 'js'].indexOf(requestType) > -1) {
    event.respondWith(caches.match(event.request).then(res => {
      if (res) {
        return res;
      } else {
        fetch(e.request).then(response => {
          caches.open(cacheName).then(cache => {
            cache.put(event.request, response.clone());
          }).then(() => {
            return response;
          });
        });
      }
    }));
  } else {
    console.info('not fetch file: ', requestType);
  }
});

self.addEventListener('message', event => {

});
