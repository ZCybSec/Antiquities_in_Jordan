const CACHE_NAME = 'jordan-sites-cache-v2';
const urlsToCache = [
  '/Antiquities_in_Jordan/index.html',
  '/Antiquities_in_Jordan/amman.html',
  '/Antiquities_in_Jordan/contact.html',
  '/Antiquities_in_Jordan/history.html',
  '/Antiquities_in_Jordan/jerash.html',
  '/Antiquities_in_Jordan/petra.html',
  '/Antiquities_in_Jordan/manifest.json',
  '/Antiquities_in_Jordan/service-worker.js',
  '/Antiquities_in_Jordan/styles.css',
  '/Antiquities_in_Jordan/icons/192x192.png',
  '/Antiquities_in_Jordan/icons/512x512.png',
  '/Antiquities_in_Jordan/icons/1024x1024.png',
  '/Antiquities_in_Jordan/icons/180x180.png',
  '/Antiquities_in_Jordan/20100921_gerasb11.jpg',
  '/Antiquities_in_Jordan/4c746ea3-228a-4039-90d5-2193d25631ce_sm.jpg',
  '/Antiquities_in_Jordan/Amman-Citadel-Passages.jpg',
  '/Antiquities_in_Jordan/Gerasa-Jordanien-Theodorkirche-erbaut-494-496-während-des-Episkopats-von-Aeneas-und-zu-Ehren-des-siegreichen-Theodor-der-unsterbliche-Märtyrer-e1639748931627.jpeg',
  '/Antiquities_in_Jordan/download.jpg',
  '/Antiquities_in_Jordan/petra-jordan25-940x940 (1).jpg',
  '/Antiquities_in_Jordan/petra-jordan25-940x940.jpg',
  '/Antiquities_in_Jordan/temple-of-hercules-amman.jpg',
  '/Antiquities_in_Jordan/المدرج-الروماني.jpg',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
