import React from "react";
import Preloader from "./Preloader";
import GalleryData from "../assets/JSON/kalakrida.json";
export default function KalakridaGallery(props) {
  const year = props.match.params.year;
  const data = GalleryData.filter((item) => item.year === year);
  console.log(data, GalleryData);
  return (
    <div className="ml-20">
      <div className="text-center text-2xl text-ahum-maroon font-bold">
        Gallery : {year}
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
              <img
                className="m-10 w-1/6"
                src={item.image_link}
                alt=""
                width="100px"
                srcset=""
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
