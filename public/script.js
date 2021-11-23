// window.addEventListener("load", () => {
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//       .register("sw.js")
//       .then(() => {
//         console.log("Serivce Worker registered succesfully!");
//       })
//       .catch((err) => {
//         console.log("SW registration failed: ", err);
//       });
//   } else {
//     console.log("Sorry...serviceWorkers are not supported");
//   }
// });

async function installSW() {
  if (!("serviceWorker" in navigator)) {
    console.log("ServiceWorkers are not supported");
    return;
  }

  const swRegistration = await navigator.serviceWorker.register("sw.js");
  // let serviceWorker;

  // if (swRegistration.installing) {
  //   console.log("Resolved on installed: ", swRegistration);
  //   serviceWorker = swRegistration.installing;
  // } else if (swRegistration.waiting) {
  //   console.log("installed/waiting: ", swRegistration);
  //   serviceWorker = swRegistration.waiting;
  // } else if (swRegistration.active) {
  //   console.log("activated: ", swRegistration);
  //   serviceWorker = swRegistration.active;
  // }

  // serviceWorker.addEventListener("statechange", (e) => {
  //   console.log(e.target.state);
  // });
}

installSW();
