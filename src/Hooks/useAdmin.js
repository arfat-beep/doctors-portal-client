import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState("");
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/admin/${user?.email}`, {
        method: "GET",
        headers: {
          "content-type": "applicaiton/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
