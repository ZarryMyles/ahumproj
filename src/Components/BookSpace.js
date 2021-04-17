import React, { useEffect } from "react";
import Navbar from "./Navbar";
import logo from "../Images/logo.png";
import $ from "jquery";

import facility1 from "../assets/images/wifi-signal.png";
import facility2 from "../assets/images/microphone.png";
import facility3 from "../assets/images/speaker.png";
import facility4 from "../assets/images/light-bulb.png";
import facility5 from "../assets/images/pantry.png";
import facility6 from "../assets/images/toilet-signs.png";

import thumb1 from "../assets/images/1-thumb.jpg";
import thumb2 from "../assets/images/4-thumb.jpg";
import thumb3 from "../assets/images/6-thumb.jpg";
import thumb4 from "../assets/images/7-thumb.jpg";
import thumb5 from "../assets/images/8-thumb.jpg";
import thumb6 from "../assets/images/9-thumb.jpg";

function BookSpace() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };

  const ImageViewer = () => {
    return <dev>Hello</dev>;
  };

  const images = [{ thumb4 }, { thumb5 }];

  const IMG_SET = [
    {
      src: "../assets/images/1-thumb.jpg",
      caption: "A forest",
      // As an array
      srcSet: ["../assets/images/1-thumb.jpg 1024w"],
    },
    {
      src: "../assets/images/1-thumb.jpg",
      // As a string
      srcSet:
        "../assets/images/1-thumb.jpg 1024w,../assets/images/1-thumb.jpg 800w, ../assets/images/1-thumb.jpg 500w, ../assets/images/1-thumb.jpg 320w",
    },
  ];

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
            <div className="py-5">
              {/* Top Content */}
              <div className="flex mx-32 flex-col items-center">
                <h1 className="text-2xl font-semibold">Book Our Space</h1>
                <p className="text-black py-3">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage. Contrary to popular belief, Lorem
                  Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000
                  years old. Richard McClintock
                </p>
              </div>

              {/* Collage */}
              <div className="bg-ahum-brown-collage mt-10 h-max py-20">
                <div className="mx-32">
                  <div className="grid grid-cols-9 gap-8 flex items-center">
                    <div className="col-span-2 flex items-right">
                      <img className="w-11/12" src={thumb1} />
                    </div>
                    <div className="col-span-5 -ml-6">
                      <div className="grid gap-8 grid-rows-2">
                        <div className="row-span-1">
                          <div className="grid gap-8 grid-cols-6 flex justify-center items-center">
                            <div className="col-span-2">
                              <img className="" src={thumb2} />
                            </div>
                            <div className="col-span-4">
                              <img className="" src={thumb3} />
                            </div>
                          </div>
                        </div>
                        <div className="row-span-1">
                          <div className="grid gap-8 grid-cols-6 flex justify-center items-center">
                            <div className="col-span-4">
                              <img className="" src={thumb5} />
                            </div>
                            <div className="col-span-2">
                              <img className="" src={thumb6} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <img className="w-11/12" src={thumb4} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div className="mx-32 mt-12">
                <h2 className="text-2xl font-semibold">Facilities</h2>

                <div className="mt-10 flex justify-between">
                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105">
                    <div className="rounded-full bg-ahum-brown-collage h-44 w-44 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-4/6"
                        alt="facilities wifi"
                        src={facility1}
                      />
                    </div>
                    <span className="font-medium m-3 text-xl">WiFi</span>
                  </div>

                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105">
                    <div className="rounded-full bg-ahum-brown-collage h-44 w-44 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-4/6"
                        alt="facilities 3 Microphones"
                        src={facility2}
                      />
                    </div>
                    <span className="font-medium m-3 text-xl">
                      3 Microphones
                    </span>
                  </div>

                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105">
                    <div className="rounded-full bg-ahum-brown-collage h-44 w-44 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-4/6"
                        alt="facilities JBL EON Speakers"
                        src={facility3}
                      />
                    </div>
                    <span className="font-medium m-3 text-xl">
                      JBL EON Speakers
                    </span>
                  </div>

                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105">
                    <div className="rounded-full bg-ahum-brown-collage h-44 w-44 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-4/6"
                        alt="facilities 4 LED Warm Lights"
                        src={facility4}
                      />
                    </div>
                    <span className="font-medium m-3 text-xl">
                      4 LED Warm Lights
                    </span>
                  </div>

                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105">
                    <div className="rounded-full bg-ahum-brown-collage h-44 w-44 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-4/6"
                        alt="facilities Pantry"
                        src={facility5}
                      />
                    </div>
                    <span className="font-medium m-3 text-xl">Pantry</span>
                  </div>

                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105">
                    <div className="rounded-full bg-ahum-brown-collage h-44 w-44 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-4/6"
                        alt="facilities Restroom"
                        src={facility6}
                      />
                    </div>
                    <span className="font-medium m-3 text-xl">Restroom</span>
                  </div>
                </div>

                <button className="text-lg my-10 h-10 bg-ahum-maroon w-max items-center focus:outline-none flex px-5 rounded-full text-white transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl">
                  Enquire
                </button>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default BookSpace;
