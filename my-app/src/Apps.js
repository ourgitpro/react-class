import React from "react";
import Card from "./components/Card.js";
import data from "./data.json";
const ebloBhai = "Moiyenn";

function Apps() {
  return (
    <div>
      <h1 className="heading">{ebloBhai}</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Apps;
