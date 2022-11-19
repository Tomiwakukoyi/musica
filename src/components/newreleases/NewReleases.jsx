import React from "react";
import "./NewReleases.scss";
import Releases from "./Releases";

const NewReleases = () => {
  const songtitles = [
    "Life in a bubble",
    "Mountain",
    "Limits",
    "Everythings black",
    "Cancelled",
    "Nomad",
    "Blind",
  ];
  return (
    <div>
      <h1 className="ml-[11%]">New releases.</h1>
      <div className="newReleasesContainer">
        <div className="releases">
          <Releases image="music1.png" songTitle={songtitles[0]} />
          <Releases image="music2.png" songTitle={songtitles[1]} />
          <Releases image="music3.png" songTitle={songtitles[2]} />
          <Releases image="music4.png" songTitle={songtitles[3]} />
          <Releases image="music5.png" songTitle={songtitles[4]} />
          <Releases image="music6.png" songTitle={songtitles[5]} />
          <Releases image="music7.png" songTitle={songtitles[6]} />
          <Releases image="music3.png" songTitle={songtitles[2]} />
          <Releases image="music1.png" songTitle={songtitles[0]} />
          <Releases image="music2.png" songTitle={songtitles[1]} />
          <Releases image="music3.png" songTitle={songtitles[2]} />
          <Releases image="music4.png" songTitle={songtitles[3]} />
        </div>
      </div>
    </div>
  );
};

export default NewReleases;
