import React from "react";

const Icon = ({icon, setIcon}) => {
  return (
    <div className={icon} onClick={() => setIcon(icon)}>
        <i className="small material-icons">{icon}</i>
    </div>
  )
};

export default Icon;