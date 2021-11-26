const CACHE_NAME = "cached_files";

const cached_files = [
  "/",
  "images/776-400x300.jpg",
  "images/photo-1635273439931-07f24478bec5.jpeg",
  "index.html",
];

self.addEventListener("install", (event) => {
  console.log("from SW: install event");
  const preCache = async () => {
    const cache = await caches.open(CACHE_NAME);
    return cache.addAll(cached_files);
  };
  event.waitUntil(preCache());
});

self.addEventListener("fetch", (e) => {
  // console.log(e.request);
  e.respondWith(
    fetch(e.request).catch(() => {
      caches.match(e.request);
    })
  );
});
