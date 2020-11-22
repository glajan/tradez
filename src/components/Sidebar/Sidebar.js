import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./index.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <MenuItem label="Home" linkTo="/" />
      <MenuItem label="Charts" linkTo="charts" />
      <MenuItem label="Settings" linkTo="settings" />
    </div>
  );
};

export default Sidebar;
