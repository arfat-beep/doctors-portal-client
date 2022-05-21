import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${user?.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Congress! you make ", user?.email, " an admin");
          console.log(data);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{user?.email}</td>
      <td>
        {!user?.role && (
          <button class="btn btn-xs" onClick={makeAdmin}>
            make admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">remove user</button>
      </td>
    </tr>
  );
};

export default UserRow;
