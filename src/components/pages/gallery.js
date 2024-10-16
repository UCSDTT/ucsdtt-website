import React, { useEffect, useState } from "react";
import "../../style/gallery.css";
import WhiteFooter from "../footers/whiteFooter.js";
import { storage } from "../../config/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageList = [];
      const imagesRef = ref(storage, "gallery/");

      try {
        const res = await listAll(imagesRef);
        const promises = res.items.map((item) =>
          getDownloadURL(item).then((url) => imageList.push(url))
        );
        await Promise.all(promises);
      } catch (error) {
        console.error("Error fetching images: ", error);
      }

      setImages(imageList);
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      <div className="banner">
        <div className="bannerText">
          <h1>GALLERY</h1>
          <h3>Memories from our Brothers</h3>
        </div>
      </div>
      <div className="photos">
        <div className="grid">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`gallery${index + 1}`} />
          ))}
        </div>
      </div>

      <WhiteFooter />
    </div>
  );
};

export default Gallery;
