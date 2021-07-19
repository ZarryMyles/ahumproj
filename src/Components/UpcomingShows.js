import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function UpcomingShows() {
  const [events, setEvents] = useState();
  const [mail, setMail] = useState();
  // api
  const newsLetterAPI = process.env.REACT_APP_API_END + "newsletters";
  const showsAPI = process.env.REACT_APP_API_END + "upcomings";

  const validateEmail = RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i);

  // event handlers
  function mailChange(email) {
    setMail(email);
  }
  function submitHandler() {
    if (!mail || !validateEmail.test(mail)) {
      alert("Enter a Valid e-mail");
    } else {
      axios.post(
        newsLetterAPI,
        {
          mail: mail,
        },
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      alert("Your have been subscribed");
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);
  const getData = async () => {
    axios
      .get(showsAPI, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => setEvents(res.data))
      .catch((error) => {
        console.log("err", error);
      });
  };

  // upcoming show card
  function eventCard(program) {
    return (
      <div className="col-sm-12 col-md-6 col-xl-4 my-2">
        <div
          data-aos="flip-right"
          data-aos-duration="800"
          class="bg-holderbg2  mx-auto my-3"
          style={{ backgroundImage: `url('${program.image}')` }}
        ></div>
        <Card
          title={program.title}
          c1={program.time}
          c2={program.date.split("-").reverse().join("-")}
          c3={program.place}
        />
      </div>
    );
  }

  function displayError(loading = false) {
    // when no upcoming shows present
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
              onChange={(e) => mailChange(e.target.value)}
              className="my-auto  focus:placeholder-gray-200 focus:outline-none focus:shadow-xl hover:shadow-md placeholder-gray-400 mb-3 py-2 mx-2 pl-2 md:w-auto w-2/3  border "
            />
            <button
              className="my-2 py-1 px-4 bg-ahum-brown trantop sition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-white text-lg "
              type="submit"
              value="Send Message"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      );
    // preloader
    if (loading)
      return (
        <div className=" w-full   flex flex-col items-center justify-center md:mt-64 mt-64">
          <div class="page-loader ">
            <div class="spinner bg-ahum-maroon my-4"></div>
            <div class="txt text-ahum-brown font-montserrat font-semibold md:text-2xl text-xl text-center">
              Loading data
            </div>
          </div>
        </div>
      );
  }

  return (
    <div className=" md:ml-20 " style={{ transitionDelay: "0" }}>
      <h1 className="text-2xl font-semibold text-center text-gray-700  my-2  ">
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

      <div class="p-20 flex ">
        <div class="w-10 h-10 bg-red-500 rounded m-5"></div>
        <div class="w-10 h-10 bg-red-500 rounded m-5"></div>
        <div class="w-10 h-10 bg-red-500 rounded m-5"></div>
        <div class="w-10 h-10 bg-red-500 rounded m-5"></div>
      </div>
    </div>
  );
}

export default UpcomingShows;
