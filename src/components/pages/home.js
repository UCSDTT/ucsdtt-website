import React from "react";
//import ConnectButton from "../connectButton/connectButton";
import "../../style/home.css";
import Landing from "./homeComponents/landing";
import Community from "./homeComponents/community";
import GraduationPic from "./homeComponents/graduationPic";
import PlacesWorked from "./homeComponents/placesWorked";
import BigLittle from "./homeComponents/bigLittle";
import Alumni from "./homeComponents/alumni";
import RedFooter from "./../footers/redFooter";

const Home = () => {
  return (
    <div className="wrapper">
      <Landing />
      <Community />
      <GraduationPic />
      <PlacesWorked />
      <BigLittle />
      <Alumni />
      <RedFooter />
    </div>
  );
};

export default Home;
