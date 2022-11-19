import React from "react";
import "./Collections.scss";
import Navbar from "../navbar/Navbar";
import Buttons from "./buttons/Buttons";
import Card from "./cards/Card";

const Collections = () => {
  return (
    <div>
      <Navbar inactiveColor="#FACD66" activeColor="gray" />
      <Buttons />
      <div className="collections">
        <div className="cardsContainer flex relative">
          <Card image="music3.png" songTitle="Limits" artistName="John watts" />
          <Card image="music5.png" songTitle="Limits" artistName="John watts" />
          <Card image="music1.png" songTitle="Limits" artistName="John watts" />
          <Card image="music9.png" songTitle="Limits" artistName="John watts" />
        </div>
      </div>
    </div>
  );
};

export default Collections;
