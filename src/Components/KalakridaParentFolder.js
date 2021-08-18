import React from "react";
import thumbnails from "../assets/JSON/thumbnails.json";
import BackIcon from "../assets/images/left-arrow.png";

export default function KalakridaParentFolder(props) {
  const year = props.match.params.year;
  const data = thumbnails.filter((item) => item.year === year);

  return (
    <div className="md:ml-20" style={{ height: "75vh" }}>
      <div className="flex text-ahum-brown  justify-end w-full lg:pr-5 pr-1 pt-2 md:mb-0 mb-3">
        <a href="/archives" className="flex mx-1 md:text-base ">
          <img src={BackIcon} alt="back-icon" width="20px" className="mx-1" />
          Back
        </a>
      </div>
      <div className="flex justify-center text-2xl font-bold  md:py-5 text-center text-ahum-maroon font-montserrat ">
        KALAKRIDA - {year}
      </div>

      <div className="flex md:flex-row flex-col md:justify-around justify-items-start  md:text-3xl text-xl text-center  text-ahum-maroon  ">
        <a
          className=" md:hover:bg-ahum-brown-collage md:p-10 mx-auto rounded-xl"
          href={`/kalakrida/gallery/` + year}
        >
          <div
            className=" kalakrida-thumbnail  div-bg-pic flex flex-col ring-2 overflow-hidden  shadow-lg    items-center  ring-ahum-maroon rounded-lg hover:bg-ahum-brown-collage duration-300"
            style={{
              backgroundImage: `url('${data[0].gallery}')`,
            }}
          ></div>
          <div className="m-3">Gallery</div>
        </a>

        <a
          href={`/kalakrida/report/` + year}
          className=" md:hover:bg-ahum-brown-collage md:p-10 mx-auto rounded-xl"
        >
          <div
            className=" kalakrida-thumbnail div-bg-pic flex flex-col ring-2 overflow-hidden  shadow-lg    items-center  ring-ahum-maroon rounded-lg hover:bg-ahum-brown-collage duration-300"
            style={{
              backgroundImage: `url('${data[0].report}')`,
              // backgroundPosition: "top",
            }}
          ></div>

          <div className="mx-2 mt-1">Report</div>
        </a>
      </div>
    </div>
  );
}
