# Instablam

_Link:_ https://instablam-cam.netlify.com

**_Instablam_** is a web application that uses your computer/mobile camera to take photos and save them in a gallery, along with some additional information such as when it was taken, and where.
You can then view, download or delete the photos from the gallery, even when using the app offline, which provides an experience similar to native applications that people download from apple store or google store.

### N.B: Not all functionalities are supported on Iphone yet, thus it's better to try this app on your computer, or from an android device.

<br>
<br>

# Technologies & Features

- App built with React.
- Many browser APIs were used for this app:
  - MediaDevices API (to access the camera)
  - Geolocation API (to access the user's location)
  - Web Notification API (to send notifications to the user)
  - Web Storage API (to stare photos in LocalStorage)
- App main files are cached with a ServiceWorker
- Photos are stored in LocalStorage for offline access
- App follows a PWA approach, which enables the user to access the app and save photos and view them while being offline.
- Installable: user can add it as an icone on his mobile/desktop and open it without a browser.
- The app will take the picture **after 3 seconds** of when you click "take photo"
- After taking a picture, if you don't like it, you can close it and take another one, or if it satisfies your mood, you can save it and add it to the gallery.
- If permission is granted by user, the app will also save the time and location of when and where the photo was taken.  
  <br>

<br>

## _N.B: More features and functionalities will be added soon._
