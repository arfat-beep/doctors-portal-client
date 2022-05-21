import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51L1qJUIeyenGQUlo9sCfEIELDfYLH4FWnFqBRRVOAk1Z3Ag0U0usxfq6zl1Lm3hvcwoKtUdUE1gPGraHna2e8Evt00zk4EDgLG"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success xl">Hello, {appointment.patientName}</p>
          <h1 class="text-5xl font-bold">Pay for {appointment.treatment}</h1>
          <p class="py-6">We will see {appointment.date}</p>
          <p>Please pay : ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckOutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
