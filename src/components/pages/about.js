import React from "react";
import "../../style/about.css";
import RedFooter from "../footers/redFooter.js";

const About = () => {
  return (
    <div className="about flex flex-col items-center">
      {/* hero */}
      <div className="banner">
        <div className="bannerText px-2">
          <h1>ABOUT US</h1>
          <h3>Learn more about the Epsilon Delta Chapter of Theta Tau!</h3>
        </div>
      </div>

      <div className="body flex flex-col items-center">
        {/* our mission */}
        <div className="flex flex-col py-10 height">
          <div className="flex items-center pb-2">
            <div className="text-4xl sm:text-5xl px-10 text-red-800 abhaya">
              Our Mission
            </div>
            <div className="grow border-2 border-red-800"></div>
          </div>
          <div className="grow flex flex-col-reverse items-center md:flex-row pt-8 md:py-8 md:mb-6 justify-center">
            <div className="bg-flower2 md:bg-flower bg-center bg-no-repeat bg-contain italic w-full md:w-1/2 px-12 md:mr-8">
              <p className="text-lg md:text-2xl py-12 md:h-96 md:py-96 leading-8 md:leading-10 text-center flex flex-row items-center font-extralight italic">
                Our mission is to develop engineers into socially responsible
                professionals and leaders of the industry. Our fraternity
                provides members with unique opportunities for networking,
                professional development, community service, and lifelong
                friendships. We are committed to promoting diversity and
                inclusivity within the engineering community and beyond.
              </p>
            </div>
            <div className="bg-rectangle4 bg-cover bg-left w-full h-96 md:py-96 md:w-1/2 rounded-none md:rounded-l-xl 3xl:rounded-xl"></div>
          </div>
          <div className="">
            <div className="grow border-2 border-red-800"></div>
          </div>
        </div>

        {/* huge photo */}
        <div className="bg-biglittle bg-cover bg-bottom rounded-none w-screen height"></div>

        {/* our history */}
        <div className="flex flex-col py-10 height">
          <div className="flex items-center pb-2">
            <div className="text-4xl sm:text-5xl px-10 text-red-800 abhaya">
              Our History
            </div>
            <div className="grow border-2 border-red-800"></div>
          </div>
          <div className="grow flex flex-col-reverse items-center md:flex-row pt-8 md:py-8 md:mb-6 justify-center">
            <div className="bg-flower2 md:bg-flower bg-center bg-no-repeat bg-contain italic w-full md:w-1/2 px-12 md:mr-8">
              <p className="text-lg md:text-2xl py-12 md:h-96 md:py-96 leading-8 md:leading-10 text-center flex flex-row items-center font-extralight italic">
                In the Spring of 2009, several students of UCSD’s Jacobs School
                of Engineering felt that there was a lack of engineering
                representation in the Greek community on campus. So, thirteen
                founding fathers took the first step towards establishing a
                chapter of the nation’s oldest and largest professional
                engineering fraternity on the UCSD campus. On November 20th,
                2010, UCSD was installed as the Epsilon Delta Chapter of Theta
                Tau.
              </p>
            </div>
            <div className="bg-biggrass bg-cover bg-center w-full h-96 md:py-96 md:w-1/2 rounded-none md:rounded-l-xl 3xl:rounded-xl"></div>
          </div>
          <div className="">
            <div className="grow border-2 border-red-800"></div>
          </div>
        </div>

        {/* our pillars */}
        <div className="flex flex-col items-center justify-center height">
          <h1 className="text-4xl sm:text-5xl px-10 text-red-800 abhaya">
            Our Pillars
          </h1>
          <div className="pt-10 pb-4 md:pb-10">
            <div className="border w-36 border-red-800 my-5"></div>
          </div>
          <div className="flex flex-col items-start lg:flex-row pb-12 mx-12">
            <div className="flex flex-col items-center pt-8 w-full lg:w-1/3">
              <h1 className="text-3xl sm:text-4xl px-10 text-red-800 abhaya">
                Brotherhood
              </h1>
              <div className="border w-36 border-red-800 my-5"></div>
              <p className="text-lg leading-9 text-center px-12 italic font-extralight">
                We strive to develop bonds between our brothers that will last a
                lifetime.
              </p>
              <div className="bg-handshake bg-cover bg-bottom h-44 w-44"></div>
            </div>
            <div className="flex flex-col items-center pt-8 w-full lg:w-1/3">
              <h1 className="text-3xl sm:text-4xl px-10 text-red-800 abhaya">
                Philanthropy
              </h1>
              <div className="border w-36 border-red-800 my-5"></div>
              <p className="text-lg leading-9 text-center px-12 italic font-extralight">
                We are involved in projects that give back to the community
                around us.
              </p>
              <div className="bg-heart bg-cover bg-bottom h-44 w-44"></div>
            </div>
            <div className="flex flex-col items-center pt-8 w-full lg:w-1/3">
              <h1 className="text-3xl sm:text-4xl px-10 text-red-800 abhaya">
                Professionalism
              </h1>
              <div className="border w-36 border-red-800 my-5"></div>
              <p className="text-lg leading-9 text-center px-12 italic font-extralight">
                We seek to shape one's professional interests to prepare them
                for their life ahead of college.
              </p>
              <div className="bg-tie bg-cover bg-bottom h-36 w-36"></div>
            </div>
          </div>
        </div>
      </div>

      <RedFooter />
    </div>
  );
};

export default About;
