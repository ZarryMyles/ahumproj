import React, { useState, useEffect } from "react";
import TempArchive from "./TempArchive";
import axios from "axios";
export default function ArchiveMedia(props) {
  let { year, category } = props;
  const [archive, setArchive] = useState();
  // api
  // const archiveAPI = process.env.REACT_APP_API_END + "archives";
  const archiveAPI = "http://localhost:3000/JSON/archives.json";

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  let getData = async () => {
    axios
      .get(archiveAPI, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => setArchive(res.data))
      .then((res) => console.log(res))
      .catch((error) => {
        console.log("err", error);
      });
  };

  const currentYear = new Date().getFullYear().toString();

  // filters based on currentyear, chosen year , chosen year and program
  const byYear =
    archive && archive.filter((program) => program.date.split("-")[0] === year);
  const byProgYear =
    archive &&
    archive.filter(
      (program) =>
        program.date.split("-")[0] === year &&
        program.category.toLowerCase().trim().replaceAll(" ", "") === category
    );
  const byCurrentYear =
    archive &&
    archive.filter((program) => program.date.split("-")[0] === currentYear);

  // choosing filter
  function chooseFilter() {
    let currentMonth = "";
    if (year !== "year" && category === "program")
      return (
        archive &&
        byYear.map((program) => {
          let dispMonth = true;
          if (currentMonth === program.date.split("-")[1]) dispMonth = false;
          else currentMonth = program.date.split("-")[1];
          return <TempArchive program={program} dispMonth={dispMonth} />;
        })
      );
    else if (year !== "year" && category !== "program") {
      return (
        archive &&
        byProgYear.map((program) => {
          let dispMonth = true;
          if (currentMonth === program.date.split("-")[1]) dispMonth = false;
          else currentMonth = program.date.split("-")[1];
          return <TempArchive program={program} dispMonth={dispMonth} />;
        })
      );
    } else if (year === "year" && category === "program")
      return (
        archive &&
        byCurrentYear.map((program) => {
          let dispMonth = true;
          if (currentMonth === program.date.split("-")[1]) dispMonth = false;
          else currentMonth = program.date.split("-")[1];
          return <TempArchive program={program} dispMonth={dispMonth} />;
        })
      );
    else
      return (
        archive &&
        byCurrentYear.map((program) => {
          let dispMonth = true;
          if (currentMonth === program.date.split("-")[1]) dispMonth = false;
          else currentMonth = program.date.split("-")[1];
          return <TempArchive program={program} dispMonth={dispMonth} />;
        })
      );
  }
  const filter = chooseFilter();

  return (
    <div>
      {filter ? (
        !filter.length > 0 ? (
          <div className="my-auto w-auto md:ml-64 ml-12   md:h-32 h-96 md:px-100 flex items-center ">
            {" "}
            <h3 className="my-auto md:ml-32 text-center text-xl text-ahum-maroon pt-0 ">
              No results found!
            </h3>
          </div>
        ) : (
          filter
        )
      ) : (
        <div className=" hidden  md:flex flex-col items-center justify-center my-10 ">
          <div class="page-loader my-auto w-full md:left-16   flex flex-col items-center">
            <div class="spinner bg-ahum-maroon  my-4"></div>
            <div class="txt text-ahum-brown font-monserrat font-semibold md:text-2xl text-xl text-center">
              Loading data
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
