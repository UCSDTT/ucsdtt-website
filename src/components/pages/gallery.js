import React from "react";
import "../../style/gallery.css";
import WhiteFooter from "../footers/whiteFooter.js";

import gallery1 from "../../images/gallery1.webp";
import gallery2 from "../../images/gallery2.webp";
import gallery3 from "../../images/gallery3.webp";
import gallery4 from "../../images/gallery4.webp";
import gallery5 from "../../images/gallery5.webp";
import gallery6 from "../../images/gallery6.webp";
import gallery7 from "../../images/gallery7.webp";
import gallery8 from "../../images/gallery8.webp";
import gallery9 from "../../images/gallery9.webp";
import gallery10 from "../../images/gallery10.webp";
import gallery11 from "../../images/gallery11.webp";
import gallery12 from "../../images/gallery12.webp";
import gallery13 from "../../images/gallery13.webp";
import gallery14 from "../../images/gallery14.webp";
import gallery15 from "../../images/gallery15.webp";
import gallery16 from "../../images/gallery16.webp";
import gallery17 from "../../images/gallery17.webp";
import gallery18 from "../../images/gallery18.webp";
import gallery19 from "../../images/gallery19.webp";
import gallery20 from "../../images/gallery20.webp";
import gallery21 from "../../images/gallery21.webp";
import gallery22 from "../../images/gallery22.webp";
import gallery23 from "../../images/gallery23.webp";
import gallery24 from "../../images/gallery24.webp";

const Gallery = () => {
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
          <img src={gallery1} alt="gallery1" />
          <img src={gallery2} alt="gallery2" />
          <img src={gallery3} alt="gallery3" />
          <img src={gallery4} alt="gallery4" />
          <img src={gallery5} alt="gallery5" />
          <img src={gallery6} alt="gallery6" />
          <img src={gallery7} alt="gallery7" />
          <img src={gallery8} alt="gallery8" />
          <img src={gallery9} alt="gallery1" />
          <img src={gallery10} alt="gallery2" />
          <img src={gallery11} alt="gallery3" />
          <img src={gallery12} alt="gallery4" />
          <img src={gallery13} alt="gallery5" />
          <img src={gallery14} alt="gallery6" />
          <img src={gallery15} alt="gallery7" />
          <img src={gallery16} alt="gallery8" />
          <img src={gallery17} alt="gallery1" />
          <img src={gallery18} alt="gallery2" />
          <img src={gallery19} alt="gallery3" />
          <img src={gallery20} alt="gallery4" />
          <img src={gallery21} alt="gallery5" />
          <img src={gallery22} alt="gallery6" />
          <img src={gallery23} alt="gallery7" />
          <img src={gallery24} alt="gallery8" />
        </div>
      </div>

      <WhiteFooter />
    </div>
  );
};

export default Gallery;
