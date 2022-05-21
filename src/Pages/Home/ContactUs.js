import React from "react";
import contactBg from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
      className=" py-12"
    >
      <div className="text-center">
        <h1 className="text-secondary capitalize">contact us</h1>
        <h2 className="text-4xl capitalize text-white">
          Stay connected with us
        </h2>
      </div>
      <div className="md:w-2/4 px-6 mx-auto text-center">
        <form action="" className="flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-[100%] my-5"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-[100%] my-5"
          />
          <div className=" w-full">
            <textarea
              className="textarea w-full textarea-primary my-5"
              rows="5"
              placeholder="Bio"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className=" px-10 max-w-[20%] my-5 py-3 rounded-lg bg-gradient-to-r from-secondary to-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
