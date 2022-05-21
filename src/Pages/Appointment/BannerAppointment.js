import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
const BannerAppointment = ({ selected, setSelected }) => {
  const css = `
.my-selected:not([disabled]) { 
  font-weight: bold; 
  border: 2px solid #0FCFEC !important;
  color: #19D3AE !important;
  transition: all .3s ease;
}
.my-selected:hover:not([disabled]) { 
  border-color: #19D3AE !important;
  font-size: 140%; 
  color: #0FCFEC !important;
}
.my-today { 
  font-weight: bold;
  font-size: 140%; 
  color: #3d4451;
}
`;

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <style>{css}</style>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              modifiersClassNames={{
                selected: "my-selected",
                today: "my-today",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAppointment;
