import React from "react";
import "./NewReleases.scss";
const Releases = ({ image, songTitle }) => {
  return (
    <div className="releasesContainer">
      <div className="song">
        <img
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: 153,
            height: 153,
            backgroundImage: `url(${require(`../../img/${image}`)})`,
          }}
        />
        <h3>{songTitle}</h3>
      </div>
    </div>
  );
};

export default Releases;
