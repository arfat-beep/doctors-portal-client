import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { speciality, name, img, email } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <th>
        <div class="avatar">
          <div class="w-16 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </th>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          for="delete-conrirm-modal"
          class="btn btn-error uppercase"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
