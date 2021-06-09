import React, { useEffect, useState } from "react";
import $ from "jquery";
import { ImportantDevices } from "@material-ui/icons";

function Contact() {
  //Form data
  const [borderColor, setBorderColor] = useState("white");
  const [newsMail, setNewsMail] = useState("");
  const [formDetails, setFormDetails] = useState({
    name: "",
    phno: "",
    mail: "",
    msg: "",
    error: {
      name: "Enter a vaild Name",
      mail: "Enter a vaild Email Address",
      phno: "Enter a vaild Phone Number",
      msg: "Enter a vaild Message",
    },
  });

  const validateEmail = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validatePhone = RegExp(/^\d{10}$/i);

  //Contact form change and Submit Handlers
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
      console.log({
        Name: formDetails.name,
        Mail: formDetails.mail,
        PhNo: formDetails.phno,
        Message: formDetails.msg,
        Date: new Date().toLocaleString(),
      });

      setBorderColor("green"); //Changes field border color to green

      // Reset checkboxes and fields
      document.getElementById("cForm").reset();
      document.getElementById("name").placeholder = "Your Name";
      document.getElementById("mail").placeholder = "Email";
      document.getElementById("phno").placeholder = "Phone";
      document.getElementById("msg").placeholder = "Your Message";

      alert("Your Details have been submitted!");
    } else {
      setBorderColor("red");
      console.error("Invalid Form");
    }
  };

  //Newsletter handler
  let newsHandler = (event) => {
    event.preventDefault();
    if (validateEmail.test(newsMail)) {
      document.getElementById("newsLetter").reset();
      document.getElementById("newsLetter").placeholder = "Email Address";
      alert("Your have been subscribed");
    } else {
      alert("Please enter a valid Email");
      setBorderColor("red");
    }
  };

  const inputCSS =
    "inputCss focus:placeholder-gray-500 focus:outline-none focus:shadow-xl hover:shadow-md placeholder-gray-400 mb-3 py-2 px-2 w-full border-solid border";

  return (
    <div class="wrapper">
      <div className="p-0 md:ml-20">
        <div class="container-fluid justify-content-center px-0">
          <>
            <div className="lg:grid mx-9 mt-10 lg:mt-0 lg:h-ahum-contact-screen grid-cols-2 gap-10 2xl:gap-0">
              <div className="flex justify-center items-center col-span-1 md:ml-24 md:w-8/12">
                <div className="flex flex-col">
                  <span className="font-normal mb-3 w-full text-center md:text-left md:w-auto">
                    Drop us a message, we'll call you back!
                  </span>
                  <form id="cForm">
                    <input
                      className={inputCSS}
                      type="text"
                      id="name"
                      style={{ borderColor: borderColor }}
                      name="name"
                      placeholder="Your Name"
                      onChange={(event) => {
                        changeHandler(event);
                      }}
                    />
                    <div className="md:grid grid-cols-5 gap-4">
                      <div className="col-span-2">
                        <input
                          className={inputCSS}
                          type="tel"
                          name="phno"
                          id="phno"
                          placeholder="Phone"
                          onChange={(event) => {
                            changeHandler(event);
                          }}
                        />
                      </div>
                      <div className="col-span-3">
                        <input
                          className={inputCSS}
                          type="email"
                          name="mail"
                          id="mail"
                          placeholder="Email"
                          onChange={(event) => {
                            changeHandler(event);
                          }}
                        />
                      </div>
                    </div>
                    <textarea
                      className={inputCSS}
                      type="text"
                      name="msg"
                      id="msg"
                      placeholder="Your Message"
                      onChange={(event) => {
                        changeHandler(event);
                      }}
                    />

                    <button
                      className="my-1 py-1 px-1 md:px-0 w-full md:w-1/5 bg-ahum-brown transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-white text-lg"
                      type="submit"
                      value="Send Message"
                      onClick={(event) => {
                        handleSubmit(event);
                      }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="xs:mt-4 md:mt-0 flex justify-center md:col-span-1 items-center md:ml-10 pb-8">
                <div className="flex flex-col w-full">
                  <span className="font-normal md:pl-12 md:text-justify text-center md:w-5/6 w-full">
                    Come drop by and explore our space
                    <br /> Let us know a day in advance
                    <br />
                    (10am to 5pm)
                  </span>
                  <div className="lg:w-5/6">
                    <iframe
                      className="w-full h-60 pt-3"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10992.079379615054!2d77.60054457270812!3d13.080992781944996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x82b5d79c5fe90710!2sart%20heart%20u%20%26%20mind!5e0!3m2!1sen!2sin!4v1618606129974!5m2!1sen!2sin"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-ahum-brown lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-52 h-max py-6 mt-10 lg:p-0 lg:mt-0">
              <div className="flex mx-9 lg:mt-0 h-full lg:ml-24 justify-center items-center">
                <div className="lg:grid w-full lg:grid-cols-8">
                  <div className="col-start-2 col-span-2 flex flex-col mb-2 md:mb-0">
                    <span className="text-white text-2xl">
                      Join our mailing list
                    </span>
                    <span className="uppercase text-white">
                      Never miss an update
                    </span>
                  </div>
                  <div className="lg:col-start-4 col-end-6 w-5/6 md:w-4/6 flex flex-col">
                    <form id="newsLetter">
                      <input
                        type="email"
                        className="newsField w-full text-white text-base bg-ahum-brown focus:bg-transparent focus:placeholder-transparent"
                        placeholder="Email Address"
                        onChange={(e) => setNewsMail(e.target.value)}
                      ></input>
                      <button
                        className="newsBtn w-full px-2 mt-2 bg-ahum-brown-collage transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-grey-600 text-base focus:border-none text-gray-700"
                        type="submit"
                        name="emailSubmit"
                        onClick={(event) => {
                          newsHandler(event);
                        }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  {/* for normal screen */}
                  <div className="col-start-6 col-end-8 hidden lg:flex flex-col">
                    <span className="text-white">
                      Phone : <a href="tel:+919886334046">+91 9886334046</a>,
                      +91 999999990
                    </span>
                    <span className="text-white">
                      Email :{" "}
                      <a href="mailto:contact@ahum.in">contact@ahum.in</a>
                    </span>
                  </div>
                  {/* for phones */}
                  <div className="col-start-6 pt-2 col-end-9 lg:hidden flex flex-col">
                    <span className="text-white">
                      Phone : <a href="tel:+919886334046">+91 9886334046</a>,
                      +91 999999990
                    </span>
                    <span className="text-white">
                      Email :{" "}
                      <a href="mailto:contact@ahum.in">contact@ahum.in</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Contact;
