import React, { useState, useEffect } from "react";

// import archives from "../assets/JSON/archives.json";
import TempArchive from "./TempArchive";
import axios from "axios";
export default function ArchiveMedia(props) {
  let { year, category } = props;

  const [archive, setArchive] = useState();
  const [currentMonth, setCurrentMonth] = useState("");
  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    // const { data: archiveData } = await axios.get(
    //   "https://sheetdb.io/api/v1/nhnqv6cb4schd"
    // );
    await fetch("https://sheetdb.io/api/v1/yvbjhrj1fdnek").then((res) =>
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
    let currentMonth = "";
    if (year === "year" && category !== "program")
      return (
        archive &&
        byProg.map((program) => {
          let dispMonth = true;
          if (currentMonth === program.date.split(" ")[1]) dispMonth = false;
          else currentMonth = program.date.split(" ")[1];
          console.log(currentMonth, dispMonth);
          return <TempArchive program={program} dispMonth={dispMonth} />;
        })
      );
    else if (year !== "year" && category === "program")
      return (
        archive &&
        byYear.map((program) => {
          let dispMonth = true;
          if (currentMonth === program.date.split(" ")[1]) dispMonth = false;
          else currentMonth = program.date.split(" ")[1];
          console.log(currentMonth, dispMonth);
          return <TempArchive program={program} dispMonth={dispMonth} />;
        })
      );
    else if (year !== "year" && category !== "program") {
      return (
        archive &&
        byProgYear.map((program) => {
          let dispMonth = true;
          if (currentMonth === program.date.split(" ")[1]) dispMonth = false;
          else currentMonth = program.date.split(" ")[1];
          console.log(currentMonth, dispMonth);
          return <TempArchive program={program} dispMonth={dispMonth} />;
        })
      );
    } else if (year === "year" && category === "program")
      return (
        archive &&
        byCurrentYear.map((program) => {
          let dispMonth = true;
          if (currentMonth === program.date.split(" ")[1]) dispMonth = false;
          else currentMonth = program.date.split(" ")[1];
          console.log(currentMonth, dispMonth);
          return <TempArchive program={program} dispMonth={dispMonth} />;
        })
      );
    else
      return (
        archive &&
        byCurrentYear.map((program) => {
          let dispMonth = true;
          if (currentMonth === program.date.split(" ")[1]) dispMonth = false;
          else currentMonth = program.date.split(" ")[1];
          console.log(currentMonth, dispMonth);
          return <TempArchive program={program} dispMonth={dispMonth} />;
        })
      );
  }
  const filter = chooseFilter();
  let test = [{ date: "january" }, { date: "march" }, { date: "february" }];
  return (
    <div>
      {filter && !filter.length > 0 ? (
        <div className="my-auto w-auto md:ml-64 ml-12   md:h-32 h-96 md:px-100 flex items-center ">
          {" "}
          <h3 className="my-auto md:ml-32 text-center text-xl text-ahum-maroon pt-0 ">
            No results found!
          </h3>
        </div>
      ) : (
        filter
      )}
    </div>
  );
}
