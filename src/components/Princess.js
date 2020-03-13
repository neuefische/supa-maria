import React from "react";
import "./Princess.css";

function Princess(props) {
  const imgPath = props.imgsource;

  return (
    <div className="princess" {...props}>
      <img class="princessImage" src={imgPath} alt="princess" />
    </div>
  );
}

export default Princess;
