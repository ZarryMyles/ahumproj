import React, { useEffect } from "react";

import Navbar from "./Navbar";
import Card from "./Card";
import $ from "jquery";

import logo from "../Images/logo.png";
import TopLogoBar from "./TopLogoBar";

function UpcomingShows() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };
  const resize = () => {
    $("#sidebar").addClass("active");
  };
  return (
    <dic className="wrapper">
      <Navbar />
      <div className="py-0" id="content" onMouseDown={resize}>
        <div className="container-fluid justify-content-center md:-ml-11">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn "
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

          <h1 className="text-2xl font-semibold text-center text-gray-700 mt-0 md:mb-5 pl-20">
            Upcoming Shows
          </h1>
          <div className="flex md:flex-row flex-col justify-content-around pl-20">
            <div className="col-sm-12 col-md-6 col-xl-4 my-2">
              <div class="bg-holderbg1 mx-auto my-3"></div>
              <Card
                title="Lorem Ipsum"
                c1="7:00 pm"
                c2="15th Feb"
                c3="Bangalore"
              />
            </div>

            <div className="col-sm-12 col-md-6 col-xl-4 my-2">
              <div class="bg-holderbg2  mx-auto my-3"></div>
              <Card
                title="Lorem Ipsum"
                c1="7:00 pm"
                c2="15th Feb"
                c3="Bangalore"
              />
            </div>

            <div className="col-sm-12 col-md-6 col-xl-4  my-2">
              <div class="bg-holderbg3  mx-auto my-3"></div>
              <Card
                title="Lorem Ipsum"
                c1="7:00 pm"
                c2="15th Feb"
                c3="Bangalore"
              />
            </div>
          </div>
        </div>
      </div>
    </dic>
  );
}

export default UpcomingShows;
