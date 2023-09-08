import React from "react";

import "../styles/styles.css";
import arrow from "../assets/arrow.png";

function DisplayBoxHeader(props) {
  const { displayBoxHeaderFields, displayStyle, isBodyCollapsed, onIsBodyCollapsedChange } = props;
  
  return (
    <header className={`displayBoxHeader`}>
      <img 
        src={arrow} 
        className={`collapseButton ${isBodyCollapsed ? "collapsedState" : ""}`} 
        onClick={onIsBodyCollapsedChange}
      />
      <div className={`displayBoxHeaderFieldsArea ${displayStyle}`}>
        {displayBoxHeaderFields.map((headerField) => {
          return (
              headerField
          );
        })}
      </div>
    </header>
  );
}

export default DisplayBoxHeader;
