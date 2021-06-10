import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export default function Form(props) {
  const { title, event } = props.match.params;

  const titles = ["enquiry", "rsvp", "bookthespace"];
  const events = ["event 1", "event 2", "event 3"];
  const history = useHistory();
  console.log(event, title);
  const [formDetails, setFormDetails] = useState({
    name: "",
    phno: "",
    mail: "",
    msg: "",
    attendees: "",
    error: {
      name: "Enter a vaild Name",

      phno: "Enter a vaild Phone Number",
      mail: "Enter a vaild Email Address",
      msg: title === "bookthespace" ? "Enter a vaild Message" : "",
      attendees: title === "rsvp" ? "Enter a vaild numbe for attendees" : "",
    },
  });
  const validateEmail = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validatePhone = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i
  );
  let changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    switch (nam) {
      case "name":
        setFormDetails((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            name: val.length < 2 ? "Enter a vaild Name" : "",
          },
        }));
        break;

      case "mail":
        setFormDetails((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            mail: validateEmail.test(val) ? "" : "Enter a valid email address",
          },
        }));
        break;

      case "phno":
        setFormDetails((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            phno: validatePhone.test(val) ? "" : "Enter a valid Phone Number",
          },
        }));
        break;

      case "msg":
        setFormDetails((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            msg: val.length < 5 ? "Enter a valid message!" : "",
          },
        }));
        break;
      case "attendees":
        setFormDetails((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            attendees:
              val <= 0 || val.length === 0
                ? "Enter a valid number of attendees!"
                : "",
          },
        }));
        break;
      default:
        break;
    }

    setFormDetails((prevState) => ({ ...prevState, [nam]: val }));
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    const validateForm = (errors) => {
      let valid = true;
      Object.keys(errors).forEach((key) => {
        if (errors[key].length !== 0 && valid === true) {
          alert(errors[key]);
          valid = false;
        }
      });
      return valid;
    };
    if (validateForm(formDetails.error)) {
      // console.log({
      //   Name: formDetails.name,
      //   Mail: formDetails.mail,
      //   PhNo: formDetails.phno,
      //   Message: formDetails.msg,
      //   Att: formDetails.attendees,
      //   Date: new Date().toLocaleString(),
      // });

      // setBorderColor("green"); //Changes field border color to green
      // Reset checkboxes and fields
      // document.getElementById("cForm").reset();
      // document.getElementById("formName").placeholder = "Your Name";
      // document.getElementById("formMail").placeholder = "Email";
      // document.getElementById("formPhno").placeholder = "Phone";
      // document.getElementById("formMsg").placeholder = "Your Message";
      // document.getElementById("attendees").placeholder = "No. of attendees";

      alert("Your Details have been submitted!");
      if (title === "rsvp") return history.push("/upcoming-shows");
      else if (title === "bookthespace") return history.push("/bookspace");
      else return history.push("/");
    } else {
    }
  };
  const inputCSS =
    "focus:placeholder-gray-200 focus:outline-none focus:shadow-xl hover:shadow-md placeholder-gray-300 mb-3 py-2 px-2 w-full border ";

  function checkQuery() {
    if (!titles.includes(title.toLowerCase())) {
      return history.push("/");
    }
    if (event !== undefined && !events.includes(event.toLowerCase())) {
      console.log(true);
      return history.push("/upcoming-shows");
    }
  }
  useEffect(() => {
    checkQuery();
  }, []);
  function form(rsvp = false) {
    return (
      <div className="flex flex-col md:w-5/12 ">
        <span className="mb-3 font-medium">Please provide your details!</span>
        <div className="md:w-12/12">
          <input
            className={inputCSS}
            id="formName"
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={(event) => {
              changeHandler(event);
            }}
          />
        </div>
        <div className="md:flex justify-between ">
          {rsvp ? (
            <div className="md:w-5/12 w-3/3">
              <input
                id="formPhno"
                className={inputCSS}
                type="text"
                name="phno"
                placeholder="Phone number"
                onChange={(event) => {
                  changeHandler(event);
                }}
              />
            </div>
          ) : (
            <div className="md:w-5/12 w-3/3 ">
              <input
                className={inputCSS}
                id="formPhno"
                type="text"
                name="phno"
                placeholder="Phone number"
                onChange={(event) => {
                  changeHandler(event);
                }}
              />
            </div>
          )}
          {rsvp ? (
            <div className="md:w-6/12 w-3/3 md:ml-10">
              <input
                id="formMail"
                className={inputCSS}
                type="email"
                name="mail"
                placeholder="Email"
                onChange={(event) => {
                  changeHandler(event);
                }}
              />
            </div>
          ) : (
            <div className="md:w-6/12 w-3/3">
              <input
                className={inputCSS}
                id="formMail"
                type="email"
                name="mail"
                placeholder="Email"
                onChange={(event) => {
                  changeHandler(event);
                }}
              />
            </div>
          )}
        </div>
        {rsvp && (
          <div className="md:w-5/12 w-3/32">
            <input
              className={inputCSS}
              type="number"
              min="0"
              // max="10"
              id="attendees"
              name="attendees"
              placeholder="No. of attendees"
              onChange={(event) => {
                changeHandler(event);
              }}
            />
          </div>
        )}
        {!rsvp && (
          <textarea
            className={inputCSS}
            id="formMsg"
            type="text"
            name="msg"
            placeholder="Your Message"
            onChange={(event) => {
              changeHandler(event);
            }}
          />
        )}
        <button
          className="my-1 md:py-1 py-2  mx-auto md:px-0 px-4 bg-ahum-brown transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-white text-lg"
          type="submit"
          onClick={(event) => {
            handleSubmit(event);
          }}
          value="Send Message"
        >
          Submit
        </button>
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
    </div>
  );
}
