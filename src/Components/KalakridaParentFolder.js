import React from "react";

export default function KalakridaParentFolder(props) {
  const year = props.match.params.year;
  return (
    <div className=" ">
      <div className="flex justify-center text-center text-ahum-maroon font-montserrat font-bold">
        KALAKRIDA - {year}
      </div>
      <div className="flex justify-around my-10">
        <a href={`/kalakrida/gallery/` + year}>Gallery</a>
        <a href={`/kalakrida/report/` + year}>Report</a>
      </div>
    </div>
  );
}
