import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./Navbar";
import logo from "../Images/logo.png";
import $ from "jquery";

import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// import Timeline from "@material-ui/lab/Timeline";
// import TimelineItem from "@material-ui/lab/TimelineItem";
// import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
// import TimelineOppositeContent from "@material-ui/lab/TimelineSeparator";
// import TimelineConnector from "@material-ui/lab/TimelineConnector";
// import TimelineContent from "@material-ui/lab/TimelineContent";
// import TimelineDot from "@material-ui/lab/TimelineDot";

import img1 from "../assets/images/Image_004.png";
import img2 from "../assets/images/Image_006.png";
import img3 from "../assets/images/Image_007.png";
import img4 from "../assets/images/Image_008.png";

function Archives() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };

  return (
    <div class="wrapper">
      <Navbar />
      <div id="content" className="p-0">
        <div class="container-fluid justify-content-center px-0">
          <button
            type="button"
            id="sidebarCollapse"
            class="btn "
            style={{
              background: "transparent",
              position: "fixed",
              top: "10px",
              left: 0,
              zIndex: 1000,
            }}
            onClick={handleToggle}
          >
            <i class="fas fa-align-left"></i>
          </button>
          <div style={{ height: 125 }}>
            <div
              className="text-center "
              style={{
                height: 125,
                background: "white",
                position: "fixed",
                height: 125,
                width: "100%",
                zIndex: 999,
              }}
            >
              <img
                className="fixed-top"
                src={logo}
                style={{
                  height: 125,
                  width: 187.5,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          </div>

          <>
            <div className="py-5 md:px-64 xs:px-5 xs:pl-10 flex justify-start">
              <div className="">
                <div className="flex flex-col justify-start font-bold md:text-xl text-lg mb-3 -ml-2">
                  <div className="flex justify-between">
                    <span className="md:-ml-7 -ml-6">ARCHIVES</span>{" "}
                    <div className="">
                      <a href="#">
                        <span className="pr-5">
                          Program <KeyboardArrowDownIcon />
                        </span>
                      </a>
                      <a href="#">
                        <span className="text-right">
                          Year <KeyboardArrowDownIcon />
                        </span>
                      </a>
                    </div>
                  </div>

                  <span>2020</span>
                </div>
                <div className="flex flex-row h-full">
                  <div className="bg-black h-5/6 w-2 ml-3"></div>
                  <div>
                    <div className="md:grid xs:pl-5 md:pl-0 grid-cols-12 gap-4 items-center py-4">
                      <div className="rounded-full flex bg-black h-7 w-7 col-span-1 md:-ml-4 xs:-ml-9"></div>
                      <div className="col-span-2 font-semibold text-lg xs:pb-3 md:pb-0 -mt-7 md:pb-0 md:-mt-0">
                        November 19
                      </div>
                      <div className="col-span-5">
                        <img src={img1} />
                      </div>
                      <div className="col-span-4 text-center font-semibold text-lg">
                        <span className="py-1 block">‘NATYA RASA’</span>
                        <span className="py-1 block">
                          Artists : lore ipsum, lore ipsum
                        </span>
                        <span className="py-1 block text-justify">
                          Lorem ipsum is a dummy text used for filling up
                          content on websites, apps etc. Its very useful when we
                          don’t have data.
                        </span>
                        <span className="px-3 py-2">
                          <InstagramIcon style={{ fontSize: 45 }} />{" "}
                        </span>{" "}
                        <span className="px-3 py-2 ">
                          <YouTubeIcon style={{ fontSize: 55 }} />
                        </span>
                      </div>
                    </div>

                    <div className="md:grid xs:pl-5 md:pl-0 grid-cols-12 gap-4 items-center py-4">
                      <div className="rounded-full flex bg-black h-7 w-7 col-span-1 md:-ml-4 xs:-ml-9"></div>
                      <div className="col-span-2 font-semibold text-lg xs:pb-3 md:pb-0 -mt-7 md:pb-0 md:-mt-0">
                        November 19
                      </div>
                      <div className="col-span-5">
                        <img src={img2} />
                      </div>
                      <div className="col-span-4 text-center font-semibold text-lg">
                        <span className="py-1 block">‘NATYA RASA’</span>
                        <span className="py-1 block">
                          Artists : lore ipsum, lore ipsum
                        </span>
                        <span className="py-1 block text-justify">
                          Lorem ipsum is a dummy text used for filling up
                          content on websites, apps etc. Its very useful when we
                          don’t have data.
                        </span>
                        <span className="px-3 py-2">
                          <InstagramIcon style={{ fontSize: 45 }} />{" "}
                        </span>{" "}
                        <span className="px-3 py-2 ">
                          <YouTubeIcon style={{ fontSize: 55 }} />
                        </span>
                      </div>
                    </div>

                    <div className="md:grid xs:pl-5 md:pl-0 grid-cols-12 gap-4 items-center py-4">
                      <div className="rounded-full flex bg-black h-7 w-7 col-span-1 md:-ml-4 xs:-ml-9"></div>
                      <div className="col-span-2 font-semibold text-lg xs:pb-3 md:pb-0 -mt-7 md:pb-0 md:-mt-0">
                        November 19
                      </div>
                      <div className="col-span-5">
                        <img src={img3} />
                      </div>
                      <div className="col-span-4 text-center font-semibold text-lg">
                        <span className="py-1 block">‘NATYA RASA’</span>
                        <span className="py-1 block">
                          Artists : lore ipsum, lore ipsum
                        </span>
                        <span className="py-1 block text-justify">
                          Lorem ipsum is a dummy text used for filling up
                          content on websites, apps etc. Its very useful when we
                          don’t have data.
                        </span>
                        <span className="px-3 py-2">
                          <InstagramIcon style={{ fontSize: 45 }} />{" "}
                        </span>{" "}
                        <span className="px-3 py-2 ">
                          <YouTubeIcon style={{ fontSize: 55 }} />
                        </span>
                      </div>
                    </div>

                    <div className="md:grid xs:pl-5 md:pl-0 grid-cols-12 gap-4 items-center py-4">
                      <div className="rounded-full flex bg-black h-7 w-7 col-span-1 md:-ml-4 xs:-ml-9"></div>
                      <div className="col-span-2 font-semibold text-lg xs:pb-3 md:pb-0 -mt-7 md:pb-0 md:-mt-0">
                        November 19
                      </div>
                      <div className="col-span-5">
                        <img src={img4} />
                      </div>
                      <div className="col-span-4 text-center font-semibold text-lg">
                        <span className="py-1 block">‘NATYA RASA’</span>
                        <span className="py-1 block">
                          Artists : lore ipsum, lore ipsum
                        </span>
                        <span className="py-1 block text-justify">
                          Lorem ipsum is a dummy text used for filling up
                          content on websites, apps etc. Its very useful when we
                          don’t have data.
                        </span>
                        <span className="px-3 py-2">
                          <InstagramIcon style={{ fontSize: 45 }} />{" "}
                        </span>{" "}
                        <span className="px-3 py-2 ">
                          <YouTubeIcon style={{ fontSize: 55 }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Timeline align="alternate">
                <TimelineItem>

                  <TimelineSeparator>
                    <TimelineConnector className="" />
                  </TimelineSeparator>
                  <TimelineContent />
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    
                    <TimelineConnector />
                  </TimelineSeparator>
                  

                  <TimelineContent><div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-2">November 19</div>
                    <div className="col-span-5">
                      <img src={img1}/>
                    </div>
                    <div className="col-span-5">
                    ‘NATYA RASA’
                    Artists : lore ipsum , lore ipsum
                    Lorem ipsum is a dummy text used for
filling up content on websites, apps etc.
Its very useful when we don’t have data
                    </div>
                    
                    </div></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>December 19</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>January 19</TimelineContent>
                </TimelineItem>
              </Timeline> */}
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Archives;
