import React, { useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import $ from "jquery";
import ArchiveMedia from "./ArchiveMedia";

function Archives(props) {
  const { category } = props.match.params;

  const program = [
    { id: 1, name: "All programs", cat: "program" },
    { id: 2, name: "Saturdays @ Swastika", cat: "saturdaysatswastika" },
    { id: 3, name: "Music By the Lake", cat: "musicbythelake" },
    { id: 4, name: "Kalakrida", cat: "kalakrida" },
    { id: 5, name: "Swastika School of Dance", cat: "swastikaschoolofdance" },
    { id: 6, name: "Shows", cat: "shows" },
    { id: 7, name: "Workshops", cat: "workshop" },
    { id: 8, name: "ADHOC Program", cat: "adhocprograms" },
    { id: 9, name: "Know your Art", cat: "knowyourart" },
  ];
  const yearO = [
    { id: 1, name: "2021" },
    { id: 2, name: "2020" },
    { id: 3, name: "2019" },
    { id: 4, name: "2018" },
    { id: 5, name: "2017" },
    { id: 6, name: "2016" },
    { id: 7, name: "2015" },
  ];
  function choice(category = "program") {
    switch (category) {
      case "saturdaysatswastika":
        return program[1];
      case "musicbythelake":
        return program[2];
      case "kalakrida":
        return program[3];
      case "swastikaschoolofdance":
        return program[4];
      case "shows":
        return program[5];
      default:
        return program[0];
    }
  }
  const [selectedProgram, setSelectedProgram] = useState(
    category ? choice(category) : program[0]
  );
  const [selectedYear, setSelectedYear] = useState(yearO[0]);

  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };
  const resize = () => {
    $("#sidebar").addClass("active");
  };

  return (
    <div class="">
      <div className="md:ml-5">
        <div
          class="container-fluid justify-content-center px-0"
          onMouseDown={resize}
        >
          <div className="py-5 md:pl-64 md:pr-32 xs:px-5 xs:pl-10 justify-start">
            <div className="">
              <div className="flex flex-col justify-start font-medium md:text-xl text-lg mb-3 -ml-2">
                <div className="flex justify-between">
                  <span className="md:-ml-0">ARCHIVES</span>
                  <div>
                    <span className="pr-2 absolute md:right-48 -right-8 md:mt-0 mt-10 text-right">
                      {/* Program <KeyboardArrowDownIcon /> */}
                      <Listbox
                        as="div"
                        value={selectedProgram}
                        className="listBox  z-2  text-lg"
                        onChange={setSelectedProgram}
                      >
                        <Listbox.Button className="focus:outline-none md:mb-1 md:mr-0 mr-10">
                          {selectedProgram.name + " ▾"}
                        </Listbox.Button>
                        <Listbox.Options className="dropOpC relative bg-ahum-brown-collage md:-right-10 md:pt-1 rounded-md hover:cursor-pointer text-lg md:mr-0 mr-10">
                          {program.map((person) => (
                            <Listbox.Option
                              className="dropOptions py-1.5 px-2.5 text-base"
                              key={person.id}
                              value={person}
                            >
                              {person.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </span>

                    <span
                      className="text-right font font-sans absolute md:right-20 right-4"
                      data-aos="fade-up"
                    >
                      <Listbox
                        as="div"
                        value={selectedYear}
                        onChange={setSelectedYear}
                        className="listBox  z-2  text-lg"
                      >
                        <Listbox.Button className=" focus:outline-none md:mb-1">
                          {selectedYear.name + " ▾"}
                        </Listbox.Button>
                        <Listbox.Options className="dropOpC relative bg-ahum-brown-collage opacity-90 rounded-md -right-1 ">
                          {yearO.map((person) => (
                            <Listbox.Option
                              className="dropOptions py-1.5 px-2.5 md:text-base"
                              key={person.id}
                              value={person}
                            >
                              {person.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </span>
                  </div>
                </div>
              </div>

              <span className="ml-2.5 text-2xl font-medium">
                {selectedYear.name}
              </span>
            </div>
            <div className="flex flex-row h-full w-full mt-18  ml-4 ">
              {/* this is the fuckin line */}

              <div
                className="bg-black  ml-3 archiveLine  "
                style={{
                  width: "2.5px",
                  marginRight: 1,
                  // make a css file and put mediaquery fr phones marginright:3
                }}
              ></div>
              <div className="my-5">
                {
                  <ArchiveMedia
                    year={selectedYear.name}
                    category={selectedProgram.cat}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archives;
