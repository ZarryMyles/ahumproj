import React, { useEffect } from "react";
import AOS from "aos";
function EventsCardRight() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="row justify-content-center my-3 mx-0 py-3"
      style={{ background: "#D7CEC7", minHeight: "100vh" }}
    >
      <div className="col-md-5 col-md-pull-6 align-self-center md:hidden block pt-5">
        <div class="holderbg2"></div>
      </div>
      <div
        data-aos="fade-right"
        className="col-md-6 col-md-push-6 py-5 align-self-center"
      >
        <h2
          className="text-center text-xl"
          style={{ color: "#5f585d", fontWeight: "600" }}
        >
          Music by The Lake
        </h2>
        <p class="text-justify customp1">
          ahum with support of Jalaposhan has been presenting “Music by the
          Lake”, a monthly concert. The idea behind this concept is to bring
          art, community and nature in unison with each other. The series was
          started on March 2016 and till date we had had high caliber artistes
          performing for us, who have all thoroughly enjoyed performing amidst
          nature without much of a frill of technology.
        </p>
        <div class="text-center">
          <a
            href="/archives/musicbythelake"
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
      <div className="col-md-5 col-md-pull-6 align-self-center md:block hidden">
        <div class="holderbg2"></div>
      </div>
    </div>
  );
}

export default EventsCardRight;
