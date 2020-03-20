import React from "react";
import "./Princess.css";

function Princess({ imgSource, ...other }) {
  return (
    <div {...other}>
      <img class="princessImage" src={imgSource} alt="princess" />
    </div>
  );
}

export default Princess;
