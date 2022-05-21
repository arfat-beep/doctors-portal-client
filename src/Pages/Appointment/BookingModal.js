import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
const BookingModal = ({ appointment, selected, setAppointment, refetch }) => {
  const [user] = useAuthState(auth);
  const { name, slots } = appointment;
  console.log();
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const date = e.target.date.value;
    const patientName = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;

    const booking = {
      treatmentId: appointment._id,
      treatment: name,

      slot,
      date,
      patientName,
      phone,
      patinetEmail: email,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    };
    fetch("http://localhost:5000/booking", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Appointment is set, ${date} at ${slot}`);
        } else {
          toast.error(
            `Already have an appointment on , ${data.exist?.date} at ${data?.exist?.slot}`
          );
        }
        refetch();
        setAppointment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl text-secondary">Booking for : {name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 justify-items-center gap-5 mt-2"
          >
            <input
              type="text"
              value={`${format(selected, "PP")}`}
              name="date"
              className="input w-full max-w-xs input-bordered"
              disabled
            />
            <select
              name="slot"
              className="select w-full max-w-xs input-bordered"
              required
            >
              {slots?.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={user.displayName}
              disabled
              required
              className="input w-full max-w-xs input-bordered"
            />
            <input
              type="eamil"
              placeholder="Email Address"
              name="email"
              value={user.email}
              disabled
              required
              className="input w-full max-w-xs input-bordered"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              required
              className="input w-full max-w-xs input-bordered"
            />
            <input type="submit" value={"submit"} className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
