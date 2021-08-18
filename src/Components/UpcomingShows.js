import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpcomingShows() {
  // toast notification
  const notify = (message) => toast(message);

  const [events, setEvents] = useState();
  const [mail, setMail] = useState();

  // subscribe input border color
  const [subColor, setSubColor] = useState("gray");

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
      setSubColor("red");
      notify(
        <div className="text-red-500 text-center">
          Please enter a valid email address
        </div>
      );
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
      setSubColor("green");

      notify(
        <div className=" text-green-800 text-center">
          Thank you for your interest in ahum!
        </div>
      );
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
    // eslint-disable-next-line
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
          // data-aos-offset="0"
          // data-aos="slide-right"
          // data-aos-duration="800"
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
        <div
          className="font-montserrat    flex flex-col items-center justify-center"
          style={{ height: "80vh" }}
        >
          <h1 className=" text-center   text-ahum-maroon font-semibold md:text-4xl text-2xl md:mb-10">
            No Upcoming Shows
          </h1>
          <div className="flex items-center flex-col justify-center">
            <h3 className="md:text-xl text-lg ">Take a look at our archives</h3>
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
          <div className=" flex md:flex-row flex-col w-2/3 justify-center  items-center">
            <h4 className="md:text-lg text-base my-2 font-medium ">
              Subscribe to stay updated :
            </h4>
            <input
              type="text"
              placeholder="your@email.com"
              onChange={(e) => mailChange(e.target.value)}
              className="my-auto text-center focus:placeholder-gray-200 focus:outline-none focus:shadow-xl hover:shadow-md placeholder-gray-400 mb-3 py-2 mx-2 pl-2 md:w-auto   "
              style={{ borderColor: subColor, border: "1px solid" }}
            />
            <button
              className="md:my-2 my-4 py-1 px-4 bg-ahum-brown trantop sition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-white text-lg "
              type="submit"
              value="Send Message"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
          <div className="upcoming-shows-toast relative">
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              limit={1}
            />
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
    <div
      className=" font-montserrat md:ml-20 "
      style={{ transitionDelay: "0" }}
    >
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
    </div>
  );
}

export default UpcomingShows;
