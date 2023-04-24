import React from "react";

function Advertise(props) {
  return (
    <div className={props.position}>
      <img className={props.size} src={props.src} alt={props.alt}></img>
    </div>
  );
}

export default Advertise;
