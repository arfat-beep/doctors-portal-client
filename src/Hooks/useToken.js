import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {}, [user]);
  const email = user?.user?.email;
  const currentUser = { email };

  if (email) {
    fetch(`https://stormy-anchorage-91662.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "applicaiton/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        const accessToken = data?.token;
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
      });
  }

  return [token];
};

export default useToken;
