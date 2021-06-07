import React from "react";

function Card({ title, c1, c2, c3 }) {
  return (
    <div className="md:mb-10">
      <div class="text-center">
        <h4 className=" pb-2 text-xl font-medium">{title}</h4>
      </div>
      <div class="flex  justify-center font-normal">
        <div className="w-1/3 text-right">
          <h6 className=" px-1.5   border-r-2 border-black">{c1}</h6>
        </div>
        <div className="w-0.5/3 text-center">
          <h6 className="px-1.5  border-r-2 border-black">{c2}</h6>
        </div>
        <div className="w-1/3 text-left">
          <h6 className="px-1.5 ">{c3}</h6>
        </div>
      </div>
      <div class="text-center my-2 ">
        <button
          type="button"
          className="btn py-1.5 px-5 my-3"
          style={{
            borderRadius: "25px",
            background: "#401A21",
            color: "white",
          }}
        >
          RSVP
        </button>
      </div>
    </div>
  );
}

export default Card;
