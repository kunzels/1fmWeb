'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3516265893eef14c2134f1ea9830df56",
"index.html": "d98b97e6f4c60898daa3a585bd795698",
"/": "d98b97e6f4c60898daa3a585bd795698",
"main.dart.js": "ecb1a4b40cb66eb87b4796935ad4f283",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "647695ee01416ec6e4e83907ad34fbd9",
"assets/AssetManifest.json": "1301280f96e791f7829c399cf5f60ffc",
"assets/NOTICES": "65614111cc4f5c4df299f5bc7bd6c3b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/person.png": "80725f78468e2eae0b8211642d4848a7",
"assets/assets/images/gizz2.jpg": "dc5fbcfa60ba78bf7fd923c550d45b28",
"assets/assets/images/controls.png": "9dce1c8dc0cd910ad944114e0e61c976",
"assets/assets/images/gizz.jpeg": "dd32bda792f1e986cc51292de85d71f0",
"assets/assets/icons/1_49.png": "ea36b1659ca453103f9eecf61bb63f7e",
"assets/assets/icons/blueLine.png": "e839432cb9c969b318975b26bf199cf9",
"assets/assets/icons/bottomgroup.png": "9529f84562cfe3075e57a615700e75d2",
"assets/assets/icons/repeat.png": "a8f8896c86d0f3d257ce02a2300accec",
"assets/assets/icons/search.png": "9358675721f8e60c8bd03631aa069552",
"assets/assets/icons/react-icon-white.png": "c091c68e15254c836c3fa8bfebc74a1e",
"assets/assets/icons/threedot.png": "e5c8f1b0c44792b0fd460f9d87c4c57d",
"assets/assets/icons/yellowLine.png": "5c3ae94c9266f5ca382d6bff72bbafc4",
"assets/assets/icons/forward.png": "1768c3387590b82cba52b3a2bad39fec",
"assets/assets/icons/2_49.png": "558d9225c848f7e8de24e65955ec7a76",
"assets/assets/icons/shuffle.png": "1e8a60d653541f4bdd3d907876dc3f2b",
"assets/assets/icons/pause.png": "36a80f11ed6f4cd599d396c8383619c2",
"assets/assets/icons/musicPlayerScrollButton.png": "1b7a3f4532374f7be858ff91b3b895ea",
"assets/assets/icons/reactBackground.png": "78a882031ee401c5465dc2ab51828895",
"assets/assets/icons/albumRectMed.png": "5db4960a265461c3423952e185481b18",
"assets/assets/icons/addtoplaylist.png": "fb345763e60bea6da45588b6e7a28538",
"assets/assets/icons/share.png": "b02a593fbde5c0e9c7d60e3ae35b9e5f",
"assets/assets/icons/albumRectSmall.png": "e510ff8e3f5d37428dc7aebb10f6a9b2",
"assets/assets/icons/premium.png": "507220a9edd6ada058d686e0e483ebd6",
"assets/assets/icons/play.png": "472d1cf181fbe6096afa7eb9bb0668c8",
"assets/assets/icons/albumRectLarge.png": "8bf53103afd864240dbd732ea1b95555",
"assets/assets/icons/back.png": "efc14675408b83070abcfc96e1a79492"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
