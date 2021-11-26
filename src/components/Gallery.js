import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

export default function Gallery() {
  let defaultImage1 = useRef(null);
  let defaultImage2 = useRef(null);

  const [images, setImages] = useState([]);

  useEffect(() => {
    let image = JSON.parse(localStorage.getItem("images"));
    setImages(image);
  }, []);

  function deleteImage(id) {
    let gallery = JSON.parse(localStorage.getItem("images"));
    let update = gallery.filter((img) => img.id !== id);
    console.log(update);
    localStorage.setItem("images", JSON.stringify(update));
    setImages(update);
  }

  function ShowImages() {
    if (images) {
      return images.map((image, index) => {
        return (
          <div key={index} className="image">
            <img src={image.image} alt={`image${index}`} />
            <p>{image.date}</p>
            <p>{image.city}</p>
            <button
              onClick={() => {
                deleteImage(image.id);
              }}
            >
              Delete
            </button>
            <a href={image.image} download>
              <button>Download</button>
            </a>
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
        <img
          ref={defaultImage1}
          src="./images/776-400x300.jpg"
          alt="random image"
        />
        <img
          ref={defaultImage2}
          src="./images/photo-1635273439931-07f24478bec5.jpeg"
          alt="random image"
        />
        <ShowImages />
      </div>
    </>
  );
}
