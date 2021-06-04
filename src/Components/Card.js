import React from "react";

function Card({ title, c1, c2, c3 }) {
  return (
    <React.Fragment>
      <div class="text-center">
        <h4 className=" pb-2 text-xl font-medium">{title}</h4>
      </div>
      <div class="d-flex justify-content-center font-normal">
        <div>
          <h6 className="customP3 ">{c1}</h6>
        </div>
        <div>
          <h6 className="customP3 ">{c2}</h6>
        </div>
        <div>
          <h6 className="customP3not ">{c3}</h6>
        </div>
      </div>
      <div class="text-center my-2">
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
    </React.Fragment>
  );
}

export default Card;
