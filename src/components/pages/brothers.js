import React, { useState } from "react";
import "../../style/brothers.css";
import RedFooter from "../footers/redFooter.js";

import BrotherCategory from "./brothersComponents/brotherCategory";

const Brothers = () => {
  const [brotherCategory, setBrotherCategory] = useState("Actives");

  function setCategory(event) {
    const categories = document.querySelectorAll(".category");
    categories.forEach((category) => {
      category.classList.remove("active");
    });
    event.target.classList.add("active");
    setBrotherCategory(event.target.innerHTML);
  }

  return (
    <div className="brothers -mt-20 h-full w-full">
      <div className="banner h-screen w-screen flex justify-center items-center bg-cover bg-center bg-fixed">
        <div className="bannerText absolute text-center">
          <h1>OUR BROTHERS</h1>
          <h3>of the Epsilon Delta Chapter</h3>
        </div>
      </div>

      <div className="content w-full">
        <div className="categories flex flex-row items-center justify-center">
          <h1 className="category text-center font-extrabold cursor-pointer" onClick={setCategory}>
            Leadership
          </h1>
          <h1 className="category active text-center font-extrabold cursor-pointer" onClick={setCategory}>
            Actives
          </h1>
          <h1 className="category text-center font-extrabold cursor-pointer" onClick={setCategory}>
            Alumni
          </h1>
        </div>

        <div
          className={`w-full flex flex-col items-center justify-center ${
            brotherCategory === "Leadership" ? "" : "hidden"
          }`}
          id="leadership"
        >
          <BrotherCategory categoryName="Leadership"></BrotherCategory>
        </div>

        <div
          className={`w-full flex flex-col items-center justify-center ${
            brotherCategory === "Actives" ? "" : "hidden"
          }`}
          id="actives"
        >
          <BrotherCategory categoryName="Actives"></BrotherCategory>
        </div>

        <div
          className={`w-full flex flex-col items-center justify-center ${
            brotherCategory === "Alumni" ? "" : "hidden"
          }`}
          id="alumni"
        >
          <BrotherCategory categoryName="Alumni"></BrotherCategory>
        </div>
        
      </div>

      <RedFooter />
    </div>
  );
};

export default Brothers;
