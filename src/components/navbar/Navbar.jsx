import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import {
  UilMusic,
  UilEstate,
  UilUser,
  UilSignout,
} from "@iconscout/react-unicons";
import vec1 from "../../img/Vector1.png";
import vec2 from "../../img/Vector2.png";
import radio from "../../img/radio.png";
import videos from "../../img/videos.png";
const Navbar = ({ activeColor, inactiveColor }) => {
  return (
    <div>
      <div className="logo">
        <img src={vec1} />
        <img src={vec2} className=" ml-[10px] -mt-5" />
      </div>
      <div className="icon-bg1">
        <Link to="/">
          <UilEstate style={{ color: `${activeColor}` }} />
        </Link>

        <Link to="/collections">
          <UilMusic style={{ color: `${inactiveColor}` }} />
        </Link>

        <img src={radio} alt="icons" />

        <img src={videos} alt="icons" />
      </div>
      <div className="icon-bg2 ">
        <UilUser style={{ color: "gray" }} />
        <UilSignout style={{ color: "gray", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Navbar;
