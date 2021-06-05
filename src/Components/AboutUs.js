import React, { useEffect } from "react";
import Navbar from "./Navbar";
import $ from "jquery";
import TopLogoBar from "./TopLogoBar";

function SwastikSchoolofDanceMusic() {
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
    <div class="wrapper">
      <Navbar />
      <div id="content" className="p-0">
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
          <TopLogoBar />

          <div class="bg-holder-about"></div>
          <p class="text-justify customp">
            ahum - art heart u and mind is a trust which was founded in 2015
            with the aim of connecting art and community. Today this has become
            very important. Though we are moving towards more civilized world,
            we seem to be losing the innate quality of being humane. There is an
            extreme amount of stress, impatience, aggression in the
            transactional nature of our daily life. Participating in artistic
            pursuits, as an artist or as a connoisseur, helps us pause, reflect
            and introspect. It puts us in touch with our sensitive sides and
            builds a more humane and understanding society. ahum is working
            towards bringing this connection through various activities, to name
            a few:
            <ol className="mt-2">
              <li>Workshops</li>
              <li>Art Residencies</li>
              <li>Community Outreach programs with the underprivileged</li>
              <li>Curated performances</li>
              <li>Immersive cultural experiences</li>
            </ol>
          </p>
        </div>

        <div
          className="row justify-content-center align-items-center mb-2 mx-0 py-5"
          style={{
            background: "#D7CEC7",
            minHeight: "xxx",
            overflow: "hidden",
          }}
        >
          <div className="col-md-1"></div>
          <div className="col-md-4 justify-content-end align-self-center pr-5">
            <div className="squarepic1"></div>
          </div>

          <div className="col-md-6 nattext  " id="block1">
            <h5 className="pt-4 pb-2 text-lg" style={{ fontWeight: "600" }}>
              About Anuradha
            </h5>
            <h5>Founder, Teacher</h5>
            <p className="customp7">
              <br />I am a Bharatanatyam dancer and have trained under
              Padmabhushan Dr. Saroja Vaidyanathan at Ganesa Natyalaya. Being an
              'A' graded artist of Delhi Doordarshan and empanelled artist of
              ICCR, I have been dancing professionally for past twenty years.
              Some of the prductions choreodgraphed by me are - "Pratham Parth",
              Jananyey Namah", "Vaidehi" and “Stories Unearthed” a site-
              specific work, 6 feet land and us & Female Gaze. I have been an
              Artist in residence at TUIDA (South Korea) and OMI (New York).
              Under ICCR I performed in Sarajevo, Poland, Germany, Denmark and
              Luxembourg. Academically I am a gold medalist in Mphil- Cultural
              Studies from Jain University. With this background it was natural
              for me to create a platform where I could bring in art and society
              closer together and try and create a beautiful community. Ahum was
              born out of this desire
            </p>
          </div>
          <div className="col-md-1"></div>
          <div
            className="row justify-content-center align-items-center mb-2 mx-0 py-5"
            style={{
              background: "#D7CEC7",
              minHeight: "xxx",
              overflow: "hidden",
            }}
          >
            <div className="col-md-1"></div>
            <div className="col-md-4  justify-content-end align-self-center pr-5">
              <div className="squarepic2 "></div>
            </div>

            <div className="col-md-6 nattext" id="block1">
              <h5 className="pt-4 pb-2 text-lg" style={{ fontWeight: "600" }}>
                About Natarajan
              </h5>
              <h5>Founder, Teacher</h5>
              <p className="customp7">
                <br />
                An engineer by profession Natarajan has always been a patron of
                arts. This engagement deepened after marrying Anu and when Anu
                decided to start ahum he was a natural partner. With his 20+
                years of corporate experience Natarajan believes that the arts
                ecosystem will benefit from a dash of corporate organization. He
                believes that arts matter because more than any other human
                endeavor it possesses the capacity of move us, which brings out
                the best in us humans.
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwastikSchoolofDanceMusic;
