window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => {
        console.log("Serivce Worker registered succesfully!");
      })
      .catch((err) => {
        console.log("SW registration failed: ", err);
      });
  } else {
    console.log("Sorry...serviceWorkers are not supported");
  }
});
