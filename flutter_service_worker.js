'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3516265893eef14c2134f1ea9830df56",
"index.html": "ba14586bc0b85614fc78063de1c1cbe6",
"/": "ba14586bc0b85614fc78063de1c1cbe6",
"main.dart.js": "ecb1a4b40cb66eb87b4796935ad4f283",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "647695ee01416ec6e4e83907ad34fbd9",
".git/config": "7b4e2a7c2b85893a6e721d37bfdc8cbc",
".git/objects/61/c7270af49cb9084a56a655d3485872c539081f": "2891f73c1a2d9bc4b04b8e2583b9512e",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/6a/ed2f41c727b18c622a57144e62876117eb010f": "6191b7849e9b8fdad4e3dea388de454b",
".git/objects/67/f885fed437abdf47b11b550599f52af1191d85": "129a0f8be6452ef251d88e4ae4f46f5a",
".git/objects/93/8a57cb69dd90760d1e7c4926ac8a2fd5dfb731": "ee1b39779b8fd1465eda3f0dd55a2b79",
".git/objects/9d/7c3348ae493adf94f71e5b706408343161d2ad": "b2c6e1ea2ca5ee7b825fd84c41ca2e41",
".git/objects/9d/4e5afe0a7c5c00f4b05a1edebf462215f3c1f4": "98b1b96b70ca41e62c1454a557ef3d5f",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b5/c2a30689353246cae8685700e2b727f35fd9ab": "8af3dba15e113805c6f6ee2c0fc4bd3c",
".git/objects/be/03366ca3919fb940baee07ac18efd3c90b4a0f": "29fc4b303dd774988a79d8fbbe7afd86",
".git/objects/da/453f3feeaef8190d29580fdf557a44b353c180": "97abb8fce5c85a079eb4d4f2253d86c2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/8c3742b9031d5f10ad0912d79404c72b02e8cb": "12a74cc2f20d2c07502b410507495727",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/708de31f285996639d46dfb2424137621a447d": "ff20426e91e83eadc07bcc70edffbc68",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/efadf1ca123d313cd6e1323368b164ea72942f": "5ceef77ce7685938a11ebf306624d17b",
".git/objects/7c/d2f8a6fe3c0109032ea1a930e5545c23dc23ed": "1054220dbaa6b4316be43daf85808a42",
".git/objects/80/cfe986df94aea3b73860ed268e19191ee471b0": "c0eddcf566a4dd2ae2d22ea58a3c280a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/4c14802acd12b71fc18748d0b5f216c90e869e": "b3cf0824b40a9aa4feeaccb20ceab6cf",
".git/objects/86/56e3089de1c90cf494ce8e5591f599d1a9833f": "763ffdf8890cd98c9af8f16862d572e3",
".git/objects/43/e2ac2789d79d6c9e7c344713818ab26af3aa24": "c2bcaa8f485f342aab55a4c315c587d9",
".git/objects/43/8624a8f5d6d2ca04f7d9443a7d6e9310bb7e88": "8efcecfa72d962787d5d2fef0b2993d2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/00a7f1dc05169e752ef682181003f9d75ffa1b": "28a8bc1ec0e7e93e070d44f9d494fe12",
".git/objects/6e/5e42c7810c1510dfa3cb1b8192622a6052c513": "9487cb2a433cb2c22419ab9a23c22eba",
".git/objects/9a/7c5316a5d1959bc988d0d033740d029d2c0a8c": "131984c1e46e3337c690c95cd24a8de2",
".git/objects/98/f653492cb7b48d70280f7cad6e8402594d1976": "afdd3d0c94778e231610ee095c09304d",
".git/objects/6c/ca5c6daaf80995ae70447e6add08a9bb3366de": "fad4f8f2de1aa8717d3b30a3a1230da8",
".git/objects/99/72813b86684652e56105c384d4550884032ba1": "e39fddbbf97bdc7fc812eb0f545f5068",
".git/objects/63/c0f96273efffb1c039ff0b6e61d2b1f514a0ad": "2aded09467a0eeb20d3a61f2e8160576",
".git/objects/90/8f1f9a93d83f1f73d1b74072c3c53a8eb323ee": "96362b9a21a208d5cbeb432a1ef9f2ce",
".git/objects/bf/52cebbf1b8377f59335960ff23658d5976ecc3": "2194ad3278f48c182221d70f6b473a76",
".git/objects/d3/07bfaa55c37ed8beffbac689cbe4e0b98914bb": "5db5aafc7a3b26457c81ca82bc213131",
".git/objects/a0/dcfe830a6123dc5349e47ad5a0f271e34b6814": "a06a56ecb64ab3f274a2470517426914",
".git/objects/dd/cc89405a5075eb7031a1782b895328694d3a8d": "799a46025783287cc247087a9d84898e",
".git/objects/dc/b8e9a71e02e2e548fc4c382fc1aacc1b51d10f": "52837a817ca79a0b3ff9a0cbeae680e5",
".git/objects/a9/c39371643c636d537b2133cc4bb210d1a7baa3": "2c97bf6e8fcd77bd378cc07624cae1ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/918734c423b09f3bf6a659d22cac6967fef178": "9ee0d30e9be803144e6cf9c8ee45c481",
".git/objects/db/12342ac18ec07a8e413199beb659686d0cf74e": "5c0341c464957c69824c2cd613b3700c",
".git/objects/a8/0b9e70115fed2eb4245708c12ed191d6d8a2cf": "afc95ef4cd761c4258e4018d87d5aecd",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8f6695578479dd3dfdd1623d424cacd69c5f59": "db4c906e1d8a35f20ef932982866f066",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/85b40418c2b65f6b2069545d31250c1ad7dfd9": "5fc5b82290862603a2938dc8e5823d0e",
".git/objects/c4/54ffd22f8334fc4d64637408817ade441f0486": "82d4d3f294f9f33366b4641df2fd55df",
".git/objects/cd/e91faf7465a12ccf116340b6d44d0ca95d2295": "5100ea078647c16e5cb5d9e68723dfea",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f9/55a8342f7ae5911c927fd4ae8a85a95e940e15": "dd487b20b79e75bafb505f645eba7e17",
".git/objects/e8/1f38a044c73041caf05277b6e98693c2dc99cd": "dc1014f136404874720e713284ad6877",
".git/objects/c5/c233dd91ee8a4cca885f298880849a2664c178": "02c59806d2ad3d4c21e844830ccf5e5c",
".git/objects/c5/3634708272c6b07ee8f001a59363faae8b127e": "2b68d7746b07c14e148af19427f60d48",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/b9deba341a3a9e3dfa4b9c9ff39fa2e70bca13": "3a5ee1207a884b476ae6ef0a5fcdec35",
".git/objects/cb/a4c7df797c780edca3aa851d395d06ac3f227c": "232814786e4fbe6d25c1edb7fb14f630",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/77/3d4cd41ced28ae098a5408727770c4ab6479d5": "1c2447d78e65a3af27cf1f4bef6e8c33",
".git/objects/70/ccfda447e1dfccba6565285e8013ccae6b301d": "5f7c99a56eaffc271a5e8a05c4ebd53a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/7506bd4577bf4a34a66b01f76cf97b82c6aefb": "520ad61557617a9865d6eb94dfed2167",
".git/objects/47/61cedd34863abd8f29f5640159fa1a3139ebd8": "fd63ecbf48e089f7429bb8ee3a56029f",
".git/objects/7f/1dc1d763035762cda5df36c44716855cf46088": "48d524f5fc7e89a661ef9a93c06c9876",
".git/objects/7a/4b67e8a690edf3f00559ed053f08803874aa5d": "1d15b158586a5479ba35d6e29760330b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "32413e00fcd42e3409c6da9d0a00f854",
".git/logs/refs/heads/main": "32413e00fcd42e3409c6da9d0a00f854",
".git/logs/refs/remotes/origin/main": "c6fd6df86525c01a42260079794a7f9e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c9ec4c3a836e23d2a34cb3ab88393a9e",
".git/refs/remotes/origin/main": "c9ec4c3a836e23d2a34cb3ab88393a9e",
".git/index": "2e1dc3b9c07945e94b3c72fbd11ce6a1",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
"assets/images/person.png": "80725f78468e2eae0b8211642d4848a7",
"assets/images/gizz2.jpg": "dc5fbcfa60ba78bf7fd923c550d45b28",
"assets/images/controls.png": "9dce1c8dc0cd910ad944114e0e61c976",
"assets/images/gizz.jpeg": "dd32bda792f1e986cc51292de85d71f0",
"assets/AssetManifest.json": "1301280f96e791f7829c399cf5f60ffc",
"assets/NOTICES": "65614111cc4f5c4df299f5bc7bd6c3b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/icons/1_49.png": "ea36b1659ca453103f9eecf61bb63f7e",
"assets/icons/blueLine.png": "e839432cb9c969b318975b26bf199cf9",
"assets/icons/bottomgroup.png": "9529f84562cfe3075e57a615700e75d2",
"assets/icons/repeat.png": "a8f8896c86d0f3d257ce02a2300accec",
"assets/icons/search.png": "9358675721f8e60c8bd03631aa069552",
"assets/icons/react-icon-white.png": "c091c68e15254c836c3fa8bfebc74a1e",
"assets/icons/threedot.png": "e5c8f1b0c44792b0fd460f9d87c4c57d",
"assets/icons/yellowLine.png": "5c3ae94c9266f5ca382d6bff72bbafc4",
"assets/icons/forward.png": "1768c3387590b82cba52b3a2bad39fec",
"assets/icons/2_49.png": "558d9225c848f7e8de24e65955ec7a76",
"assets/icons/shuffle.png": "1e8a60d653541f4bdd3d907876dc3f2b",
"assets/icons/pause.png": "36a80f11ed6f4cd599d396c8383619c2",
"assets/icons/musicPlayerScrollButton.png": "1b7a3f4532374f7be858ff91b3b895ea",
"assets/icons/reactBackground.png": "78a882031ee401c5465dc2ab51828895",
"assets/icons/albumRectMed.png": "5db4960a265461c3423952e185481b18",
"assets/icons/addtoplaylist.png": "fb345763e60bea6da45588b6e7a28538",
"assets/icons/share.png": "b02a593fbde5c0e9c7d60e3ae35b9e5f",
"assets/icons/albumRectSmall.png": "e510ff8e3f5d37428dc7aebb10f6a9b2",
"assets/icons/premium.png": "507220a9edd6ada058d686e0e483ebd6",
"assets/icons/play.png": "472d1cf181fbe6096afa7eb9bb0668c8",
"assets/icons/albumRectLarge.png": "8bf53103afd864240dbd732ea1b95555",
"assets/icons/back.png": "efc14675408b83070abcfc96e1a79492",
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
"assets/assets/icons/back.png": "efc14675408b83070abcfc96e1a79492",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
