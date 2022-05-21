import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user, loading] = useAuthState(auth);
  const { email } = user;
  const navigate = useNavigate();
  /* const { isLoading, error, data } = useQuery("booking", () =>
    fetch(`https://stormy-anchorage-91662.herokuapp.com/booking?patient=${email}`).then((res) =>
      res.json()
    )
  ); */
  useEffect(() => {
    if (user) {
      fetch(
        `https://stormy-anchorage-91662.herokuapp.com/booking?patient=${email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            return navigate("/");
          }
          return res.json();
        })
        .then((data) => setAppointments(data));
    }
  }, [user, navigate, email]);

  return (
    <div>
      <h1 className="text-xl text-purple-700">
        My appointments : {appointments?.length}
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr className="uppercase">
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>{a.patientName}</th>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      {" "}
                      <p className="text-success">Paid</p>
                      <p>Transaction Id : {a.transactionId}</p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
