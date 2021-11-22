const CACHE_NAME = "cached_files";

const cached_files = ["/"];

self.addEventListener("install", (event) => {
  console.log("from SW: install event");
  const preCache = async () => {
    const cache = await caches.open(CACHE_NAME);
    return cache.addAll();
  };
});

self.addEventListener("activate", (event) => {
  console.log("from SW: activate event");
});

// self.addEventListener("fetch", (e) => {
//   console.log("printing url ", e.request.url);
// });
