import React from "react";
import { useState } from "react";
import "../../style/rush.css";
import WhiteFooter from "../footers/whiteFooter.js";
import SingleQuestion from "./SingleQuestion";
import { ttfaq, rushfaq, bidfaq } from "./rushData";
import gem from "../../images/gem.png";
import footerImage from "../../images/rushfooterimage.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Rush = () => {
  const [tt_questions] = useState(ttfaq);
  const [rush_questions] = useState(rushfaq);
  const [bid_questions] = useState(bidfaq);

  return (
    <div className="rush flex flex-col items-center">
      <div className="rushBanner">
        <div className="rushBannerText px-2">
          <h1>RUSH</h1>
          <h3>Come out to rush and discover your community!</h3>
          <div className="discordButton" id="discordMobile">
            <a
              href="https://discord.com/invite/wfPbeq9K"
              target="_blank"
              rel="noopener noreferrer"
              id="discordButton_a"
            >
              <FontAwesomeIcon icon={faDiscord} id="discordIcon" />
              <h2>Join the Server</h2>
            </a>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="rushTimeline">
          <div className="rushTimelineHeader">
            <div className="text-4xl sm:text-5xl px-10 text-red-800 abhaya">
              Spring Rush 2025
            </div>
            <img src={gem} alt="gem"></img>
            <div className="grow border-2 border-red-800"></div>
          </div>

          <div className="rushTimeLineSplit">
            <div className="splitHalf" id="splitHalf1">
              <div className="timeline">
                <div className="date">
                  <div className="dateBlock">
                    <h1>03/31/25</h1>
                  </div>
                  <div className="vertLine">
                    <h1>INFO NIGHT</h1>
                    <h3>7 PM | Meet @ Triton Statue</h3>
                    <p>
                      Come learn about the fraternity and meet the Brothers!
                    </p>
                  </div>
                </div>

                <div className="date">
                  <div className="dateBlock">
                    <h1>04/01/25</h1>
                  </div>
                  <div className="vertLine">
                    <h1>PROFESSIONAL NIGHT</h1>
                    <h3>7 PM | Meet @ Triton Statue</h3>
                    <p>
                      Improve your resume and gain insight from alumni in the
                      industry. Professional attire and a hard copy of your
                      resume are recommended.
                    </p>
                  </div>
                </div>

                <div className="date">
                  <div className="dateBlock">
                    <h1>04/02/25</h1>
                  </div>
                  <div className="vertLine">
                    <h1>ENGINEERING NIGHT</h1>
                    <h3>7 PM | Meet @ Triton Statue</h3>
                    <p>Play engineering games with the Brothers!</p>
                  </div>
                </div>

                <div className="date">
                  <div className="dateBlock">
                    <h1>04/03/25</h1>
                  </div>
                  <div className="vertLine">
                    <h1>THETA TAU NIGHT</h1>
                    <h3>TBD</h3>
                    <p>Invite Only.</p>
                  </div>
                </div>

                <div className="date">
                  <div className="dateBlock">
                    <h1>04/04/25</h1>
                  </div>
                  <div className="vertLine" id="endVertLine">
                    <h1>INTERVIEWS</h1>
                    <h3>TBD</h3>
                    <p>Invite Only.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="splitHalf" id="splitHalf2">
              <div className="rightImage">
                <div className="info">
                  <h1 className="text-4xl sm:text-5xl">Leap of Faith!</h1>

                  <p>
                    We will be holding rush Week 1 of Spring Quarter 2025. Come
                    out to Library Walk to meet our Brothers and learn more
                    about Rush!
                  </p>

                  {/* <p>
                    Don't forget to join the Rush discord for any other
                    announcements!
                  </p>

                  <div className="discordButton">
                    <a
                      href="https://discord.com/invite/wfPbeq9K"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="discordButton_a"
                    >
                      <FontAwesomeIcon icon={faDiscord} id="discordIcon" />
                      <h2>Join the Server</h2>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="grow border-2 border-red-800" id="line2-1"></div>
        </div>

        <div className="grow border-2 border-red-800" id="line2-2"></div>

        <div className="rushProcessMobile">
          <h1 className="text-4xl sm:text-5xl px-10 text-red-800 abhaya rushProcessText">
            Rush Process
          </h1>
          <div className="timeline">
            <div className="date">
              <div className="dateBlock">
                <h1>EXPLORE</h1>
              </div>
              <div className="vertLine">
                <p>Join us for a whole week of rush events!</p>
              </div>
            </div>

            <div className="date">
              <div className="dateBlock">
                <h1>INTERVIEW</h1>
              </div>
              <div className="vertLine">
                <p>
                  The Brothers of Theta Tau would like to learn more about you
                  through a formal interview.
                </p>
              </div>
            </div>

            <div className="date">
              <div className="dateBlock">
                <h1>BID</h1>
              </div>
              <div className="vertLine">
                <p>
                  If the Brothers of Theta Tau decide on you, an invitation will
                  be sent to you.
                </p>
              </div>
            </div>

            <div className="date">
              <div className="dateBlock">
                <h1>PROJECTS</h1>
              </div>
              <div className="vertLine" id="endVertLine">
                <p>
                  Once you accept your bid, prepare to spend a large amount of
                  time and effort to complete the quarter-long projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rushProcess">
          <h1 className="text-4xl sm:text-5xl px-10 text-red-800 abhaya rushProcessText">
            Rush Process
          </h1>
          <div className="whiteLine">
            <span className="dot" id="dot1">
              <div className="lineText">
                <p id="lineText1">Join us for a whole week of rush events!</p>
                <div className="bubble" id="bubble1">
                  <h1>EXPLORE</h1>
                </div>
                <div className="arrow-down"></div>
              </div>
            </span>

            <span className="dot" id="dot2">
              <div className="lineText">
                <p id="lineText2">
                  The Brothers of Theta Tau would like to learn more about you
                  through a formal interview.
                </p>
                <div className="bubble" id="bubble2">
                  <h1>INTERVIEW</h1>
                </div>

                <div className="arrow-up"></div>
              </div>
            </span>

            <span className="dot" id="dot3">
              <div className="lineText">
                <p id="lineText3">
                  If the Brothers of Theta Tau decide on you, an invitation will
                  be sent to you.
                </p>
                <div className="bubble" id="bubble3">
                  <h1>BID</h1>
                </div>
                <div className="arrow-down"></div>
              </div>
            </span>

            <span className="dot" id="dot4">
              <div className="lineText">
                <p id="lineText4">
                  Once you accept, prepare to spend a large amount of time and
                  effort to complete the quarter-long projects.
                </p>
                <div className="bubble" id="bubble4">
                  <h1>PROJECTS</h1>
                </div>
                <div className="arrow-up"></div>
              </div>
            </span>
          </div>
        </div>

        <div className="faq_section">
          <div className="faq_header">
            <div className="text-4xl sm:text-5xl px-10 text-red-800 abhaya">
              FAQ
            </div>
            <img src={gem} alt="gem"></img>
            <div className="grow border-2 border-red-800" id="faq_line"></div>
          </div>

          <div className="faq_accordion">
            <div className="faq_block" id="faqTT">
              <div className="accordionHeader" id="faq_tt_header">
                <div className="text-4xl sm:text-4xl px-10 text-red-800 abhaya">
                  Theta Tau
                </div>
                <div
                  className="grow border-2 border-red-800"
                  id="faq_line"
                ></div>
              </div>

              <div className="faqAnswers">
                {tt_questions.map((question) => (
                  <SingleQuestion {...question} />
                ))}
              </div>
            </div>

            <div className="faq_block" id="faqRush">
              <div className="accordionHeader" id="faq_rush_header">
                <div className="text-4xl sm:text-4xl px-10 text-red-800 abhaya">
                  Rush
                </div>
                <div
                  className="grow border-2 border-red-800"
                  id="faq_line"
                ></div>
              </div>

              <div className="faqAnswers">
                {rush_questions.map((question) => (
                  <SingleQuestion {...question} />
                ))}
              </div>
            </div>

            <div className="faq_block" id="faqBid">
              <div className="accordionHeader" id="faq_rush_header">
                <div className="text-4xl sm:text-4xl px-10 text-red-800 abhaya">
                  Bid
                </div>
                <div
                  className="grow border-2 border-red-800"
                  id="faq_line"
                ></div>
              </div>

              <div className="faqAnswers">
                {bid_questions.map((question) => (
                  <SingleQuestion {...question} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-5"></div>

        {/* <div className="footerImage"></div> */}
        {/* <img className="footerImage" src={footerImage}>

        </img> */}
      </div>
      <div className="footerImage">
        <h1>Questions about Rush?</h1>
        <a href="mailto:nozhou@ucsd.edu, ash006@ucsd.edu">
          Shoot our rush chairs an email
        </a>
      </div>

      <WhiteFooter />
    </div>
  );
};

export default Rush;
