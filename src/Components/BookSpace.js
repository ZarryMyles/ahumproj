import React from "react";
import ImageZoom from "react-medium-image-zoom";
import Carousel from "react-elastic-carousel";
import "styled-components";

import facility1 from "../assets/images/wifi-signal.png";
import facility2 from "../assets/images/microphone.png";
import facility3 from "../assets/images/speaker.png";
import facility4 from "../assets/images/light-bulb.png";
import facility5 from "../assets/images/pantry.png";
import facility6 from "../assets/images/toilet-signs.png";

function BookSpace() {
  const isPhone = window.innerWidth < 700;

  return (
    <div class="wrapper ">
      <div className="p-0">
        <div class="container-fluid justify-content-center px-0 font-montserrat">
          <div className="py-5">
            {/* Top Content */}
            <div className="flex lg:mx-32 mx-10 md:pl-24 flex-col items-center">
              <h1 className="text-2xl font-semibold mb-4">Book Our Space</h1>
              <p className="text-black py-3 text-base bookText">
                Swastika studio can be booked for the following- Chamber
                concerts, workshops, rehearsal space, conducting classes, stay
                for artists who want to be in a residency and create work
              </p>
            </div>

            {/* Collage */}
            <div>
              {isPhone ? (
                <div className="  w-screen justify-center bg-ahum-brown-collage py-4">
                  <Carousel
                    itemsToShow={1}
                    className=" h-96 w-screen justify-center items-center  "
                  >
                    <div>
                      <ImageZoom
                        image={{
                          src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835829/Bookourspace/1-thumb_ytxlja.jpg",
                          alt: "Golden Gate Bridge",
                        }}
                      />
                    </div>

                    <div className="mt-12">
                      <ImageZoom
                        image={{
                          src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835829/Bookourspace/4-thumb_oz1auf.jpg",
                          alt: "Golden Gate Bridge",
                        }}
                      />
                    </div>
                    <div className="mt-28">
                      <ImageZoom
                        image={{
                          src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835829/Bookourspace/6-thumb_lbtiy5.jpg",
                          alt: "Golden Gate Bridge",
                        }}
                      />
                    </div>

                    <div>
                      <ImageZoom
                        image={{
                          src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835829/Bookourspace/7-thumb_ixjwtq.jpg",
                          alt: "Golden Gate Bridge",
                        }}
                      />
                    </div>

                    <div className="mt-28">
                      <ImageZoom
                        image={{
                          src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835829/Bookourspace/8-thumb_ih2pel.jpg",
                          alt: "Golden Gate Bridge",
                        }}
                      />
                    </div>

                    <div className="mt-20">
                      <ImageZoom
                        image={{
                          src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835832/Bookourspace/10_ogx0zf.jpg",
                          alt: "Golden Gate Bridge",
                        }}
                      />
                    </div>
                  </Carousel>
                </div>
              ) : (
                <div className="bg-ahum-brown-collage md:block flex mt-10 md:h-max md:pl-24 py-10 lg:py-20">
                  <div className="lg:mx-32 mx-10 ">
                    <div className="flex flex-row justify-center items-center">
                      <div className="mr-4">
                        <ImageZoom
                          image={{
                            src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835829/Bookourspace/1-thumb_ytxlja.jpg",
                            alt: "Golden Gate Bridge",
                          }}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-row justify-center items-center">
                          <div className="mr-4">
                            <ImageZoom
                              image={{
                                src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835829/Bookourspace/4-thumb_oz1auf.jpg",
                                alt: "Golden Gate Bridge",
                              }}
                            />
                          </div>
                          <div className="mr-4">
                            <ImageZoom
                              image={{
                                src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835829/Bookourspace/6-thumb_lbtiy5.jpg",
                                alt: "Golden Gate Bridge",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                          <div className="mr-4">
                            <ImageZoom
                              image={{
                                src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835829/Bookourspace/8-thumb_ih2pel.jpg",
                                alt: "Golden Gate Bridge",
                              }}
                            />
                          </div>
                          <div className="mr-4">
                            <ImageZoom
                              image={{
                                src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835832/Bookourspace/10_ogx0zf.jpg",
                                alt: "Golden Gate Bridge",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <ImageZoom
                          image={{
                            src: "https://res.cloudinary.com/dtfecnt6o/image/upload/v1625835829/Bookourspace/7-thumb_ixjwtq.jpg",
                            alt: "Golden Gate Bridge",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Facilities */}
            <div className="lg:mx-32 md:mx-10 mt-12 md:pl-8">
              {/* for phones */}
              <h2 className="text-2xl font-semibold text-center lg:hidden">
                Facilities
              </h2>
              {/* for normal displays */}
              <h2 className="text-2xl font-semibold hidden lg:flex">
                Facilities
              </h2>
              <div className="mt-10 md:flex md:flex-row grid grid-cols-2 justify-between font-montserrat  w-full">
                <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2 md:px-3">
                  <div className="rounded-full bg-ahum-brown-collage h-28 w-28 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                    <img
                      className="w-3/6"
                      alt="facilities wifi"
                      src={facility1}
                    />
                  </div>
                  <span className="font-medium my-3 text-base md:text-lg text-center">
                    WiFi
                  </span>
                </div>

                <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2 md:px-3">
                  <div className="rounded-full bg-ahum-brown-collage h-28 w-28 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                    <img
                      className="w-3/6"
                      alt="facilities 3 Microphones"
                      src={facility2}
                    />
                  </div>
                  <span className="font-medium my-3 text-base md:text-lg text-center">
                    3 Microphones
                  </span>
                </div>

                <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2 md:px-3">
                  <div className="rounded-full bg-ahum-brown-collage h-28 w-28 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                    <img
                      className="w-3/6"
                      alt="facilities JBL EON Speakers"
                      src={facility3}
                    />
                  </div>
                  <span className="font-medium my-3 text-base md:text-lg text-center">
                    JBL EON Speakers
                  </span>
                </div>

                <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2 md:px-3">
                  <div className="rounded-full bg-ahum-brown-collage h-28 w-28 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                    <img
                      className="w-3/6"
                      alt="facilities 4 LED Warm Lights"
                      src={facility4}
                    />
                  </div>
                  <span className="font-medium my-3 text-base md:text-lg text-center">
                    4 LED Warm-Lights
                  </span>
                </div>

                <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2 md:px-3">
                  <div className="rounded-full bg-ahum-brown-collage h-28 w-28 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                    <img
                      className="w-3/6"
                      alt="facilities Pantry"
                      src={facility5}
                    />
                  </div>
                  <span className="font-medium my-3 text-base md:text-lg text-center">
                    Pantry
                  </span>
                </div>

                <div className="flex flex-col items-center transition duration-500 ease-in-out transform md:hover:scale-105 mx-2 md:px-3">
                  <div className="rounded-full bg-ahum-brown-collage h-28 w-28 flex items-center justify-center transition duration-500 ease-in-out transform hover:shadow-xl">
                    <img
                      className="w-3/6"
                      alt="facilities Restroom"
                      src={facility6}
                    />
                  </div>
                  <span className="font-medium my-3 text-base text-center">
                    Restroom
                  </span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="/contact/:true"
                  className="text-lg my-10 h-10 bg-ahum-maroon w-max items-center focus:outline-none flex px-5 rounded-full text-white transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl"
                >
                  Enquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSpace;
