import React from "react";
import thumbnails from "../assets/JSON/thumbnails.json";

export default function KalakridaParentFolder(props) {
  const year = props.match.params.year;
  const data = thumbnails.filter((item) => item.year === year);

  return (
    <div className="md:ml-20" style={{ height: "75vh" }}>
      <div className="flex   justify-start w-full lg:pr-5 pr-1 pt-2 md:mb-0 mb-2">
        <a
          href={`/archives/kalakrida/` + year}
          className="flex md:pl-3 pl-1 md:text-base underline hover:underline text-gray-700"
        >
          Back
        </a>
      </div>
      <div className="flex justify-center text-2xl font-bold  md:py-5 md:mb-0 mb-3 text-center  font-montserrat ">
        KALAKRIDA - {year}
      </div>

      <div className="flex md:flex-row flex-col md:justify-around justify-items-start text-xl text-center    ">
        <a
          className=" md:hover:bg-ahum-brown-collage md:p-10 mx-auto rounded-xl"
          href={`/kalakrida/gallery/` + year}
        >
          <div
            className=" kalakrida-thumbnail  div-bg-pic flex flex-col  overflow-hidden  shadow-lg    items-center   rounded-lg hover:bg-ahum-brown-collage duration-300"
            style={{
              backgroundImage: `url('${data[0].gallery}')`,
            }}
          ></div>
          <div className="my-4">Gallery</div>
        </a>

        <a
          href={`/kalakrida/report/` + year}
          className=" md:hover:bg-ahum-brown-collage md:p-10 mx-auto rounded-xl"
        >
          <div
            className=" kalakrida-thumbnail div-bg-pic flex flex-col  overflow-hidden  shadow-lg    items-center   rounded-lg hover:bg-ahum-brown-collage duration-300"
            style={{
              backgroundImage: `url('${data[0].report}')`,
            }}
          ></div>

          <div className="my-4">Report</div>
        </a>
      </div>
    </div>
  );
}
