import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Card from "./Card";
import $ from "jquery";
import axios from "axios";
import logo from "../Images/logo.png";
import TopLogoBar from "./TopLogoBar";

function UpcomingShows() {
  const [events, setEvents] = useState();
  const showsAPI =
    "https://sheet.best/api/sheets/d370af91-859b-489a-b5e3-c5263c9e1648";
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);
  const getData = async () => {
    const { data: events } = await axios.get(showsAPI);
    setEvents(events);
    console.log(events.length);
  };
  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };
  const resize = () => {
    $("#sidebar").addClass("active");
  };
  function eventCard(program) {
    return (
      <div className="col-sm-12 col-md-6 col-xl-4 my-2">
        <div
          class="bg-holderbg2  mx-auto my-3"
          style={{ backgroundImage: `url('${program.image}')` }}
        ></div>
        <Card
          title={program.title}
          c1={program.time}
          c2={program.date}
          c3={program.place}
        />
      </div>
    );
  }
  function displayError() {
    return (
      <div className=" w-full  flex flex-col items-center justify-center">
        <h1 className=" text-center  text-ahum-maroon font-semibold text-4xl ">
          No Upcoming Shows
        </h1>
        <div className="flex items-center flex-col justify-center">
          <h3>Checkout our archives</h3>
          <button
            type="button"
            className="btn py-1.5 px-5 my-3"
            style={{
              borderRadius: "25px",
              background: "#401A21",
              color: "white",
            }}
          >
            Archives
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className=" md:ml-20">
      <h1 className="text-2xl font-semibold text-center text-gray-700 mt-0 md:mb-5 ">
        Upcoming Shows
      </h1>
      {events && events.length !== 0 ? (
        <div className="flex md:flex-wrap md:flex-row  flex-col   md:ml-20">
          {events.map((event) => eventCard(event))}
        </div>
      ) : (
        displayError()
      )}
    </div>
  );
}

export default UpcomingShows;
