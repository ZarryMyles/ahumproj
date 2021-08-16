import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// recaptcha
import Captcha from "./Captcha";

export default function Form(props) {
  const history = useHistory();
  // api
  const rsvpAPI = process.env.REACT_APP_API_END + "rsvps";
  const upcomingAPI = process.env.REACT_APP_API_END + "upcomings";
  //
  const { title, event } = props.match.params;
  const eventName = props.match.params.event;
  const titles = ["enquiry", "rsvp", "bookthespace"];
  const [currentShows, setCurrentShows] = useState([]);
  // captcha verification
  const [captcha, setCaptcha] = useState(false);
  const captchaVerify = () => {
    setCaptcha(true);
  };
  const captchaExpired = () => {
    setCaptcha(false);
  };

  // toastify
  const notify = (message) => toast(message);
  // input values
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phone: "",
    attendees: "",
  });
  // bordercolors of input fields
  const [nameBorder, setNameBorder] = useState("gray");
  const [emailBorder, setEmailBorder] = useState("gray");
  const [phoneBorder, setPhoneBorder] = useState("gray");
  const [attendeesBorder, setAttendeesBorder] = useState("gray");

  let getData = async () => {
    await fetch(upcomingAPI, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }).then((res) =>
      res.json().then((events) => {
        events.map((event) =>
          setCurrentShows((currentShows) => currentShows.concat(event.title))
        );
      })
    );
  };
  // regex for phone number and email
  const validateEmail = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validatePhone = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i
  );
  // validating input values
  const validateValues = () => {
    console.log(
      !validatePhone.test(inputValues.phone),
      inputValues.phone === ""
    );
    let invalid = false;
    if (inputValues.name === "") {
      invalid = true;
      setNameBorder("red");
    } else setNameBorder("gray");
    if (!validatePhone.test(inputValues.phone) || inputValues.phone === "") {
      invalid = true;
      setPhoneBorder("red");
    } else setPhoneBorder("gray");
    if (!validateEmail.test(inputValues.email) || inputValues.email === "") {
      invalid = true;
      setEmailBorder("red");
    } else setEmailBorder("gray");
    if (inputValues.attendees === "" || inputValues.attendees < 1) {
      invalid = true;
      setAttendeesBorder("red");
    } else setAttendeesBorder("gray");
    return invalid;
  };
  // submit handler
  const onsubmit = (e) => {
    if (!captcha) {
      notify(
        <div className="text-center text-red-500">Please fill the captcha!</div>
      );
      return;
    }
    e.preventDefault();
    const rsvpSubmissionData = {
      name: inputValues.name,
      mail: inputValues.email,
      phone: inputValues.phone,
      attendees: inputValues.attendees,
      event: eventName,
    };
    if (!validateValues())
      if (currentShows.includes(eventName)) {
        // send data to api
        axios.post(rsvpAPI, rsvpSubmissionData, {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        });
        notify(
          <div className=" text-green-800 text-center">
            Submitted! <br /> We will get back to you.
          </div>
        );
        setTimeout(() => {
          return history.push("/upcoming-shows");
        }, 1000);
      } else {
        notify(
          <div className=" text-red-500 text-center">
            Error finding event. <br /> Please try again.
          </div>
        );
        setTimeout(() => {
          return history.push("/upcoming-shows");
        }, 1000);
      }
    else
      notify(
        <div className="text-red-500 text-center">
          Please enter correct details!
        </div>
      );
  };
  const backHandler = () => {
    history.push("/upcoming-shows");
  };
  // checking if the event is valid
  function checkQuery() {
    if (!titles.includes(title.toLowerCase())) {
      return history.push("/");
    }
  }
  useEffect(() => {
    checkQuery();
    getData();

    // if (!currentShows.includes(eventName)) {
    //   return history.push("/upcoming-shows");
    // }
  }, []);

  // input box
  const inputCSS =
    "focus:placeholder-gray-200 focus:outline-none focus:shadow-xl hover:shadow-md placeholder-gray-400 mb-3 py-2 px-2 w-full  ";

  function form(rsvp = false) {
    return (
      <div className="flex flex-col md:w-5/12 " id="rsvp-form">
        <span className="mb-3 font-medium">Please provide your details!</span>
        <div className="md:w-12/12">
          <input
            className={inputCSS}
            style={{ borderColor: nameBorder }}
            id="formName"
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={(e) => {
              setInputValues({ ...inputValues, name: e.target.value });
            }}
          />
        </div>
        <div className="md:flex justify-between ">
          {rsvp ? (
            <div className="md:w-5/12 w-3/3">
              <input
                id="formPhno"
                onChange={(e) => {
                  setInputValues({ ...inputValues, phone: e.target.value });
                }}
                className={inputCSS}
                style={{ borderColor: phoneBorder }}
                type="text"
                name="phno"
                placeholder="Phone number"
              />
            </div>
          ) : (
            <div className="md:w-5/12 w-3/3 ">
              <input
                className={inputCSS}
                style={{ borderColor: phoneBorder }}
                onChange={(e) => {
                  setInputValues({ ...inputValues, phone: e.target.value });
                }}
                id="formPhno"
                type="text"
                name="phno"
                placeholder="Phone number"
              />
            </div>
          )}
          {rsvp ? (
            <div className="md:w-6/12 w-3/3 md:ml-10">
              <input
                id="formMail"
                onChange={(e) => {
                  setInputValues({ ...inputValues, email: e.target.value });
                }}
                className={inputCSS}
                style={{ borderColor: emailBorder }}
                type="email"
                name="mail"
                placeholder="Email"
              />
            </div>
          ) : (
            <div className="md:w-6/12 w-3/3">
              <input
                className={inputCSS}
                style={{ borderColor: emailBorder }}
                onChange={(e) => {
                  setInputValues({ ...inputValues, email: e.target.value });
                }}
                id="formMail"
                type="email"
                name="mail"
                placeholder="Email"
              />
            </div>
          )}
        </div>

        <div className="md:w-5/12 w-3/32">
          <input
            className={inputCSS}
            style={{ borderColor: attendeesBorder }}
            onChange={(e) => {
              setInputValues({ ...inputValues, attendees: e.target.value });
            }}
            type="number"
            min="1"
            id="attendees"
            name="attendees"
            placeholder="No. of attendees"
          />
        </div>

        <div className="mx-auto">
          <Captcha
            captchaVerify={captchaVerify}
            captchaExpire={captchaExpired}
          />
        </div>
        <button
          className="my-1 md:py-1 py-2  mx-auto md:px-0 px-4 bg-ahum-brown transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-white text-lg"
          type="submit"
          onClick={(event) => {
            onsubmit(event);
          }}
          value="Send Message"
        >
          Submit
        </button>
        <div
          className="  text-ahum-brown text-center underline text-sm cursor-pointer my-1 "
          onClick={backHandler}
        >
          Back
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center  mt-10 justify-center px-0 md:ml-20  pb-32 .font-montserrat">
      <h2 className="text-2xl font-semibold text-ahum-maroon mb-5">
        {title === "rsvp" && event}
        {title === "bookthespace" && "Book The Space"}
        {title === "enquiry" && "Enquiry"}
      </h2>
      {title === "rsvp" ? form(true) : form()}
      <div className="rsvp-form-toast">
        <ToastContainer
          position="bottom-center"
          autoClose={3500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          limit={1}
        />
      </div>
    </div>
  );
}
