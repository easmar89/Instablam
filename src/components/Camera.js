import { useRef } from "react";
import Location from "./Location";

export default function Camera() {
  let camRef = useRef(null);
  let photoRef = useRef(null);

  return (
    <div className="camera-container">
      <video ref={camRef}></video>
      <button
        onClick={() => {
          turnCameraOn(camRef.current);
        }}
      >
        Show camera
      </button>
      <button
        onClick={() => {
          setTimeout(() => {
            capturePhoto(camRef.current, photoRef.current);
          }, 3000);
        }}
      >
        Take photo
      </button>
      <div className="photo">
        <canvas ref={photoRef}></canvas>
        <Location />
        <button>save</button>
      </div>
    </div>
  );
}

async function turnCameraOn(camElement) {
  if (!("mediaDevices" in navigator)) {
    return;
  }

  try {
    const constraints = {
      video: { width: 400, height: 300 },
    };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    console.log(stream);
    console.log(camElement);
    console.log(camElement.srcObject);

    camElement.srcObject = stream;
    camElement.play();
  } catch (error) {
    console.error(error);
  }
}

function capturePhoto(camElement, photoElement) {
  const width = 400;
  const height = 300;

  photoElement.width = width;
  photoElement.height = height;

  let canvas = photoElement.getContext("2d");
  canvas.drawImage(camElement, 0, 0, width, height);
}
