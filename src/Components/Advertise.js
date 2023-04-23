import React from "react";

function Advertise(props) {
  return (
    <div className="advertise">
      <img className="advertise-image" src={props.src} alt={props.alt}></img>
    </div>
  );
}

export default Advertise;
