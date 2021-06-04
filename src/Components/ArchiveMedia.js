import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import archives from "../assets/JSON/archives.json";
import TempArchive from "./TempArchive";

export default function ArchiveMedia(props) {
  const { year, month, program } = props;
  console.log(year, month);

  return (
    <>
      {archives.map((program) => (
        <TempArchive program={program} />
      ))}
    </>
  );
}
