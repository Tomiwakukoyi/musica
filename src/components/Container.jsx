import React from "react";
import CardAndChats from "./CardAndCharts/CardAndChats";
import NewReleases from "./newreleases/NewReleases";
import Navbar from "../components/navbar/Navbar";
const Container = () => {
  return (
    <div>
      <Navbar activeColor="#FACD66" inactiveColor="gray" />
      <CardAndChats />
      <NewReleases />
    </div>
  );
};

export default Container;
