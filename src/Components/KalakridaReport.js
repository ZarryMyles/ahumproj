import React from "react";
import Preloader from "./Preloader";
import test from "../assets/testReport.pdf";
import ReportData from "../assets/JSON/kalakridaReport.json";

export default function KalakridaReport(props) {
  const year = props.match.params.year;
  const data = ReportData.filter((item) => item.year === year);
  return (
    <div className="md:ml-20">
      <div className="md:mt-0 mt-5 text-center text-2xl text-ahum-maroon font-bold">
        Kalakrida Report ({year})
      </div>

      <div className="flex text-ahum-brown  justify-end w-full pr-5">
        <a href={`/kalakrida/` + year}>&#129040; Back</a>
      </div>
      {console.log(data)}
      {data.length === 0 ? (
        <div className="flex justify-center">No data</div>
      ) : (
        <div className="flex justify-center flex-wrap">
          {data.map((item) => {
            return (
              <div className="ml-20 w-screen h-screen mb-10 flex items-center justify-center">
                <embed className="md:w-4/6 md:h-full " src={test}></embed>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
