import React, { useState, useEffect } from "react";
import TempArchive from "./TempArchive";

export default function ArchiveMedia(props) {
  let { year, category } = props;
  const archiveAPI = process.env.REACT_APP_API_END + "archives";
  const [archive, setArchive] = useState();
  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    await fetch(archiveAPI, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }).then((res) => res.json().then((archiveData) => setArchive(archiveData)));
  };

  const byProg =
    archive &&
    archive.filter(
      (program) =>
        program.category.toLowerCase().trim().replaceAll(" ", "") === category
    );
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
    archive.filter((program) => program.date.split("-")[0] === "2021");
  function chooseFilter() {
    let currentMonth = "";
    if (year === "year" && category !== "program")
      return (
        archive &&
        byProg.map((program) => {
          let dispMonth = true;
          if (currentMonth === program.date.split("-")[1]) dispMonth = false;
          else currentMonth = program.date.split("-")[1];
          console.log(currentMonth, dispMonth);
          return <TempArchive program={program} dispMonth={dispMonth} />;
        })
      );
    else if (year !== "year" && category === "program")
      return (
        archive &&
        byYear.map((program) => {
          let dispMonth = true;
          if (currentMonth === program.date.split("-")[1]) dispMonth = false;
          else currentMonth = program.date.split("-")[1];
          console.log(currentMonth, dispMonth);
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
          console.log(currentMonth, dispMonth);
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
          console.log(currentMonth, dispMonth);
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
          console.log(currentMonth, dispMonth);
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
{
  /* <div className="  flex flex-col items-center justify-center ">
  <div class="page-loader my-auto  w-full  md:ml-20 flex flex-col items-center">
    <div class="spinner bg-ahum-maroon my-4"></div>
    <div class="txt text-ahum-brown font-monserrat font-semibold md:text-2xl text-xl text-center">
      Loading data
    </div>
  </div>
</div> */
}
