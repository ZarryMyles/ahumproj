import React, { useEffect } from "react";

import Navbar from "./Navbar";
import $ from "jquery";
import logo from "../Images/logo.png";
import TopLogoBar from "./TopLogoBar";
import schedule from "../assets/JSON/schedule.json";
function SwastikSchoolofDanceMusic() {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };
  const resize = () => {
    $("#sidebar").addClass("active");
  };
  function section(lesson) {
    return (
      <>
        <div
          className="flex md:flex-row flex-col  align-items-center md:mb-14  w-4/6"
          style={{
            background: "white",
            minHeight: "40vh",
            overflow: "hidden",
          }}
        >
          <div className="md:w-1/2 w-full   flex justify-center ">
            <div
              className="w-full squarebgpic2 "
              style={{
                backgroundImage: `url('${lesson.image_url}')`,
              }}
            ></div>
          </div>
          <div
            className="md:w-5/12 w-full py-3 md:pl-12 text-sm font-normal  md:border-l-2 md:border-t-0 border-t-2 md:my-0 mt-4"
            style={{ borderColor: "#D7CEC7" }}
          >
            <h4 className="md:my-4 my-2 text-2xl md:text-left text-center">
              '{lesson.title.toUpperCase()}'
            </h4>
            <div className="my-4">
              <h6 className="my-0.5">
                <span className="font-medium">Instructor :</span>{" "}
                {lesson.instructor}
              </h6>
              {/* <h6 style={{ fontSize: "0.98em" }}><b>Genre :</b> Lorem Ipsum</h6> */}
              <h6 className="my-0.5">
                {" "}
                <span className="font-medium">Timings :</span> {lesson.timings}
              </h6>
            </div>
            {/* <h6 className='pt-4'>About</h6> */}
            <p class="text-justify text-sm text-black my-4 md:leading-5 leading-4">
              {lesson.description}
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

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
        <TopLogoBar className="absolute right-0" />

        <h1 className="md:text-2xl text-xl font-semibold text-center md:my-10 my-4">
          Swastika School of Dance & Music
        </h1>
        <div class="bg-holder-school mx-auto"></div>

        <p class="text-justify customp leading-5 md:text-base text-sm md:font-normal ">
          The school started in the year 2010 and was taken under the umbrella
          of ahum trust in 2015. At the school we conduct classes in
          Bharatanatyam and Carnatic vocal mainly. We have also had other forms
          of arts like visual arts, Hindustani Music, Odissi and Kathak. At
          present we have total of 50 children enrolled at our school.
          Bharatanatyam is being taught by Anuradha Venkataraman and Carnatic
          Vocal by Shruthi Sridhara.
        </p>
      </div>
      <div
        class="text-center font-medium  md:py-4 md:mb-5"
        style={{ backgroundColor: "#D7CEC7" }}
      >
        <h2 className="text-2xl" style={{ color: "#41363D" }}>
          Schedule
        </h2>
      </div>
      <div className=" py-4 flex flex-col items-center">
        {schedule.map((lesson) => section(lesson))}
      </div>

      <div class="text-center my-4 ">
        <a
          type="button"
          className="btn py-2 px-5"
          href="/archives"
          style={{
            borderRadius: "25px",
            background: "#411b22",
            color: "white",
          }}
        >
          Gallery
        </a>
      </div>
    </>
  );
}

export default SwastikSchoolofDanceMusic;
