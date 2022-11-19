import React from "react";
import "./Card.scss";

const Card = ({ image, songTitle, artistName }) => {
  return (
    <div className="card">
      <div className="images flex">
        <img
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${require(`../../../img/${image}`)})`,
          }}
        />
      </div>
      <div className="songinfo">
        <h1>{songTitle}</h1>
        <p>{artistName}</p>
      </div>
    </div>
  );
};

export default Card;
