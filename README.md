# Instablam

_Link:_ https://instablam-cam.netlify.com

**_Instablam_** is a web application that uses your computer/mobile camera to take photos and save them in a gallery if you wish to do so. The application asks for permission to send notifications to the user, get his current address, and use the device's camera. When you choose to save an image, you can find it in the Gallery page, with the date of when it was taken, and the location of the user at that time. In addition to that, you can download the photo and save it on your device whenver you want, or delete from the gallery at any time.
Instablam is also installable, so you can install it on your mobile or desktop and use it directly from its homescreen icon, instead of navigating to go to the url everytime you want to use it.

### N.B: Not all functionalities are supported on Iphone yet, thus it's better to try this app on your computer, or from an android device.

<br>
<br>

# Technologies & Features

- App built with React.
- Browser APIs used for this app:
  - MediaDevices API (to access the camera)
  - Geolocation API (to access the user's location)
  - Web Notification API (to send notifications to the user)
  - Web Storage API (to store photos in LocalStorage)
- Photos are stored in LocalStorage for offline access
- Installable: user can add it as an icon on his mobile/desktop and open it without a browser.
- The app will take the picture **after 1 second** of clicking "take photo"
- After taking a picture, if you don't like it, you can close it and take another one, or if it satisfies your mood, you can save it and add it to the gallery.
- If permission is granted by user, the app will also save the location of the user at the moment of taking the photo.  
  <br>

<br>

## _N.B: More features and functionalities will be added in the future_
