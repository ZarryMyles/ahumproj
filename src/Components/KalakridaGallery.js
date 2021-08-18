import React from "react";
import Preloader from "./Preloader";
import GalleryData from "../assets/JSON/kalakridaGallery.json";
import Zoom from "react-medium-image-zoom";
import BackIcon from "../assets/images/left-arrow.png";
import "react-medium-image-zoom/dist/styles.css";

export default function KalakridaGallery(props) {
  const year = props.match.params.year;
  const data = GalleryData.filter((item) => item.year === year);
  return (
    <div className="md:ml-20">
      <div className="flex text-ahum-brown  justify-start w-full lg:pr-5 pr-1 pt-2 md:mb-0 mb-3">
        <a href={`/kalakrida/` + year} className="flex mx-1">
          <img src={BackIcon} alt="back-icon" width="20px" className="mx-1" />
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
        <div className="flex justify-center flex-wrap">
          {data.map((item) => {
            return (
              <div className="kalakridaGallery md:flex md:m-10 md:w-1/6 md:px-0 px-10 md:py-0 py-3 mt-5">
                <Zoom>
                  <img src={item.image_link} />
                </Zoom>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
