import React, { useState } from "react";
export default function FahrenheihtValue(props) {
  let [temperature, setTemerature] = useState(props.temperature);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemerature(Math.round((props.temperature * 9) / 5 + 32));
  }
  return (
    <div className="FahrenheitValue">
      It is {temperature}°C |
      <a href="#" onClick={showFahrenheit}>
        °F{" "}
      </a>
      in {props.name}
    </div>
  );
}
