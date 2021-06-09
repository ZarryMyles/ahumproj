import React, { useEffect } from "react";

import EventsCardLeft from "./EventsCardLeft";
import EventsCardRight from "./EventsCardRight";

function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="wrapper" style={{ background: "white" }}>
      <div id="content" className="p-0">
        <div class="container-fluid justify-content-center px-0">
          <h1 className="text-2xl font-semibold text-center mt-10">Events</h1>
          <div
            className="row justify-content-center my-3 mx-0 py-3"
            style={{ background: "white", minHeight: "75vh" }}
          >
            <div className="col-md-5 col-md-pull-6 align-self-center">
              <div data-aos="fade-right" class="holderbg1"></div>
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
                <a
                  href="/archives/saturdaysatswastika"
                  type="button"
                  className="btn py-2 px-5"
                  style={{
                    borderRadius: "25px",
                    background: "#401A21",
                    color: "white",
                  }}
                >
                  Know More
                </a>
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
