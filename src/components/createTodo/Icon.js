import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const Icon = ({icon, iconClass, setIcon}) => {
  return (
    <div className={iconClass} onClick={() => setIcon(icon)}>
        <FontAwesomeIcon icon={icon} size="2x"/>
    </div>
  )
};

export default Icon;