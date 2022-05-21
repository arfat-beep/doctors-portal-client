import React from "react";
import Footer from "../Shared/Footer";
import Appointment from "./Appointment";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Info from "./Info";
import Patients from "./Patients";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Appointment />
      <Patients />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
