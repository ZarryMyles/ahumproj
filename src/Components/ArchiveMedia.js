import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import archives from "../assets/JSON/archives.json";
import TempArchive from "./TempArchive";

export default function ArchiveMedia(props) {
  const { year, month } = props;
  const programType = undefined;
  console.log(year || programType);

  return (
    <>
      {year !== undefined &&
        programType !== undefined &&
        archives
          .filter(
            (program) =>
              program.programType.trim().toLowerCase() ===
                programType.toLowerCase().trim() && program.date.year === year
          )
          .map((program) => <TempArchive program={program} />)}

      {/*if only year is mentioned  */}
      {year !== undefined &&
        programType === undefined &&
        archives
          .filter((program) => program.date.year === year)
          .map((program) => <TempArchive program={program} />)}

      {/* if only program type is mentioned */}
      {year === undefined &&
        programType !== undefined &&
        archives
          .filter(
            (program) =>
              program.programType.trim().toLowerCase() ===
              programType.toLowerCase().trim()
          )
          .map((program) => <TempArchive program={program} />)}

      {/* if both program and year arent selected */}
      {year === undefined &&
        programType === undefined &&
        archives
          .filter((program) => program.date.year === "2020")
          .map((program) => <TempArchive program={program} />)}
    </>
  );
}
