import React from "react";
import "./Suggestion.css";

function Suggestion({ icon, title, sugesstionClickHandle, index }) {
  return (
    <div
      className="suggestion-single"
      onClick={() => sugesstionClickHandle(index)}
    >
      <img src={icon} className="icon-image" alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Suggestion;
