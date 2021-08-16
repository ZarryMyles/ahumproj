import React from "react";

export default function Preloader() {
  return (
    <div>
      <div className=" w-full   flex flex-col items-center justify-center md:mt-64 mt-64">
        <div class="page-loader ">
          <div class="spinner bg-ahum-maroon my-4"></div>
          <div class="txt text-ahum-brown font-montserrat font-semibold md:text-2xl text-xl text-center">
            Loading data
          </div>
        </div>
      </div>
    </div>
  );
}
