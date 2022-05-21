import React from "react";

const PatientsCard = ({ patient }) => {
  const { img, desc, name, address } = patient;
  return (
    <div className="p-12 shadow-lg rounded-lg">
      <p>{desc}</p>
      <div className="flex items-center mt-6">
        <div>
          <img
            src={img}
            width="70"
            alt=""
            className="rounded-full border-primary border-2 p-1"
          />
        </div>
        <div className="pl-3">
          <p>{name}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientsCard;
