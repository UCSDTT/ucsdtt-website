import React, { useState } from "react";
import "../../../style/brotherSection.css";
import categories from "../../../activeData/info/categories.json";
import brothers from "../../../activeData/info/brothers.json";
import BrotherCard from "./brotherCard";

const BrotherSection = ({ categoryName, sectionName }) => {
  const [displayCard, setDisplayCard] = useState("");

  function displayBrothers(category, section) {
    const brothersList = categories[category][section];
    return (
      <div className="imagegrid grid">
        {brothersList.map((entry) => {
          const positions = entry.split(":");
          const brotherName = positions[positions.length - 1];
          const webp = brothers[brotherName]["Image"];
          const imagePath = require(`../../../activeData/portraits/${webp}`);
          return (
            <div className="brother flex flex-col items-center text-left">
              <img src={imagePath} alt={brotherName} onClick={() => setDisplayCard(brotherName)}></img>
                {positions.length > 1 && (
                  <><div className="positions pt-1">
                    {positions.slice(0, -1).map((pos) => (
                      <h1>{pos}</h1>
                    ))}
                  </div></>
                )}
                <h1 className="name pt-1 text-black">{brotherName}</h1>
            </div>   
          );
        })}
      </div>
    )

  }
  
  return (
    <div className="section flex flex-col justify-center items-center">
      <div className="header w-full flex flex-row items-center">
        <div className="title">
          <h1>{sectionName}</h1>
        </div>
        <div className="bar"></div>
      </div>
      
      {displayBrothers(categoryName, sectionName)}

      {displayCard !== "" && (
        <><BrotherCard name={displayCard} setState={setDisplayCard} /></>
      )}

    </div>
  )
};

export default BrotherSection;