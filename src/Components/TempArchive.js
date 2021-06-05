import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PublicIcon from "@material-ui/icons/Public";

export default function TempArchive(props) {
  const { program } = props;
  return (
    <div className="md:grid xs:pl-5 md:ml-0 xs:ml-0.5 md:pl-0 grid-cols-12 gap-6 items-center py-4 my-8">
      <div className="rounded-full flex bg-black md:h-3 md:w-3 h-4 w-4 col-span-1 md:-ml-2 xs:-ml-8"></div>
      <div className="col-span-2  font-normal text-lg xs:pb-3 md:pb-0 -mt-7  md:-mt-0">
        {program.date.split(" ")[1]}
      </div>
      <div className="col-span-5 mr-20">
        <img
          className="archiveImages"
          width="420px"
          src={
            program.image_link === ""
              ? "https://via.placeholder.com/310x225?text=No Image Available"
              : program.image_link
          }
        />
      </div>
      <div className="col-span-4 text-center text-base ">
        <span className="py-1 block text-base font-semibold  text-center">
          ‘{program.event.toUpperCase()}’
        </span>
        <span className="py-2 block font-normal text-center  ">
          Artists: {program.artist}{" "}
        </span>
        <span className="py-1   block font-normal   leading-5 text-center">
          {program.category}
        </span>
        {program.instagram && (
          <a href={program.instagram} className="px-3 py-2 mr-2">
            <InstagramIcon style={{ fontSize: 30 }} />
          </a>
        )}
        {program.youtube && (
          <a href={program.youtube} className="px-3 py-2 ">
            <YouTubeIcon style={{ fontSize: 30 }} />
          </a>
        )}
        {program.othLink && (
          <a href={program.othLink} className="px-3 py-2 ">
            <PublicIcon style={{ fontSize: 30 }} />
          </a>
        )}
      </div>
    </div>
  );
}
