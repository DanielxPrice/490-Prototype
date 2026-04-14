import React from "react";

function PracticeModeCard({ title, description, onOpen }) {
  return (
    <div className="modeCard">
      <div className="modeCardTop">
        <span className="modeTag">Practice Mode</span>
      </div>

      <h2 className="modeCardTitle">{title}</h2>
      <p className="modeCardDescription">{description}</p>

      <div className="modeCardBottom">
        <button className="secondaryButton modeButton" onClick={onOpen}>
          Open Mode
        </button>
      </div>
    </div>
  );
}

export default PracticeModeCard;