import { useState, useRef, useEffect } from "react";

export default function Camera() {
  let camRef = useRef(null);
  let photoRef = useRef(null);
  let info = useRef(null);
  let [showPhoto, setShowPhoto] = useState(false);
  let [mode, setFacingMode] = useState("user");
  let [location, setLocation] = useState(null);

  async function getAddress(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;

    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=4f53d5f3272e4c0baf9abca7eef324f9`
    );
    const data = await response.json();
    let city = data.features[0].properties.city;
    setLocation(city);
    return city;
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(getAddress);
    } else {
      console.log("Sorry, GEOLOCATION is not supported on your system");
    }
  }, []);

  function switchCamera() {
    console.log("will change facingmode");
    if (mode === "user") {
      turnCameraOff(camRef.current);
      setFacingMode("environment");
      turnCameraOn(camRef.current, mode);
    } else {
      turnCameraOff(camRef.current);
      setFacingMode("user");
      turnCameraOn(camRef.current, mode);
    }
  }

  return (
    <div className="camera-container">
      <video ref={camRef}></video>
      <button
        onClick={() => {
          turnCameraOn(camRef.current, mode);
        }}
      >
        Show camera
      </button>
      <button
        onClick={() => {
          turnCameraOff(camRef.current);
        }}
      >
        Stop camera
      </button>
      <button
        onClick={() => {
          switchCamera();
        }}
      >
        Switch
      </button>
      <button
        onClick={() => {
          setTimeout(() => {
            capturePhoto(camRef.current, photoRef.current, setShowPhoto);
          }, 3000);
        }}
      >
        Take photo
      </button>
      <div className={"photo " + (showPhoto ? "showPhoto" : "")}>
        <canvas ref={photoRef}></canvas>
        <div ref={info} className="info">
          <p className="date">{new Date().toLocaleString()}</p>
          <p className="location">{location}</p>
        </div>
        <button
          onClick={() => {
            closePhoto(photoRef, setShowPhoto);
          }}
        >
          Close
        </button>
        <button
          onClick={() => {
            saveImage(photoRef.current, info);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

async function turnCameraOn(camElement, mode) {
  if (!("mediaDevices" in navigator)) {
    return;
  }
  try {
    const constraints = {
      video: { facingMode: mode, width: 400, height: 300 },
    };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    camElement.srcObject = stream;
    camElement.play();
  } catch (error) {
    console.error(error);
  }
}

function turnCameraOff(camElement) {
  let tracks = camElement.srcObject.getTracks();
  tracks.forEach((track) => {
    track.stop();
  });
  camElement.srcObject = null;
}

function capturePhoto(camElement, photoElement, showPhoto) {
  const width = 400;
  const height = 300;

  photoElement.width = width;
  photoElement.height = height;

  let canvas = photoElement.getContext("2d");
  canvas.drawImage(camElement, 0, 0, width, height);
  showPhoto(true);
}

function closePhoto(photoElement, showPhoto) {
  let canvas = photoElement.current.getContext("2d");
  canvas.clearRect(
    0,
    0,
    photoElement.current.width,
    photoElement.current.height
  );

  showPhoto(false);
}

function saveImage(photo, information) {
  let date = information.current.children[0].innerText;
  let city = information.current.children[1].innerText;
  let image = photo.toDataURL("image/jpeg");

  if (localStorage.getItem("images")) {
    let gallery = JSON.parse(localStorage.getItem("images"));
    gallery.push({ date, city, image });
    localStorage.setItem("images", JSON.stringify(gallery));
  } else {
    let obj = {
      date,
      city,
      image,
    };
    localStorage.setItem("images", JSON.stringify([obj]));
  }
}
