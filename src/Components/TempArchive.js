import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PublicIcon from "@material-ui/icons/Public";

export default function TempArchive(props) {
  const { program } = props;
  return (
    <div className="md:grid xs:pl-5 md:ml-0 xs:ml-0.5 md:pl-0 grid-cols-12 gap-4 items-center py-8 flex-shrink-0 mb-10  ml-0 mr-6">
      <div
        className="rounded-full flex bg-black md:h-3 md:w-3 h-4 w-4 col-span-1  archive-dot"
        // md:-ml-2 xs:-ml-8
      ></div>
      <div className="col-span-2 pl-1.5 font-normal text-lg xs:pb-3  md:pb-0 -mt-5  md:-mt-0 md:mb-2 mb-3">
        {program.date.split(" ").length == 3 && program.date.split(" ")[1]}
        {program.date.split(" ").length == 2 && program.date.split(" ")[0]}
      </div>
      <div className="col-span-5 mr-10">
        <img
          className="archiveImages md:mb-0 mb-4"
          width="600px"
          height="300"
          src={
            program.image_link === ""
              ? "https://via.placeholder.com/310x225?text=No Image Available"
              : program.image_link
          }
        />
      </div>
      <div className="col-span-4 text-center text-base md:mr-0 mr-5">
        <span className="py-1 block text-xl font-semibold  text-center">
          ‘{program.event.toUpperCase()}’
        </span>
        <span className="py-2 block font-normal text-lg text-center  ">
          Artists: {program.artist}
        </span>
        <span className="py-2 mb-2 block font-normal text-lg leading-5 text-center">
          {program.category}
        </span>
        {program.instagram && (
          <a href={program.instagram} className="px-3 py-3">
            {/* <InstagramIcon style={{ fontSize: 25 }} /> */}
            <i class="fab fa-instagram"></i>
          </a>
        )}
        {program.youtube && (
          <a href={program.youtube} className="px-3 py-3">
            {/* <YouTubeIcon style={{ fontSize: 30 }} /> */}
            <i class="fab fa-youtube"></i>
          </a>
        )}
        {program.othLink && (
          <a href={program.othLink} className="px-3 py-2 ">
            {/* <PublicIcon style={{ fontSize: 25 }} /> */}
            <i class="fas fa-globe-americas"></i>{" "}
          </a>
        )}
      </div>
    </div>
  );
}
