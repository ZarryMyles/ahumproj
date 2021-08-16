import React from "react";
import FolderIcon from "../assets/images/folder-big-ahum.png";
import ReportIcon from "../assets/images/file-ahum.png";

export default function KalakridaParentFolder(props) {
  const year = props.match.params.year;

  return (
    <div className="   ml-20" style={{ height: "75vh" }}>
      <div className="flex justify-center text-2xl font-bold  md:py-5 text-center text-ahum-maroon font-montserrat ">
        KALAKRIDA - {year}
      </div>
      <div className="flex text-ahum-brown  justify-end w-full pr-5">
        <a href="/archives/">&#129040; Back</a>
      </div>
      <div className="flex md:flex-row flex-col justify-around my-5 text-3xl text-center  text-ahum-maroon ">
        <a href={`/kalakrida/gallery/` + year}>
          <div className="flex flex-col  ring-ahum-maroon p-20 rounded-lg hover:bg-ahum-brown-collage duration-300">
            <img
              src={FolderIcon}
              alt="folder"
              className="img-fluid"
              width="150px"
            />
            <div className="mx-2">Gallery</div>
          </div>
        </a>

        <a href={`/kalakrida/report/` + year}>
          <div className="flex flex-col ring-ahum-maroon p-20  rounded-lg hover:bg-ahum-brown-collage duration-300">
            <img
              src={ReportIcon}
              width="150px"
              alt="folder"
              className="img-fluid"
            />
            <div className="mx-2 mt-1">Report</div>
          </div>
        </a>
      </div>
    </div>
  );
}
