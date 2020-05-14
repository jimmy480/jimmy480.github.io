'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "2f483da74d1a722908d0402f9cee23f8",
"/": "2f483da74d1a722908d0402f9cee23f8",
"main.dart.js": "3d22d467327cd2c69dae60bec1a08f77",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9d7ff85b7a98c3d4f5c15ec1c1e24fbd",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/images/bg-home.png": "ecc6597c7ddb64d133849bb5fcb187ba",
"assets/images/bg-login.png": "14de0bca6b421f441e0dd5d1601d0ebd",
"assets/AssetManifest.json": "10220190a89ce8cab8486ede4e4bb78b",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
