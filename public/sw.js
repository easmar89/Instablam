self.addEventListener("install", (event) => {
  console.log(event);
});

self.addEventListener("fetch", (e) => {
  console.log("Service worker fetching");
});
