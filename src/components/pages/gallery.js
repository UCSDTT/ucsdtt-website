import React, { useCallback, useEffect, useState } from "react";
import "../../style/gallery.css";
import WhiteFooter from "../footers/whiteFooter.js";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Photos come straight from src/images/gallery: drop a .webp thumbnail in that
// folder and its full-size original in gallery/full, and it shows up here.
const thumbContext = require.context("../../images/gallery", false, /\.webp$/);
const fullContext = require.context(
  "../../images/gallery/full",
  false,
  /\.(jpe?g|png|webp)$/i
);

const baseName = (key) => key.replace(/^\.\//, "").replace(/\.[^.]+$/, "");

// gallery/full holds the untouched originals, which keep their own extensions,
// so pair them to their thumbnails by filename rather than by full key.
const fullByName = fullContext.keys().reduce((acc, key) => {
  acc[baseName(key)] = fullContext(key);
  return acc;
}, {});

// Each grid photo shows a lightweight thumbnail; the original is only fetched
// once the photo is opened.
const images = thumbContext
  .keys()
  .sort()
  .map((key) => ({
    thumb: thumbContext(key),
    full: fullByName[baseName(key)] || thumbContext(key),
  }));

const Gallery = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const step = useCallback(
    (delta) =>
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + delta + images.length) % images.length
      ),
    []
  );

  useEffect(() => {
    if (openIndex === null) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };

    // Keep the page behind the lightbox from scrolling while it is open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, step]);

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
          {images.map((image, index) => (
            <button
              type="button"
              className="gridPhoto"
              key={index}
              onClick={() => setOpenIndex(index)}
              aria-label={`Expand photo ${index + 1}`}
            >
              <img
                src={image.thumb}
                alt={`gallery${index + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="photoCard"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <AiOutlineClose id="closePhoto" onClick={close} />
          <AiOutlineLeft
            id="prevPhoto"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
          />
          <div
            className="photoCardContainer"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[openIndex].full}
              alt={`gallery${openIndex + 1}`}
            />
          </div>
          <AiOutlineRight
            id="nextPhoto"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
          />
        </div>
      )}

      <WhiteFooter />
    </div>
  );
};

export default Gallery;
