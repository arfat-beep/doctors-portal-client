import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 m-7">
      <InfoCard
        img={clock}
        color={"bg-gradient-to-r from-secondary to-primary"}
        heading={"Opening Hours"}
        desc={"Lorem Ipsum is simply dummy text of the pri"}
      />
      <InfoCard
        img={marker}
        color={"bg-accent"}
        heading={"Visit our location"}
        desc={"Brooklyn, NY 10036, United States"}
      />
      <InfoCard
        img={phone}
        color={"bg-gradient-to-r from-secondary to-primary"}
        heading={"Contact us now"}
        desc={"+000 123 456789"}
      />
    </div>
  );
};

export default Info;
