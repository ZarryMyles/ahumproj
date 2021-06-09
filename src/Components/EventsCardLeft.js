import React from "react";

function EventsCardLeft() {
  return (
    <div
      className="row justify-content-center my-3 mx-0 py-3"
      style={{ background: "white", height: "100vh" }}
    >
      <div className="col-md-5  col-md-pull-6 align-self-center">
        <div data-aos="fade-right" class="holderbg3"></div>
      </div>

      <div data-aos="fade-up" className="col-md-6 py-5 align-self-center">
        <h2
          className="text-center text-xl"
          style={{ color: "#5f585d", fontWeight: "600" }}
        >
          Kalakrida
        </h2>
        <p class="text-justify customp1">
          Kalakrida is ahum’s signature project. ahum has been successfully
          conducting since 2016 . Kalakrida, is a community arts workshop for
          the children studying in government schools in and around Jakkur and
          Sampigehalli, Bangalore. Govt. PU College , Govt. Higher Primary
          School, Govt. Middle Primary School, Govt. Lower Primary school
          participated in this project. The children responded with a lot of
          enthusiasm and readiness. Given the scale of the workshop, we chose to
          crowd fund this community development project through crowdfunding.
        </p>
        <div class="text-center">
          <a
            href="/archives/kalakrida"
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
  );
}

export default EventsCardLeft;
