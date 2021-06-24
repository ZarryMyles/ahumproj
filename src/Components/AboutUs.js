import React, { useEffect } from "react";
import Navbar from "./Navbar";
import $ from "jquery";
import TopLogoBar from "./TopLogoBar";

function About() {
  return (
    <div class="wrapper">
      <div className="p-0 md:ml-20">
        <div class="container-fluid justify-content-center px-0">
          <div class="bg-holder-about"></div>
          <p class="text-justify customp text-gray-700">
            ahum - art heart u and mind is a trust which was founded in 2015
            with the aim of connecting art and community. Today this has become
            very important. Though we are moving towards a more civilized world,
            we seem to be losing the innate quality of being humane. There is an
            extreme amount of stress, impatience and aggression in the
            transactional nature of our daily life. Participating in artistic
            pursuits, as an artist or as a connoisseur, helps us pause, reflect
            and introspect. It puts us in touch with our sensitive sides and
            builds a more humane and understanding society. ahum is working
            towards bringing this connection through various activities. To name
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
          className="row justify-content-center align-items-center mx-0 py-5"
          style={{
            background: "#D7CEC7",
            minHeight: "xxx",
            overflow: "hidden",
          }}
        >
          <div className="col-md-1"></div>
          <div className="col-md-4 md:justify-content-end md:align-self-center md:pr-5">
            <div className="squarepic1"></div>
          </div>

          <div className="col-md-6 nattext  " id="block1">
            <h5 className="pt-4 pb-1 text-lg" style={{ fontWeight: "600" }}>
              About Anuradha Venkataraman
            </h5>
            <h5 style={{ fontWeight: "400" }}>Founder, Dancer, Choreographer</h5>
            <p className="customp7">
              <br />I am a Bharatanatyam dancer and have trained under
              Padmabhushan Dr. Saroja Vaidyanathan at Ganesa Natyalaya. Being an
              'A' graded artist of Delhi Doordarshan and an empanelled artist of
              ICCR, I have been dancing professionally for the past twenty
              years. Some of the productions choreographed by me are: "Pratham
              Parth", Jananyey Namah", "Vaidehi", “Stories Unearthed”, a site-
              specific work, 6 feet land and us & Female Gaze. I have been an
              Artist in residence at TUIDA (South Korea) and OMI (New York).
              Under ICCR, I performed in Sarajevo, Poland, Germany, Denmark and
              Luxembourg. Academically, I am a gold medalist in Mphil- Cultural
              Studies from Jain University. With this background, it was natural
              for me to create a platform where I could bring art and society
              closer in together and try and create a beautiful community. Ahum
              was born out of this desire.
            </p>
          </div>
          <div className="col-md-1"></div>
          <div
            className="row justify-content-center align-items-center mx-0 py-5"
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
              <h5 className="pt-4 pb-1 text-lg" style={{ fontWeight: "600" }}>
                About Natarajan Ramamurthy
              </h5>
              <h5 style={{ fontWeight: "400" }}>Founder</h5>
              <p className="customp7">
                <br />
                An engineer by profession, Natarajan has always been a patron of
                arts. This engagement deepened after marrying Anu and when Anu
                decided to start ahum, he was a natural partner. With his 20+
                years of corporate experience, Natarajan believes that the
                ecosystem of arts will benefit from a dash of corporate
                organization. He believes that arts matter because more than any
                other human endeavor it possesses the capacity of move us, which
                brings out the best in us humans.
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
