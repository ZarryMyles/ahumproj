import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Linkicon from "@material-ui/icons/Link";
export default function TempArchive(props) {
  const { program } = props;
  return (
    <div className="md:grid xs:pl-5 md:ml-0 xs:ml-0.5 md:pl-0 grid-cols-12 gap-6 items-center py-4 my-8">
      <div className="rounded-full flex bg-black md:h-3 md:w-3 h-4 w-4 col-span-1 md:-ml-2 xs:-ml-8"></div>
      <div className="col-span-2  font-normal text-lg xs:pb-3 md:pb-0 -mt-7  md:-mt-0">
        {program.date.slice(-4)}
      </div>
      <div className="col-span-5 mr-20">
        <img src={program.image_link} />
      </div>
      <div className="col-span-4 text-center text-base ">
        <span className="py-1 block text-base font-semibold ">
          ‘{program.event.toUpperCase()}’
        </span>
        <span className="py-2 block font-normal">
          Artists :{program.artists}{" "}
        </span>
        <span className="py-1 block text-justify  font-normal leading-5">
          {program.category}
        </span>
        {program.instagram && (
          <a href={program.instagram} className="px-3 py-2 mr-2">
            <InstagramIcon style={{ fontSize: 30 }} />
          </a>
        )}
        {program.youtube && (
          <a href={program.links.youtube} className="px-3 py-2 ">
            <YouTubeIcon style={{ fontSize: 30 }} />
          </a>
        )}
        {program.link && (
          <a href={program.link} className="px-3 py-2 ">
            <Linkicon style={{ fontSize: 30 }} />
          </a>
        )}
      </div>
    </div>
  );
}
