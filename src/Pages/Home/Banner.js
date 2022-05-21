import React from "react";
import chair from "../../assets/images/chair.png";
import bgChair from "../../assets/images/bg.png";
import PrimaryBtn from "../Shared/PrimaryBtn";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen w-100 bg-no-repeat bg-left-top"
      style={{
        backgroundImage: ` url(${bgChair})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse px-5">
        <img alt="" src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="px-5">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6 text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryBtn>Get started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
