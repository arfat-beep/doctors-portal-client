import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button className=" btn btn-primary text-uppercase text-white bg-gradient-to-r from-secondary to-primary">
      {children}
    </button>
  );
};

export default PrimaryBtn;
