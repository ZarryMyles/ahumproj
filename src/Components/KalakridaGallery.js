import React from "react";
import Preloader from "./Preloader";
import GalleryData from "../assets/JSON/kalakrida.json";
import ImageZoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function KalakridaGallery(props) {
  const year = props.match.params.year;
  const data = GalleryData.filter((item) => item.year === year);
  console.log(data, GalleryData);
  return (
    <div className="md:ml-20">
      <div className="md:mt-0 mt-5 text-center text-2xl text-ahum-maroon font-bold">
        Kalakrida Gallery ({year})
      </div>

      <div className="flex text-ahum-brown  justify-end w-full pr-5">
        <a href={`/kalakrida/` + year}>&#129040; Back</a>
      </div>
      {data.length === 0 ? (
        // display no data message
        <div className="flex justify-center">No data</div>
      ) : (
        // display data
        <div className="flex justify-center flex-wrap">
          {data.map((item, index) => {
            return (
              <div className="kalakridaGallery md:flex md:m-10 md:w-1/6 md:px-0 px-10 md:py-0 py-3 mt-5">
                <ImageZoom
                  image={{
                    src: item.image_link,
                    alt: "Golden Gate Bridge",
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
