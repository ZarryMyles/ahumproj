import React from "react";
import ReportData from "../assets/JSON/kalakridaReport.json";

export default function KalakridaReport(props) {
  const year = props.match.params.year;
  const data = ReportData.filter((item) => item.year === year);
  return (
    <div className="md:ml-20">
      <div className="flex text-ahum-black  justify-start w-full lg:pr-5 pr-1 pt-2 md:mb-0 mb-3">
        <a
          href={`/kalakrida/` + year}
          className="flex md:pl-3 pl-1 md:text-base underline hover:underline"
        >
          Back
        </a>
      </div>
      <div className="md:mt-0 mt-1 font-bold text-2xl  md:py-5 text-center  font-montserrat">
        Kalakrida Report ({year})
      </div>

      {data.length === 0 ? (
        <div className="flex justify-center">No data</div>
      ) : (
        <div className="flex justify-center flex-wrap">
          {data.map((item) => {
            return (
              <div className=" w-screen md:h-screen md:mt-0 mt-10 mb-10 flex items-center justify-center">
                {window.innerWidth > 767 ? (
                  <iframe
                    className="md:w-4/6 md:h-full "
                    width="700"
                    title="PDFdesk"
                    height="600"
                    frameborder="0"
                    scrolling="no"
                    src={item.pdf_path}
                  ></iframe>
                ) : (
                  <iframe
                    className=""
                    width="100%"
                    title="PDFmobile"
                    height="600"
                    frameborder="0"
                    scrolling="no"
                    src={item.pdf_path + "#view=FitH"}
                  ></iframe>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
