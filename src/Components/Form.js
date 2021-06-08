import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function Form(props) {
  const { title } = props.match.params;
  const titles = ["enquiry", "rsvp"];
  const history = useHistory();

  const inputCSS =
    "focus:placeholder-gray-200 focus:outline-none focus:shadow-xl hover:shadow-md placeholder-gray-300 mb-3 py-2 px-2 w-full border-solid border border-black";
  useEffect(() => {
    checkQuery();
  }, []);

  function checkQuery() {
    if (!titles.includes(title.toLowerCase())) {
      console.log("Redirecting..");
      return history.push("/");
    }
  }
  function enquiry() {
    return (
      <div className="flex flex-col md:w-2/3 w-11/12">
        <span className="mb-3 font-medium">We will get in touch!</span>
        <input
          className={inputCSS}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <input
              className={inputCSS}
              type="text"
              name="name"
              placeholder="Phone"
            />
          </div>
          <div className="col-span-3">
            <input
              className={inputCSS}
              type="text"
              name="name"
              placeholder="Email"
            />
          </div>
        </div>
        <textarea
          className={inputCSS}
          type="text"
          name="name"
          placeholder="Your Message"
        />

        <button
          className="my-1 py-1 md:w-1/5 bg-ahum-brown transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-white text-lg"
          type="submit"
          value="Send Message"
        >
          Submit
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center  mt-20 justify-center px-0 md:ml-20">
      <h2 className="text-2xl font-semibold text-ahum-maroon mb-5">
        {title[0].toUpperCase() + title.slice(1)}
      </h2>
      {enquiry()}
    </div>
  );
}
