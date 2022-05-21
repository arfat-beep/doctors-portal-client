import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ appointment }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState("");
  const [transactionId, settransactionId] = useState("");

  const { _id, price, patientName, patinetEmail, phone } = appointment;
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error?.message || "");
    } else {
      setCardError("");
    }
    setProcessing(true);
    // confirm card payment /
    const { paymentIntent, error: indentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patinetEmail,
          },
        },
      });
    if (indentError) {
      setCardError(indentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setSuccess("Your payment is completed");
      settransactionId(paymentIntent.id);
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`http://localhost:5000/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProcessing(false);
        });
    }
  };
  success && navigate("/dashboard");
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-xm"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>

      {cardError && <p className="text-red-500">{cardError}</p>}
      {cardError && <p className="text-green-500">{success}</p>}
    </>
  );
};

export default CheckOutForm;
