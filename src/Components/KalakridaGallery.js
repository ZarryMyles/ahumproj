import React from "react";
import GalleryData from "../assets/JSON/kalakridaGallery.json";
import Zoom from "react-medium-image-zoom";

import "react-medium-image-zoom/dist/styles.css";

export default function KalakridaGallery(props) {
  const { category, year } = props.match.params;
  const data = GalleryData.filter(
    (item) => item.year === year && item.event === category
  );
  return (
    <div className="md:ml-20">
      <div className="flex text-ahum-black  justify-start w-full lg:pr-5 pr-1 pt-2 md:mb-0 mb-3">
        <a
          href={`/details/${category}/${year}`}
          className="flex md:pl-3 pl-1 md:text-base underline hover:underline"
        >
          Back
        </a>
      </div>
      <div className="md:mt-0 mt-5 flex justify-center text-2xl font-bold text-center  font-montserrat ">
        Kalakrida Gallery ({year})
      </div>

      {data.length === 0 ? (
        // display no data message
        <div className="flex justify-center">No data</div>
      ) : (
        // display data
        <div className="flex justify-center flex-wrap my-16 md:my-0">
          {data.map((item) => {
            return (
              <div className="kalakridaGallery md:flex md:m-10 md:w-1/6 md:px-0 px-10 md:py-0 py-3 mt-5">
                {item.image_link && (
                  <Zoom>
                    <img src={item.image_link} alt="Kalakrida Pic" />
                  </Zoom>
                )}
                {item.video_link && (
                  <div className="w-full h-full ">
                    <video
                      // style={{ height: "400px" }}
                      src={item.video_link}
                      controls
                      width="500"
                      // height="150"
                    ></video>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
