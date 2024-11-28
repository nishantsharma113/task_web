'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b53b366fd54e9b74c006147100408a22",
"version.json": "f66f7fc266131cea07ab2ccb44bf4337",
"index.html": "8c265cdbccad36aaf7266ad4c68c0627",
"/": "8c265cdbccad36aaf7266ad4c68c0627",
"main.dart.js": "08ff94d70cbe6434bbf5f4abfb0cc414",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"jio_logo.svg": "fd7a7c53e49f30d846ee359267fa0105",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "58982b9a1beab122a75f1bab76ab51c3",
"assets/AssetManifest.json": "eca1f562d306587e617ec97aa3a6d938",
"assets/NOTICES": "5741afa446043563c84ec5d8bb2e0fac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6d839f55fb27174a49e5c67f8405593f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "98f7f3a46efde8d5912e5c82b210cd03",
"assets/fonts/MaterialIcons-Regular.otf": "6b472c00cb95722eb03b9ef438a92188",
"assets/assets/images/printIcon.svg": "7a9806c90dd1849a578ef081dd9783ca",
"assets/assets/images/home.svg": "d12db5f27e0566f8cc65ccd1b247bd8a",
"assets/assets/images/copyIcon.svg": "4d90bff2a185388495f46c5bbc0ba4fe",
"assets/assets/images/ganttIcon.svg": "181cab5a8bd9b3541c56524e5f3c1122",
"assets/assets/images/manage-user.svg": "6d398b5e7cfa24a1d3539fc64e1c13fa",
"assets/assets/images/empty.svg": "28047f1c59757cd9ab0bf6181722c1f5",
"assets/assets/images/lock.svg": "80e51b9d31b32492d84ad1f5d682d4db",
"assets/assets/images/editIcon.svg": "786c240826a290b1aa107dbc0dcdef6b",
"assets/assets/images/pinIcon.svg": "560b508727e3d5ee5c75e1520fa8c3d5",
"assets/assets/images/arrowRight.svg": "addbbdcb696cc7b2a534f7e7f5cca17c",
"assets/assets/images/fullscreenIcon.svg": "14ce18c71c6d20162304609265b2c7b0",
"assets/assets/images/dashboard.svg": "98234b0c74f34fc3a1bbaf9985918578",
"assets/assets/images/jio_logo.svg": "fd7a7c53e49f30d846ee359267fa0105",
"assets/assets/images/archive-icon.svg": "d050f4623672f53f0f7f3cf6adfdd1a8",
"assets/assets/images/setting.svg": "8174629db62040a7dafda5ed1c4c37e6",
"assets/assets/images/crown.svg": "fe6400dfdefa064620305067d9ce1f57",
"assets/assets/images/no-data-table.svg": "459e5e20b05a42c4e1bb07d00bc7a946",
"assets/assets/images/tabIcon.svg": "e9b320266cfb821a41163e1996173f6f",
"assets/assets/images/projectPermission.svg": "bdb7c83b2fa0f2fc9853e863c6a9c104",
"assets/assets/images/addUser.svg": "1b438016a04269066266f9efd1d54101",
"assets/assets/images/delete-icon.svg": "7278fd7cee21dd53b28072024a7aede2",
"assets/assets/images/edit-icon.svg": "786c240826a290b1aa107dbc0dcdef6b",
"assets/assets/images/tableIcon.svg": "1ad356b5f241715a9a5c566bcc5de2b1",
"assets/assets/images/icon4.svg": "35abe06aa1e3ffe2c2d436cf77fda971",
"assets/assets/images/profile-icon.svg": "deb052aa1ff61b4c5e2c3bc25067aae1",
"assets/assets/images/icon5.svg": "60ce2477bf963322f0fc13c0b4b5bbfc",
"assets/assets/images/addIcon.svg": "32da5144901fcd20971794c46d75bf6c",
"assets/assets/images/workspace.svg": "c28e57aa962e0c343a4bb58241cdabd0",
"assets/assets/images/boardIcon.svg": "b7d2e0d413467b1c9d19b9f486f9f2a0",
"assets/assets/images/icon2.svg": "153f8e22038e1b2bc727c489e6d60e1d",
"assets/assets/images/no-data-table.png": "085f228bb91805051a126782c6948e05",
"assets/assets/images/icon3.svg": "91c9dd88a8ce56f1928244121b88e250",
"assets/assets/images/project.svg": "bdb7c83b2fa0f2fc9853e863c6a9c104",
"assets/assets/images/icon1.svg": "d710df163ffe06bcb49d023f446d488f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
