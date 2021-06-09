import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function Form(props) {
  const { title } = props.match.params;
  const titles = ["enquiry", "rsvp"];
  const history = useHistory();

  const inputCSS =
    "focus:placeholder-gray-200 focus:outline-none focus:shadow-xl hover:shadow-md placeholder-gray-300 mb-3 py-2 px-2 w-full border-2  ";
  useEffect(() => {
    checkQuery();
  }, []);

  function checkQuery() {
    if (!titles.includes(title.toLowerCase())) {
      console.log("Redirecting..");
      return history.push("/");
    }
  }
  function form(rsvp = false) {
    return (
      <div className="flex flex-col md:w-2/3 ">
        <span className="mb-3 font-medium">We will get in touch!</span>
        <div className="md:w-12/12">
          <input
            className={inputCSS}
            type="text"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div className="md:flex  justify-between">
          <div className="md:w-4/12 w-3/3">
            <input
              className={inputCSS}
              type="number"
              name="name"
              placeholder="Phone"
            />
          </div>
          <div className="md:w-4/12 w-3/3">
            <input
              className={inputCSS}
              type="email"
              name="name"
              placeholder="Email"
            />
          </div>
          <div className="md:w-3/12 w-3/32">
            {rsvp && (
              <input
                className={inputCSS}
                type="number"
                min="0"
                // max="10"
                name="name"
                placeholder="No. of attendees"
              />
            )}
          </div>
        </div>
        <textarea
          className={inputCSS}
          type="text"
          name="name"
          placeholder="Your Message"
        />

        <button
          className="my-1 md:py-1 py-2 md:w-1/6 mx-auto md:px-0 px-4 bg-ahum-brown transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-white text-lg"
          type="submit"
          value="Send Message"
        >
          Submit
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center  mt-10 justify-center px-0 md:ml-20">
      <h2 className="text-2xl font-semibold text-ahum-maroon mb-5">
        {title === "enquiry" ? "Enquiry" : "RSVP"}
      </h2>
      {title === "enquiry" ? form() : form(true)}
    </div>
  );
}
