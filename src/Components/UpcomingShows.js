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
          <TopLogoBar />

          <h1 className="text-2xl font-semibold text-center mt-10">
            Upcoming Shows
          </h1>
          <div className="row justify-content-around">
            <div className="col-sm-12 col-md-6 col-xl-4 my-2">
              <div class="bg-holderbg1 mx-auto"></div>
              <Card
                title="Lorem Ipsum"
                c1="7:00 pm"
                c2="15th Feb"
                c3="Bangalore"
              />
            </div>

            <div className="col-sm-12 col-md-6 col-xl-4 my-2">
              <div class="bg-holderbg2  mx-auto"></div>
              <Card
                title="Lorem Ipsum"
                c1="7:00 pm"
                c2="15th Feb"
                c3="Bangalore"
              />
            </div>

            <div className="col-sm-12 col-md-6 col-xl-4  my-2">
              <div class="bg-holderbg3  mx-auto"></div>
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
    </div>
  );
}

export default UpcomingShows;
