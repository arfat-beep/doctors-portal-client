import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Services from "../Home/Services";
import Appointment from "./Appointment";
import BookingModal from "./BookingModal";
import Service from "./Service";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AvailableAppointment = ({ selected }) => {
  // const [services, setServices] = useState([]);
  const [appointment, setAppointment] = useState(null);
  const formattedDate = format(selected, "PP");
  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery("available", () =>
    fetch(
      `https://stormy-anchorage-91662.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  /*  useEffect(() => {
    fetch(`https://stormy-anchorage-91662.herokuapp.com/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]); */
  return (
    <div>
      <p className="text-secondary capitalize text-center text-xl">
        Available Appointments on {format(selected, "PP")}.
      </p>
      <div
        className="grid
      grid-cols-1 md:grid-cols-3 gap-5 px-12"
      >
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setAppointment={setAppointment}
          />
        ))}
      </div>
      {appointment && (
        <BookingModal
          selected={selected}
          appointment={appointment}
          setAppointment={setAppointment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
