import React from "react";
import FolderIcon from "../assets/images/folder-maroon.png";
export default function KalakridaParentFolder(props) {
  const year = props.match.params.year;
  return (
    <div className=" h-96 ">
      <div className="flex justify-center text-2xl  md:py-5 text-center text-ahum-maroon font-montserrat font-bold">
        KALAKRIDA - {year}
      </div>
      <div className="flex md:flex-row flex-col justify-around my-10 text-xl">
        <a href={`/kalakrida/gallery/` + year}>
          <div className="flex">
            <img src={FolderIcon} alt="folder" className="img-fluid" />
            <div className="mx-2">Gallery</div>
          </div>
        </a>

        <a href={`/kalakrida/report/` + year}>
          <div className="flex">
            <img src={FolderIcon} alt="folder" className="img-fluid" />
            <div className="mx-2">Report</div>
          </div>
        </a>
      </div>
    </div>
  );
}
