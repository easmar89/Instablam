import { userState, useHook, useRef } from "react";

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
      <div className="photo">
        <canvas ref={photoRef}></canvas>
        <button>Close</button>
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
