import React from "react";
import schedule from "../assets/JSON/schedule.json";

function SwastikSchoolofDanceMusic() {
  function section(lesson) {
    return (
      <div className="flex justify-center font-montserrat ">
        <div
          className="flex md:flex-row  flex-col  align-items-center md:mb-4  md:w-4/6 w-11/12 md:px-0 px-3  "
          style={{
            background: "white",
            minHeight: "40vh",
            overflow: "hidden",
          }}
        >
          <div className="md:w-1/2 w-full flex justify-center">
            <div
              className="md:w-2/3 w-full   flex justify-center "
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-easing="ease-in-sine"
              data-aos-anchor-placement="top-bottom"
              data-aos-once
            >
              <div
                className=" squarebgpic2 "
                style={{
                  backgroundImage: `url('${lesson.image_url}')`,
                  width: "250px",
                }}
              ></div>
            </div>
          </div>
          <div className="md:w-5/12 w-full py-3 md:pl-12 text-sm font-medium md:my-0 mt-4">
            <h4 className="md:my-4 my-2 text-2xl md:text-left text-center font-semibold ">
              '{lesson.title.toUpperCase()}'
            </h4>
            <div className="my-4">
              <h6 className="my-0.5">
                <span className=" font-semibold">Instructor :</span>{" "}
                <span className="font-medium"> {lesson.instructor}</span>
              </h6>
              <h6 className="my-0.5">
                {" "}
                <span className="font-semibold">Timings :</span>{" "}
                <span className="font-medium">{lesson.timings}</span>
              </h6>
            </div>

            <p class="text-justify text-sm text-black my-4 md:leading-5 leading-4">
              {lesson.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div class="font-montserrat justify-content-center px-0 md:ml-20">
        <h1 className="md:text-2xl text-xl font-semibold text-center md:my-10  my-4">
          Swastika School of Dance & Music
        </h1>
        <div class="bg-holder-school mx-auto"></div>

        <p class="text-justify customp leading-5 md:text-base text-sm md:font-normal text-ahum-gray">
          The school started in the year 2010 and was taken under the umbrella
          of ahum trust in 2015. At the school we conduct classes in
          Bharatanatyam and Carnatic vocal mainly. We have also had other forms
          of arts like visual arts, Hindustani Music, Odissi and Kathak. At
          present we have total of 50 children enrolled at our school.
          Bharatanatyam is being taught by Anuradha Venkataraman and Carnatic
          Vocal by Shruthi Sridhara.
        </p>
      </div>
      <div
        class="text-center font-medium  md:py-4 py-2 md:mb-5 md:ml-20"
        style={{ backgroundColor: "#D7CEC7" }}
      >
        <h2 className="text-2xl" style={{ color: "#41363D" }}>
          Schedule
        </h2>
      </div>
      {/* schedule */}
      <div className=" pt-4 md:px-0  md:ml-20 flex flex-col items-center">
        {schedule.map((lesson) => section(lesson))}
      </div>
    </div>
  );
}

export default SwastikSchoolofDanceMusic;
