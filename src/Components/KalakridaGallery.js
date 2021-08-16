import React from "react";

export default function KalakridaGallery(props) {
  const year = props.match.params.year;
  return (
    <div>
      <div className="text-center text-2xl text-ahum-maroon font-bold">
        Gallery : {year}
      </div>
      <div className="text-ahum-brown flex justify-end mx-10 underline ">
        <a href={`/kalakrida/` + year}>Back</a>
      </div>
    </div>
  );
}
