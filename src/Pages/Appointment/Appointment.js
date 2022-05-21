import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AvailableAppointment from "./AvailableAppointment";
import BannerAppointment from "./BannerAppointment";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div>
      <BannerAppointment selected={selected} setSelected={setSelected} />
      <AvailableAppointment selected={selected} setSelected={setSelected} />
      <Footer />
    </div>
  );
};

export default Appointment;
