import React, { useEffect } from "react";

import Navbar from "./Navbar";
import $ from "jquery";
import logo from "../Images/logo.png";
import TopLogoBar from "./TopLogoBar";

function SwastikSchoolofDanceMusic() {
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
          <h1 className="text-2xl font-semibold text-center my-10">
            Swastika School of Dance & Music
          </h1>
          <div class="bg-holder-school"></div>
          <p class="text-justify customp">
            The school started in the year 2010 and was taken under the umbrella
            of ahum trust in 2015. At the school we conduct classes in
            Bharatanatyam and Carnatic vocal mainly. We have also had other
            forms of arts like visual arts, Hindustani Music, Odissi and Kathak.
            At present we have total of 50 children enrolled at our school.
            Bharatanatyam is being taught by Anuradha Venkataraman and Carnatic
            Vocal by Shruthi Sridhara.
          </p>
        </div>
        <div className="bg-white py-4">
          <div class="text-center">
            <h2 className="text-2xl">Schedule</h2>
          </div>
          {/* BOX 1 */}
          <div
            className="row justify-content-center align-items-center  m-0 py-1 "
            style={{
              background: "white",
              minHeight: "40vh",
              overflow: "hidden",
            }}
          >
            <div className="col-md-4 nospace align-self-center mr-2 ">
              <div className="ml-auto squarebgpic2 "></div>
            </div>

            <div
              className="col-md-6 pl-5 py-1 nospace"
              id="block1"
              style={{ fontSize: "14px" }}
            >
              <h4 style={{ fontSize: "1.3em" }} className="py-1">
                Bharatanatyam
              </h4>
              <h6 style={{ fontSize: "0.98em" }}>
                <b>Instructor :</b> Anuradha Venkataraman
              </h6>
              {/* <h6 style={{ fontSize: "0.98em" }}><b>Genre :</b> Lorem Ipsum</h6> */}
              <h6 style={{ fontSize: "0.98em" }}>
                <b>Timings :</b> Mon to Fri - 4:00pm – 7:00pm
              </h6>
              {/* <h6 className='pt-4'>About</h6> */}
              <p class="text-justify customp7">
                Bharatanatyam one of the classical form of dances is taught in
                the traditional oral method. Where students are trained from the
                basics to the traditional repertoire in a period of 7 years. The
                exercises for conditioning the body for this form is also
                included. Theory is integrated in the regular classes. Minimum
                age is 7 years to start. The groups of classes are small in
                number to a max of 10
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
          {/* BOX 2 */}
          <div
            className="row justify-content-center align-items-center  m-0 py-1 "
            style={{
              background: "white",
              minHeight: "40vh",
              overflow: "hidden",
            }}
          >
            <div className="col-md-4 nospace align-self-center mr-2 ">
              <div className="ml-auto  squarebgpic3 "></div>
            </div>

            <div
              className="col-md-6 pl-5 py-1 nospace"
              id="block1"
              style={{ fontSize: "14px" }}
            >
              <h4 style={{ fontSize: "1.3em" }} className="py-1">
                Carnatic Vocal
              </h4>
              <h6 style={{ fontSize: "0.98em" }}>
                <b>Instructor :</b> Shruthi Sridhara
              </h6>
              {/* <h6 style={{ fontSize: "0.98em" }}><b>Genre :</b> Lorem Ipsum</h6> */}
              <h6 style={{ fontSize: "0.98em" }}>
                <b>Timings :</b> Tue & Wed – 5:00pm - 7:00pm
              </h6>
              {/* <h6 className='pt-4'>About</h6> */}
              <p class="text-justify customp7">
                Carnatic music classes are taught by Shruthi Sridhara who is a
                gold medalist in MA Carnatic music and recipient of Senior
                Scholarship from Karnataka culture department. She is a student
                of Guru MS Sheela. Shruthi has a very gentle and disciplined way
                to introduce the children to the nuances of classical music
                focussing on the most important aspect of " Shruthi" and " Laya"
                . The minimum age to start is 7 years. The group of classes are
                small with a maximum of 10 children
              </p>
            </div>
          </div>
        </div>

        <div class="text-center my-4">
          <button
            type="button"
            className="btn py-2 px-5"
            style={{
              borderRadius: "25px",
              background: "#411b22",
              color: "white",
            }}
          >
            Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwastikSchoolofDanceMusic;
