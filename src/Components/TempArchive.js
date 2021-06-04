import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
export default function TempArchive(props) {
  const { program } = props;
  return (
    <div className="md:grid xs:pl-5 md:ml-0 xs:ml-0.5 md:pl-0 grid-cols-12 gap-6 items-center py-4 my-8">
      <div className="rounded-full flex bg-black md:h-5 md:w-5 h-4 w-4 col-span-1 md:-ml-3 xs:-ml-8"></div>
      <div className="col-span-2  font-normal text-lg xs:pb-3 md:pb-0 -mt-7  md:-mt-0">
        {program.date.month}
      </div>
      <div className="col-span-5">
        <img src={program.imagePath} />
      </div>
      <div className="col-span-4 text-center text-base ">
        <span className="py-1 block text-base font-semibold ">
          ‘{program.title.toUpperCase()}’
        </span>
        <span className="py-1 block font-normal">
          Artists :{program.artists}{" "}
        </span>
        <span className="py-1 block text-justify  font-normal leading-5">
          {program.description}
        </span>
        {program.links.insta && (
          <a href={program.links.insta} className="px-3 py-2">
            <InstagramIcon style={{ fontSize: 40 }} />
          </a>
        )}
        {program.links.youtube && (
          <a href={program.links.youtube} className="px-3 py-2 ">
            <YouTubeIcon style={{ fontSize: 40 }} />
          </a>
        )}
      </div>
    </div>
  );
}
