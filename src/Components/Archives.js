import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Listbox, Transition } from "@headlessui/react";
import logo from "../Images/logo.png";
import $ from "jquery";

import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import archives from "../assets/JSON/archives.json";
import ArchiveMedia from "./ArchiveMedia";
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
import TopLogoBar from "./TopLogoBar";

function Archives(props) {
  const { category } = props.match.params;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const program = [
    {
      id: 1,
      name: category ? "Saturdays @ Swastika" : "All programs",
      cat: category ? "saturdaysatswastika" : "program",
    },
    {
      id: 2,
      name: !category ? "Saturdays @ Swastika" : "All programs",
      cat: !category ? "saturdaysatswastika" : "program",
    },
    { id: 3, name: "Music By the Lake", cat: "musicbythelake" },
    { id: 4, name: "Kalakrida", cat: "kalakridi" },
    { id: 5, name: "Swastika School of Dance", cat: "swastikaschoolofdance" },
    { id: 6, name: "Shows", cat: "shows" },
  ];
  const yearO = [
    { id: 1, name: category ? "2021" : "Year" },
    { id: 2, name: !category ? "2021" : "Year" },
    { id: 3, name: "2020" },
    { id: 4, name: "2019" },
    { id: 5, name: "2018" },
    { id: 6, name: "2017" },
  ];
  const [selectedProgram, setSelectedProgram] = useState(program[0]);
  const [selectedYear, setSelectedYear] = useState(yearO[0]);
  const [swastika, setSwastika] = useState(false);
  useEffect(() => {
    if (category === "saturdaysatswastika") setSwastika(true);
  }, []);

  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };
  const resize = () => {
    $("#sidebar").addClass("active");
  };

  return (
    <div class="">
      <Navbar />
      <div id="" className="">
        <div
          class="container-fluid justify-content-center px-0"
          onMouseDown={resize}
        >
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
          <TopLogoBar />

          <>
            <div className="py-5 md:px-64 xs:px-5 xs:pl-10 flex justify-start">
              <div className="">
                <div className="flex flex-col justify-start font-medium md:text-xl text-lg mb-3 -ml-2">
                  <div className="flex justify-between">
                    <span className="md:-ml-7 -ml-6">ARCHIVES</span>{" "}
                    <div className="">
                      <span className="pr-5 text-right">
                        {/* Program <KeyboardArrowDownIcon /> */}
                        <Listbox
                          as="div"
                          value={selectedProgram}
                          className="listBox absolute z-2 right-52"
                          onChange={setSelectedProgram}
                        >
                          <Listbox.Button>
                            {selectedProgram.name + " ▾"}
                          </Listbox.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Listbox.Options className="relative bg-ahum-brown opacity-90 p-3 -right-3 rounded-sm ">
                              {program.map((person) => (
                                <Listbox.Option key={person.id} value={person}>
                                  {person.name}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </Listbox>
                      </span>
                      <a href="#">
                        <span className="text-right">
                          {/* Year <KeyboardArrowDownIcon /> */}
                          <Listbox
                            as="div"
                            value={selectedYear}
                            onChange={setSelectedYear}
                            className="listBox absolute z-2 right-20"
                          >
                            <Listbox.Button>
                              {selectedYear.name + " ▾"}
                            </Listbox.Button>
                            <Listbox.Options className="relative bg-ahum-brown-collage opacity-90 rounded-sm p-3 -right-2">
                              {yearO.map((person) => (
                                <Listbox.Option key={person.id} value={person}>
                                  {person.name}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Listbox>
                        </span>
                      </a>
                    </div>
                  </div>

                  <span className="mt-3">{selectedYear.name}</span>
                </div>

                <div className="flex flex-row h-full">
                  <div
                    className="bg-black h-full ml-3"
                    style={{
                      width: 2,
                      marginRight: 1,
                    }}
                  ></div>
                  <div>
                    {
                      <ArchiveMedia
                        year={selectedYear.name}
                        category={selectedProgram.cat}
                      />
                    }
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
