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
    await fetch("https://sheetdb.io/api/v1/rl6xxethwit7k").then((res) =>
      res.json().then((archiveData) => setArchive(archiveData))
    );
  };
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  function compare(a, b) {
    if (
      months.indexOf(a.date.split(" ")[1]) <
      months.indexOf(b.date.split(" ")[1])
    )
      return -1;
    if (
      months.indexOf(a.date.split(" ")[1]) >
      months.indexOf(b.date.split(" ")[1])
    )
      return 1;
    return 0;
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
  function chooseFilter() {
    if (year === "year" && category !== "program")
      return (
        archive && byProg.map((program) => <TempArchive program={program} />)
      );
    else if (year !== "year" && category === "program")
      return (
        archive && byYear.map((program) => <TempArchive program={program} />)
      );
    else if (year !== "year" && category !== "program") {
      return (
        archive &&
        byProgYear.map((program) => <TempArchive program={program} />)
      );
    } else if (year === "year" && category === "program")
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
  let test = [{ date: "january" }, { date: "march" }, { date: "february" }];
  return (
    <>
      {filter && !filter.length > 0 ? (
        <div className="my-auto md:w-96 w-64  md:h-32 h-96 md:px-100 flex items-center">
          {" "}
          <h3 className="my-auto mx-auto text-center text-ahum-maroon pt-20">
            No results found! {console.log(test.compare)}
          </h3>
        </div>
      ) : (
        filter
      )}
    </>
  );
}
