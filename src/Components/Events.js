import React from "react";

function Events() {
  return (
    <div class="wrapper" style={{ background: "white" }}>
      <div id="content" className="p-0">
        <div class="font-montserrat container-fluid justify-content-center px-0 -mb-4">
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
                Kalakrida
              </h2>
              <p class="text-justify customp1">
                Kalakrida is ahum’s signature project. ahum has been
                successfully conducting since 2016 . Kalakrida, is a community
                arts workshop for the children studying in government schools in
                and around Jakkur and Sampigehalli, Bangalore. Govt. PU College
                , Govt. Higher Primary School, Govt. Middle Primary School,
                Govt. Lower Primary school participated in this project. The
                children responded with a lot of enthusiasm and readiness. Given
                the scale of the workshop, we chose to crowd fund this community
                development project through crowdfunding.
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
                  Archives
                </a>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center my-3 mx-0 py-3"
            style={{ background: "#D7CEC7", minHeight: "100vh" }}
          >
            <div className="col-md-5 col-md-pull-6 align-self-center md:hidden block pt-5">
              <div class="holderbg2"></div>
            </div>
            <div className="col-md-6 col-md-push-6 py-5 align-self-center">
              <h2
                className="text-center text-xl"
                style={{ color: "#222021", fontWeight: "600" }}
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
                  Archives
                </a>
              </div>
            </div>
            <div className="col-md-5 col-md-pull-6 align-self-center md:block hidden">
              <div class="holderbg2"></div>
            </div>
          </div>
          <div
            className="row justify-content-center my-3 mx-0 py-3"
            style={{ background: "white", minHeight: "75vh" }}
          >
            <div className="col-md-5 col-md-pull-6 align-self-center">
              <div class="holderbg3"></div>
            </div>

            <div className="col-md-6 py-5 align-self-center">
              <h2
                className="text-center text-xl"
                style={{ color: "#222021", fontWeight: "500" }}
              >
                Music by The Lake
              </h2>
              <p class="text-justify customp1">
                ahum with support of Jalaposhan has been presenting “Music by
                the Lake”, a monthly concert. The idea behind this concept is to
                bring art, community and nature in unison with each other. The
                series was started on March 2016 and till date we had had high
                caliber artistes performing for us, who have all thoroughly
                enjoyed performing amidst nature without much of a frill of
                technology.
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
                  Archives
                </a>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-center my-3 mx-0 py-3"
            style={{ background: "#D7CEC7", minHeight: "100vh" }}
          >
            <div className="col-md-5 col-md-pull-6 align-self-center md:hidden block pt-5">
              <div class="holderbg4"></div>
            </div>
            <div className="col-md-6 col-md-push-6 py-5 align-self-center">
              <h2
                className="text-center text-xl"
                style={{ color: "#222021", fontWeight: "600" }}
              >
                Know Your Art
              </h2>
              <p class="text-justify customp1">
                This series has been curated with the idea of demystifying
                different genres of art forms. Often, we notice that the
                audience can find its connection better when they have some
                entry point to the craft itself. Know your art series brings
                artists from different genres to talk about their craft with
                demonstrations, in a way that lets the audience enter the space
                of art. So far we have invited artists from the following
                classical dance forms: Odissi, Kathak, Mohiniattam, Kuchipudi
                and Vilasini Natyam
              </p>
              <div class="text-center">
                <a
                  href="/archives/knowyourart"
                  type="button"
                  className="btn py-2 px-5"
                  style={{
                    borderRadius: "25px",
                    background: "#401A21",
                    color: "white",
                  }}
                >
                  Archives
                </a>
              </div>
            </div>
            <div className="col-md-5 col-md-pull-6 align-self-center md:block hidden">
              <div class="holderbg4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
