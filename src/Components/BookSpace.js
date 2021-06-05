import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./Navbar";

import $ from "jquery";
import ImageZoom from "react-medium-image-zoom";

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
import TopLogoBar from "./TopLogoBar";

function BookSpace() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };
  const resize = () => {
    $("#sidebar").addClass("active");
  };

  const photos = [
    {
      src: thumb1,
      width: 4,
      height: 3,
    },
    {
      src: thumb2,
      width: 1,
      height: 1,
    },
    {
      src: thumb3,
      width: 1,
      height: 1,
    },
    {
      src: thumb5,
      width: 1,
      height: 1,
    },
    {
      src: thumb6,
      width: 1,
      height: 1,
    },
    {
      src: thumb4,
      width: 1,
      height: 1,
    },
  ];

  return (
    <div class="wrapper">
      <Navbar />
      <div className="p-0">
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
            <div className="py-5">
              {/* Top Content */}
              <div className="flex lg:mx-32 mx-10 pl-24 flex-col items-center">
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
              <div className="bg-ahum-brown-collage mt-10 h-max pl-24 py-10 lg:py-20">
                <div className="lg:mx-32 mx-10">
                  <div className="flex flex-row justify-center items-center">
                    <div className="mr-4">
                      <ImageZoom
                        image={{
                          src: thumb1,
                          alt: "Golden Gate Bridge",
                        }}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex flex-row justify-center items-center">
                        <div className="mr-4">
                          <ImageZoom
                            image={{
                              src: thumb2,
                              alt: "Golden Gate Bridge",
                            }}
                          />
                        </div>
                        <div className="mr-4">
                          <ImageZoom
                            image={{
                              src: thumb3,
                              alt: "Golden Gate Bridge",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="mr-4">
                          <ImageZoom
                            image={{
                              src: thumb5,
                              alt: "Golden Gate Bridge",
                            }}
                          />
                        </div>
                        <div className="mr-4">
                          <ImageZoom
                            image={{
                              src: thumb6,
                              alt: "Golden Gate Bridge",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <ImageZoom
                        image={{
                          src: thumb4,
                          alt: "Golden Gate Bridge",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div className="lg:mx-32 mx-10 mt-12 pl-8 ">
                {/* for phones */}
                <h2 className="text-2xl font-semibold text-center lg:hidden">
                  Facilities
                </h2>
                {/* for normal displays */}
                <h2 className="text-2xl font-semibold hidden lg:flex">
                  Facilities
                </h2>
                <div className="mt-10 flex flex-wrap justify-between">
                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2">
                    <div className="rounded-full bg-ahum-brown-collage h-32 w-32 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-3/6"
                        alt="facilities wifi"
                        src={facility1}
                      />
                    </div>
                    <span className="font-medium my-3 text-xl">WiFi</span>
                  </div>

                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2">
                    <div className="rounded-full bg-ahum-brown-collage h-32 w-32 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-3/6"
                        alt="facilities 3 Microphones"
                        src={facility2}
                      />
                    </div>
                    <span className="font-medium my-3 text-xl">
                      3 Microphones
                    </span>
                  </div>

                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2">
                    <div className="rounded-full bg-ahum-brown-collage h-32 w-32 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-3/6"
                        alt="facilities JBL EON Speakers"
                        src={facility3}
                      />
                    </div>
                    <span className="font-medium my-3 text-xl">
                      JBL EON Speakers
                    </span>
                  </div>

                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2">
                    <div className="rounded-full bg-ahum-brown-collage h-32 w-32 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-3/6"
                        alt="facilities 4 LED Warm Lights"
                        src={facility4}
                      />
                    </div>
                    <span className="font-medium my-3 text-xl">
                      4 LED Warm Lights
                    </span>
                  </div>

                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2">
                    <div className="rounded-full bg-ahum-brown-collage h-32 w-32 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-3/6"
                        alt="facilities Pantry"
                        src={facility5}
                      />
                    </div>
                    <span className="font-medium my-3 text-xl">Pantry</span>
                  </div>

                  <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2">
                    <div className="rounded-full bg-ahum-brown-collage h-32 w-32 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                      <img
                        className="w-3/6"
                        alt="facilities Restroom"
                        src={facility6}
                      />
                    </div>
                    <span className="font-medium my-3 text-xl">Restroom</span>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <button className="text-lg my-10 h-10 bg-ahum-maroon w-max items-center focus:outline-none flex px-5 rounded-full text-white transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl">
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default BookSpace;
