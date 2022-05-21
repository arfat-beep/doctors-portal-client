import React from "react";
import PatientsCard from "./PatientsCard";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import quotes from "../../assets/icons/quote.svg";
const Patients = () => {
  const patients = [
    {
      _id: 12,
      img: people1,
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
    },
    {
      _id: 15,
      img: people2,
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
    },
    {
      _id: 17,
      img: people3,
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
    },
  ];
  return (
    <section className="mt-12">
      <div className="flex justify-between px-12">
        <div className="px-12 mb-[100px]">
          <h1 className="text-secondary capitalize text-xl">testimonial</h1>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quotes} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-12">
        {patients.map((patient) => (
          <PatientsCard key={patient._id} patient={patient} />
        ))}
      </div>
    </section>
  );
};

export default Patients;
