import React from "react";

const InfoCard = ({ img, color, heading, desc }) => {
  return (
    <div className={`card card-side shadow-xl ${color} text-white px-5`}>
      <figure>
        <img alt="" src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
