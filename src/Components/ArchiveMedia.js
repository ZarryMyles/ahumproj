import React, { useState, useEffect } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// import archives from "../assets/JSON/archives.json";
import TempArchive from "./TempArchive";
import axios from "axios";
export default function ArchiveMedia(props) {
  let { year, category } = props;

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
  const bySwastika =
    archive &&
    archive.filter(
      (program) =>
        program.date.toLowerCase().trim().replaceAll(" ", "").slice(-4) ===
          "2021" &&
        program.category.toLowerCase().trim().replaceAll(" ", "") ===
          "saturdaysatswastika"
    );
  function chooseFilter() {
    if (year.toLowerCase() === "year" && category !== "program")
      return (
        archive && byProg.map((program) => <TempArchive program={program} />)
      );
    else if (year.toLowerCase() !== "year" && category === "program")
      return (
        archive && byYear.map((program) => <TempArchive program={program} />)
      );
    else if (year.toLowerCase() !== "year" && category !== "program") {
      return (
        archive &&
        byProgYear.map((program) => <TempArchive program={program} />)
      );
    } else if (year.toLowerCase() === "year" && category === "program")
      return (
        archive &&
        byCurrentYear.map((program) => <TempArchive program={program} />)
      );
    else
      return (
        archive &&
        byCurrentYear.map((program) => <TempArchive program={program} />)
      );
  }
  const filter = chooseFilter();
  return <>{filter && !filter.length > 0 ? <h2>Empty</h2> : filter}</>;
}
