import React, { useEffect, useState } from "react";
import "./CardAndChats.scss";
import splash from "../../img/bgback.svg";
import bgimage from "../../img/backimg.png";
import Charts from "./charts/Charts";

const LeftCAC = () => {
  return (
    <div>
      <div className="flex cac_container w-[686px] h-[373px] bg-[#609EAF] rounded-[40px] ">
        <div>
          <img src={bgimage} className="absolute ml-[50%]" />
          <img src={splash} className="splash ml-[25.8%] h-[370px] mt-1 " />
          <div>
            <h2>Curated playlist</h2>
            <h1>R & B Hits</h1>
            <p>
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </p>
          </div>
        </div>

        <div className="right-side">
          <h1>Top charts</h1>
          <Charts
            songName="Golden age of 80s"
            artist="Sean swadder"
            duration="2:34:45"
            image="chartsimg1.png"
          />
          <Charts
            songName="Reggae “n” blues"
            artist="Dj YK mule"
            duration="1:02:42"
            image="chartsimg2.png"
          />
          <Charts
            songName="Tomorrows tunes"
            artist="Obi Datti"
            duration="2:01:25"
            image="chartsimg3.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftCAC;
