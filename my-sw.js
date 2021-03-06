'use strict';

var cacheName = 'tim-blog-017';
var filesToCache = [
  '/',
  '/img/girl.jpeg',
  '/main.8b4a08c884a1cbeb4515.js',
  '/vender.8b4a08c884a1cbeb4515.js',
  '/style.8b4a08c884a1cbeb4515.css',
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
            console.log('[ServiceWorker] deleting old cache');
            return caches.delete(cachedName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
//   var requestType = event.request.url.split('.')[event.request.url.split('.').length - 1].toLowerCase()
//   if (['html', 'css', 'json', 'js'].indexOf(requestType) > -1) {
//     event.respondWith(caches.match(event.request).then(res => {
//       if (res) {
//         return res;
//       } else {
//         fetch(event.request).then(response => {
//           caches.open(cacheName).then(cache => {
//             cache.put(event.request, response.clone());
//           }).then(() => {
//             return response;
//           });
//         });
//       }
//     }));
//   } else {
//     console.info('not fetch file: ', requestType);
//   }
});

self.addEventListener('message', event => {

});
