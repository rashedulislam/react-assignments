import React from "react";
import "./ShowDetails.css";

function ShowDetails({ icon, title }) {
  return (
    <div className="suggestion-details-div">
      <img src={icon} className="icon-image" alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default ShowDetails;
