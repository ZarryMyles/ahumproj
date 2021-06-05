import React from "react";

function EventsCardRight() {
  return (
    <div
      className="row justify-content-center my-3 mx-0 py-3"
      style={{ background: "#D7CEC7", minHeight: "100vh" }}
    >
      <div className="col-md-6 col-md-push-6 py-5 align-self-center">
        <h2
          className="text-center text-xl text-black"
          style={{ color: "#222021" }}
        >
          Music by The Lake
        </h2>
        <p class="text-justify customp1 " style={{ color: "black" }}>
          ahum with support of Jalaposhan has been presenting “Music by the
          Lake”, a monthly concert. The idea behind this concept is to bring
          art, community and nature in unison with each other. The series was
          started on March 2016 and till date we had had high caliber artistes
          performing for us, who have all thoroughly enjoyed performing amidst
          nature without much of a frill of technology.
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
      <div className="col-md-5 col-md-pull-6 align-self-center">
        <div class="holderbg2"></div>
      </div>
    </div>
  );
}

export default EventsCardRight;
