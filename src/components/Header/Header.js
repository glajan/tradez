import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">Tradez</Link>
    </div>
  );
};

export default Header;
