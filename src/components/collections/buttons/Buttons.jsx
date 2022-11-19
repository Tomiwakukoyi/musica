import React from "react";
import "./Buttons.scss";

const Buttons = () => {
  return (
    <div>
      <div className="buttons">
        <button
          style={{
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            height: 37,
            width: 120,
            left: 130,
            borderRadius: 27,
            padding: 10,
            background: "#facd66",
            borderRadius: 27,
            color: "#1d2123",
          }}
        >
          My Collection
        </button>
        <button
          style={{
            cursor: "pointer",
            position: "relative",
            height: 37,
            width: 120,
            marginLeft: 150,

            borderRadius: 27,
            padding: 10,
            border: "1px solid gray",
            color: "gray",
          }}
        >
          Likes
        </button>
      </div>
    </div>
  );
};

export default Buttons;
