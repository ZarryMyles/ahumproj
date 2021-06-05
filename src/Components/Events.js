import React, { useEffect } from "react";
import Navbar from "./Navbar";
import EventsCardLeft from "./EventsCardLeft";
import EventsCardRight from "./EventsCardRight";
import $ from "jquery";

import logo from "../Images/logo.png";
import TopLogoBar from "./TopLogoBar";

function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };
  return (
    <div class="wrapper" style={{ background: "white" }}>
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

          <h1 className="text-2xl font-semibold text-center mt-10">Events</h1>
          <div
            className="row justify-content-center my-3 mx-0 py-3"
            style={{ background: "white", minHeight: "75vh" }}
          >
            <div className="col-md-5 col-md-pull-6 align-self-center">
              <div class="holderbg1"></div>
            </div>

            <div className="col-md-6 py-5 align-self-center">
              <h2
                className="text-center text-xl"
                style={{ color: "#222021", fontWeight: "500" }}
              >
                Saturday's @ Swastika
              </h2>
              <p class="text-justify customp1">
                Saturays @ Swastika is a monthly baithak series of performances
                conducted on the first Saturday of every month. Artists from
                different genres are invited to perform at our studio . This
                series is conducted at ahum’s swastika school of dance and music
                in Jakkur. First event in this series performed in March 2018.
                Since then Saturdays @ Swastika have been enjoyed by the
                patrons.
              </p>
              <div class="text-center">
                <button
                  type="button"
                  className="btn py-2 px-5"
                  style={{
                    borderRadius: "25px",
                    background: "#401A21",
                    color: "white",
                  }}
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
          <EventsCardRight />
          <EventsCardLeft />
        </div>
      </div>
    </div>
  );
}

export default Events;
