import React, { useState, useEffect } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// import archives from "../assets/JSON/archives.json";
import TempArchive from "./TempArchive";
import axios from "axios";
export default function ArchiveMedia(props) {
  const { year, category } = props;
  const [archive, setArchive] = useState();

  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    // const { data: archiveData } = await axios.get(
    //   "https://sheetdb.io/api/v1/nhnqv6cb4schd"
    // );
    await fetch("https://sheetdb.io/api/v1/nhnqv6cb4schd").then((res) =>
      res.json().then((archiveData) => setArchive(archiveData))
    );
    console.log(year, category);
  };
  function filtering() {
    const newData = archive.filter(
      (program) =>
        program.category.toLowerCase().trim() === "saturdays at swastika"
    );
  }
  const byProg =
    archive &&
    archive.filter(
      (program) =>
        program.category.toLowerCase().trim().replaceAll(" ", "") === category
    );
  const byYear =
    archive &&
    archive.filter(
      (program) =>
        program.date.toLowerCase().trim().replaceAll(" ", "").slice(-4) === year
    );
  const byProgYear =
    archive &&
    archive.filter(
      (program) =>
        program.date.toLowerCase().trim().replaceAll(" ", "").slice(-4) ===
          year &&
        program.category.toLowerCase().trim().replaceAll(" ", "") === category
    );
  const byCurrentYear =
    archive &&
    archive.filter(
      (program) =>
        program.date.toLowerCase().trim().replaceAll(" ", "").slice(-4) ===
        "2021"
    );
  return (
    <>
      {/* {archive && byProg.map((program) => <TempArchive program={program}/>)} */}
      {/* {archive &&   byYear.map((program) => console.log("by year", program.event))} */}
      {archive &&
        byProgYear.map((program) => <TempArchive program={program} />)}
      {/* {archive &&         byCurrentYear.map((program) =>           console.log("by current", program.event)   )} */}
    </>
  );
}
