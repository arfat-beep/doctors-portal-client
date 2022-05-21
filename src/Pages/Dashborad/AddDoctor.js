import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { isLoading, data: services } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  /**
   * 3 ways to store images
   * 1.  third party storage //Free open public storage is ok for practice project
   * 2.  Your own storage in your own service (file system)
   * 3.  Database : mongoDB
   *
   * YUP : to validate file // Search :  YUP file validation for react hook form
   *
   */
  const imageStorageKey = `6c1b66e62d0a5eaf448d6da5d062713d`;
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result?.data?.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: img,
          };
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add");
              }
            });
          //   send it to your database
        }
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-4/12">
        <h2 className="text-3xl text-center">Add new doctor</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Your name"
              className="input input-bordered w-full"
              {...register("name", {
                required: {
                  value: true,
                  message: "Please provide your name",
                },
              })}
            />

            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please provide your email",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
            />

            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Speciality</span>
            </label>
            <select
              class="select w-full input-bordered "
              {...register("speciality", {
                required: {
                  value: true,
                  message: "Please provide your speciality",
                },
              })}
              placeholder="Your speciality"
            >
              {services.map((service) => (
                <option key={service._id}>{service.name}</option>
              ))}
            </select>

            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full"
              {...register("image", {
                required: {
                  value: true,
                  message: "Please provide your Photo",
                },
              })}
            />

            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <input
              className="btn btn-primary w-full text-white"
              value={"Sign Up"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
