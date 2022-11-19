import React from "react";
import styled from "styled-components";
import "./Charts.scss";
import love from "../../../img/Stroke-1.png";
// import img1 from "../../../img/chartsimg1.png";

const Charts = ({ songName, artist, duration, image }) => {
  return (
    <div className="charts-container  ">
      <div>
        <div className="card flex justify-between">
          <div className="songInfo flex">
            <div className="songImg">
              <img
                style={{
                  backgroundImage: `url(${require(`../../../img/${image}`)})`,
                }}
              />
            </div>
            <div className="info">
              <h3>{songName}</h3>
              <h5>{artist}</h5>
              <h4>{duration}</h4>
            </div>
          </div>
          <div className="imgCont">
            <img src={love} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
const Img = styled.div`
  width: 25px;
  height: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50px;
  margin-top: 8px;
  border: 2px solid rgb(131, 58, 180);
  margin-left: 5px;
  cursor: pointer;
`;
