import React, { useState, useEffect } from "react";
import axios from "axios";
import thumbnails from "../assets/JSON/galleryandreport.json";

export default function KalakridaParentFolder(props) {
  // const [thumbnails, setThumbnails] = useState([]);

  // const reportDataAPI = process.env.REACT_APP_API_END + "reportandgallery";
  // const reportDataAPI = "http://localhost:3000/JSON/galleryandreport.json";
  // useEffect(() => {
  //   getData();
  // }, []);

  // let getData = async () => {
  //   axios
  //     .get(reportDataAPI, {
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8",
  //         Authorization: process.env.REACT_APP_API_KEY,
  //       },
  //     })
  //     .then((res) => setThumbnails(res.data))
  //     .catch((error) => {
  //       console.log("err", error);
  //     });
  // };

  const { category, year } = props.match.params;

  const data = thumbnails.filter(
    (item) => item.year === year && item.category === category
  );

  return (
    <div className="md:ml-20" style={{ height: "75vh" }}>
      <div className="flex   justify-start w-full lg:pr-5 pr-1 pt-2 md:mb-0 mb-2">
        <a
          href={`/archives/${category}/` + year}
          className="flex md:pl-3 pl-1 md:text-base underline hover:underline text-gray-700"
        >
          Back
        </a>
      </div>
      <div className="flex justify-center text-2xl font-bold  md:py-5 md:mb-0 mb-3 text-center  font-montserrat ">
        {category.toUpperCase()} - {year}
      </div>

      <div className="flex md:flex-row flex-col md:justify-around justify-items-start text-xl text-center    ">
        {data[0].gallery_thumbnail && (
          <a
            className=" md:hover:bg-ahum-brown-collage md:p-10 mx-auto rounded-xl"
            href={`/details/${category}/gallery/` + year}
          >
            <div
              className=" kalakrida-thumbnail  div-bg-pic flex flex-col  overflow-hidden  shadow-lg    items-center   rounded-lg hover:bg-ahum-brown-collage duration-300"
              style={{
                backgroundImage: `url('${data[0].gallery_thumbnail}')`,
              }}
            ></div>
            <div className="my-4">Gallery</div>
          </a>
        )}

        {data[0].report_thumbnail && (
          <a
            href={`/details/${category}/report/` + year}
            className=" md:hover:bg-ahum-brown-collage md:p-10 mx-auto rounded-xl"
          >
            <div
              className=" kalakrida-thumbnail div-bg-pic flex flex-col  overflow-hidden  shadow-lg    items-center   rounded-lg hover:bg-ahum-brown-collage duration-300"
              style={{
                backgroundImage: `url('${data[0].report_thumbnail}')`,
              }}
            ></div>

            <div className="my-4">Report</div>
          </a>
        )}
      </div>
    </div>
  );
}
