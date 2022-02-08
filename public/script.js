async function installSW() {
  if (!("serviceWorker" in navigator)) {
    console.log("ServiceWorkers are not supported");
    return;
  }

  const swRegistration = await navigator.serviceWorker.register("sw.js");
}

installSW();
