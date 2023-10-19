import React from "react";
import categories from "../../../activeData/info/categories.json";
import BrotherSection from "./brotherSection";

const BrotherCategory = ({ categoryName }) => {
  function displaySections(category) {
    const sections = categories[category];
    return Object.keys(sections).map((section) => (
      <BrotherSection categoryName={category} sectionName={section} key={section}/>
    ));
  }

  return (
    <>{displaySections(categoryName)}</>
  );
};

export default BrotherCategory;
