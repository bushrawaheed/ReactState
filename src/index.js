import React from "react";
import ReactDOM from "react-dom";
import City from "./City";
import FahrenheihtValue from "./FahrenheihtValue";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>React State</h1>

        <h3>Challenge 1</h3>
        <p>
          Alert temperature in "Fahrenheiht" when clicking on Fahrenheiht
          <br />
          <small>Formula: temperature * (9 / 5) + 32)</small>
        </p>

        <City name="Lisbon" temperature={12} />
        <City name="Berlin" temperature={23} />
        <City name="Dallas" temperature={34} />
        <City name="New York" temperature={-2} />
        <City name="Milan" temperature={10} />
        <hr />

        <h3>Challenge 2</h3>
        <p>
          Create a state called temperature with the celsius temperature by
          default. Change the temperature state when clicking on °F to the
          Fahrenheiht value.
        </p>
        <FahrenheihtValue name="Lisbon" temperature={12} />
        <FahrenheihtValue name="Berlin" temperature={23} />
        <FahrenheihtValue name="Dallas" temperature={34} />
        <FahrenheihtValue name="New York" temperature={-2} />
        <FahrenheihtValue name="Milan" temperature={10} />
        <hr />

        <h3>Challenge 3</h3>
        <p>
          Make the user interface work. When I click on °F, show the temperature
          in imperial and when clicking °C, show the temperature in celsius.
        </p>

        <City name="Lisbon" temperature={12} />
        <City name="Berlin" temperature={23} />
        <City name="Dallas" temperature={34} />
        <City name="New York" temperature={-2} />
        <City name="Milan" temperature={10} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
