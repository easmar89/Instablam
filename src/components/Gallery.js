import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let image = JSON.parse(localStorage.getItem("images"));
    setImages(image);
  }, []);

  function deleteImage(id) {
    let gallery = JSON.parse(localStorage.getItem("images"));
    let update = gallery.filter((img) => img.id !== id);
    localStorage.setItem("images", JSON.stringify(update));
    setImages(update);
  }

  function ShowImages() {
    if (images) {
      return images.map((image, index) => {
        return (
          <div key={index} className="image">
            <img src={image.image} alt={`${index}`} />
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
        <div className="images-container">
          <ShowImages />
        </div>
      </div>
    </>
  );
}
