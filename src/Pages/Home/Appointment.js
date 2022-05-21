import React from "react";
import doctor from "../../assets/images/doctor.png";
import PrimaryBtn from "../Shared/PrimaryBtn";
import doctorBG from "../../assets/images/appointment.png";
const Appointment = () => {
  return (
    <section
      className="flex justify-center  items-center mt-[100px]"
      style={{
        backgroundImage: `url(${doctorBG})`,
      }}
    >
      <div className="mt-[-100px]">
        <img src={doctor} className=" hidden lg:block " alt="" />
      </div>
      <div className=" p-6 text-white">
        <h1 className="text-secondary text-2xl">Appointment</h1>
        <h2 className="text-4xl py-6">Make an appointment Today</h2>
        <p className="pb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </div>
    </section>
  );
};

export default Appointment;
