import React from "react";
import Service from "./Service";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";
const Services = () => {
  const allServices = [
    {
      _id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      img: cavity,
      title: "Cavity Filling",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 14,
      img: whitening,
      title: "Teeth Whitening",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ]; /* <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mx-7">
  {allServices.map((service) => (
    <Service key={service._id} service={service} />
  ))}
</div> */
  return (
    <div>
      <div className="text-center mt-24 mb-10">
        <h1 className="text-primary text-3xl uppercase">our services</h1>
        <h2 className="text-5xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mx-12">
        {allServices.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div className=" mx-12 my-20">
        <div className="card rounded-none lg:card-side bg-base-100 grid grid-cols-2">
          <figure className=" ">
            <img className="rounded-3xl" src={treatment} alt="Album" />
          </figure>
          <div className="card-body justify-center">
            <div className="px-10">
              <h2 className="card-title text-5xl">
                Exceptional Dental Care, on Your Terms
              </h2>
              <p className="text-base py-10">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>

              <PrimaryBtn>Get started</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
