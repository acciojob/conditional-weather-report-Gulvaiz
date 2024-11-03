import React from "react";

const WeatherDisplay = ({ data }) => {
  const { temperature, conditions } = data;
  const color = temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p style={{ color }}>
        <span>Temperature: {temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
