import React from "react";

export default function City(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    let temperature = Math.round((props.temperature * 9) / 5 + 32);
    alert(`${temperature} °F in ${props.name}`);
  }
  return (
    <div className="City">
      It is {props.temperature}°C |
      <a href="#" onClick={showFahrenheit}>
        °F{" "}
      </a>
      in {props.name}
    </div>
  );
}
