import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Card from "./Card";
import $ from "jquery";
import axios from "axios";
import logo from "../Images/logo.png";
import TopLogoBar from "./TopLogoBar";

function UpcomingShows() {
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(true);
  const showsAPI = "https://sheetdb.io/api/v1/f33dgqjo600c9";
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
    setLoading(false);
  }, []);
  const getData = async () => {
    const { data: events } = await axios.get(showsAPI);
    setEvents(events);
    console.log(events.length);
  };
  function eventCard(program) {
    return (
      <div className="col-sm-12 col-md-6 col-xl-4 my-2">
        <div
          data-aos="fade-down"
          data-aos-duration="400"
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
  function displayError(loading = false) {
    if (!loading)
      return (
        <div className=" w-full h-96  flex flex-col items-center justify-center">
          <h1 className=" text-center  text-ahum-maroon font-semibold md:text-4xl text-2xl mb-10">
            No Upcoming Shows
          </h1>
          <div className="flex items-center flex-col justify-center">
            <h3 className="md:text-xl text-lg ">Checkout our archives</h3>
            <a
              href="/archives"
              type="button"
              className="btn py-1.5 px-5 md:my-3"
              style={{
                borderRadius: "25px",
                background: "#401A21",
                color: "white",
              }}
            >
              Archives
            </a>
          </div>
          <div className=" flex md:flex-row flex-col w-2/3 justify-center mt-14 items-center">
            <h4 className="md:text-lg text-sm my-2">
              Subscribe to stay updated :{" "}
            </h4>
            <input
              type="text"
              placeholder="you@mail.com"
              className="my-auto  focus:placeholder-gray-200 focus:outline-none focus:shadow-xl hover:shadow-md placeholder-gray-300 mb-3 py-2 mx-2 pl-2 md:w-auto w-2/3   border-solid border border-black"
            />
            <button
              className="my-2 py-1 px-4 bg-ahum-brown trantop sition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-white text-lg "
              type="submit"
              value="Send Message"
            >
              Submit
            </button>
          </div>
        </div>
      );
    if (loading)
      return (
        <div className=" w-full h-96  flex flex-col items-center justify-center">
          <h1 className=" text-center  text-ahum-maroon font-semibold md:text-4xl text-2xl">
            Loading Data
          </h1>
          <div className="flex items-center flex-col justify-center">
            <h4 className="text-lg my-5 text-center">Please wait...</h4>
          </div>
        </div>
      );
  }
  return (
    <div className=" md:ml-20 ">
      <h1 className="text-2xl font-semibold text-center text-gray-700  md:my-5 ">
        {events && events.length !== 0 ? "Upcoming Shows" : ""}
      </h1>
      {events ? (
        events.length !== 0 ? (
          <div className="flex md:flex-wrap md:flex-row  flex-col   ">
            {events.map((event) => eventCard(event))}
          </div>
        ) : (
          displayError()
        )
      ) : (
        displayError(true)
      )}
    </div>
  );
}

export default UpcomingShows;
