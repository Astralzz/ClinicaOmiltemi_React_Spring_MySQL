import React, { useState } from "react";
import Calendar from "react-calendar";

//Valor
let FechaEs: Date;

//Calendario
function PageCalendario() {
  //Valor de calendario
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar minDetail="year" onChange={onChange} value={value} />
    </div>
  );
}

export default PageCalendario;
