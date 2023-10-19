import React from "react";
import "../../../style/brotherCard.css";
import { AiOutlineClose } from "react-icons/ai";
import brothers from "../../../activeData/info/brothers.json";

const BrotherCard = ({ name, setState }) => {
  let responded = true;
  if (brothers[name]["TT"] === "") {
    responded = false;
  }

  const major = brothers[name]["Major"];
  const graduation = brothers[name]["Graduation"];
  const career = brothers[name]["Career"];
  const TT = brothers[name]["TT"];
  const memory = brothers[name]["Favorite Memory"];
  const interests = brothers[name]["Interests"];
  const pronouns = brothers[name]["Pronouns"];
  const webp = brothers[name]["Image"]
  const imagePath = require(`../../../activeData/portraits/${webp}`);

  return (
    <div className="card">
      <div className="cardContainer">
        <AiOutlineClose id="closeCard" onClick={() => setState("")} />
        <div className="portraitContainer">
          <div className="portrait">
            <img src={imagePath} alt="brotherImage"></img>
          </div>
        </div>
        <div className="infoContainer">
          <div className="nameSection">
            <h3>Brother</h3>
            <h1>{name}</h1>
            <h3 id="pronouns">{pronouns}</h3>
          </div>
          <div className="responseSection">
            <h2>Year</h2>
            <h3>{graduation}</h3>
            <h2>Major</h2>
            <h3>{major}</h3>
            {responded && (<><h2>What are your professional goals and aspirations?</h2>
            <h3>{career}</h3>
            <h2>
              How has Theta Tau helped you both professionally and personally?
            </h2>
            <h3>{TT}</h3>
            <h2>What are your favorite memories in Theta Tau?</h2>
            <h3>{memory}</h3>
            <h2>
              Tell us about your personal background and any hobbies you have!
            </h2>
            <h3>{interests}</h3></>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrotherCard;
