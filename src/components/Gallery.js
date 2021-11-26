import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let image = JSON.parse(localStorage.getItem("images"));
    setImages(image);
  }, []);

  function ShowImages() {
    if (images) {
      return images.map((image, index) => {
        return (
          <div key={index} className="image">
            <img src={image} />
            <button>Delete</button>
            <button>Download</button>
          </div>
        );
      });
    } else {
      return null;
    }
  }
  return (
    <>
      <div className="gallery">
        <h1>Instablam</h1>
        <Navbar />
        <img src="./images/776-400x300.jpg" alt="random image" />
        <img
          src="./images/photo-1635273439931-07f24478bec5.jpeg"
          alt="random image"
        />
        <ShowImages />
      </div>
    </>
  );
}
