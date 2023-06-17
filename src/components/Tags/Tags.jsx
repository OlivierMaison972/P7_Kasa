import React from "react";
import "../Tags/Tags.css"

function Tag({ nom }) {
  return (
    <div className="tag-container">
      <span className="tag-container__button">{nom}</span>
    </div>
  );
}

export default Tag;
