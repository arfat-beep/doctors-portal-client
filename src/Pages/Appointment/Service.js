import React from "react";
import BookingModal from "./BookingModal";

const Service = ({ service, setAppointment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card bg-base-100 text-center shadow-xl">
      <div className="card-body">
        <h2 className="text-secondary text-center text-2xl">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>
          <small>Price : ${price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setAppointment(service)}
            disabled={!slots.length}
            className="btn btn-secondary text-white uppercase"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
