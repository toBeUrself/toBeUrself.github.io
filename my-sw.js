'use strict';

var cacheName = 'tim-blog-01';
var filesToCache = [
  '/',
  '/main.a6ce11bcc0a5783584b2.js',
  '/vender.a6ce11bcc0a5783584b2.js',
  '/style.a6ce11bcc0a5783584b2.css',
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
        fetch(event.request).then(response => {
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
