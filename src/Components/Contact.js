import React, { useEffect } from "react";
import Navbar from "./Navbar";
import logo from "../Images/logo.png";
import $ from "jquery";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };

  const inputCSS =
    "focus:placeholder-gray-200 focus:outline-none focus:shadow-xl hover:shadow-md placeholder-gray-300 mb-3 py-2 px-2 w-full border-solid border border-black";

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
            <div className="grid h-ahum-contact-screen grid-cols-2">
              <div className="flex justify-center items-center col-span-1">
                <div className="flex flex-col">
                  <span className="font-normal mb-3">
                    Drop us a message, we'll call you back!
                  </span>
                  <input
                    className={inputCSS}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-2">
                      <input
                        className={inputCSS}
                        type="text"
                        name="name"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-span-3">
                      <input
                        className={inputCSS}
                        type="text"
                        name="name"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <textarea
                    className={inputCSS}
                    type="text"
                    name="name"
                    placeholder="Your Message"
                  />

                  <button
                    className="my-1 py-2 w-1/4 bg-ahum-brown transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-white text-xl"
                    type="submit"
                    value="Send Message"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="flex justify-center col-span-1 items-center">
                <div className="flex flex-col w-full">
                  <span className="font-normal">
                    Come drop by and explore our space (10am to 5pm)
                  </span>
                  <div className="w-5/6">
                    <iframe
                      className="w-full h-64 mt-2 pt-3"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10992.079379615054!2d77.60054457270812!3d13.080992781944996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x82b5d79c5fe90710!2sart%20heart%20u%20%26%20mind!5e0!3m2!1sen!2sin!4v1618606129974!5m2!1sen!2sin"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-ahum-brown absolute inset-x-0 bottom-0 h-52 bottom-0">
              <div className="flex h-full ml-24 justify-center items-center">
                  <div className="grid w-full grid-cols-8">
                <div className="col-start-2 col-span-2 flex flex-col">
                  <span className="text-white text-2xl">
                    Join our mailing list
                  </span>
                  <span className="uppercase text-white">
                    Never miss an update
                  </span>
                </div>
                <div className="col-start-4 col-end-6 w-4/6 flex flex-col">
                  <span className="text-white text-sm">Email Address</span>
                  <div className="border-t border-white border"></div>
                  <input className="py-1 px-2 mt-2 focus:outline-none" type="text" name="name" />
                </div>

                <div className="col-start-6 col-end-8 flex flex-col">
                  <span className="text-white">
                    Phone : +91 9888897645, +91 999999990
                  </span>
                  <span className="text-white">Email : ahum@gmail.com</span>
                </div>
              </div>
            </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Contact;
