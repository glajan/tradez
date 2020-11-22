import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const MenuItem = (p) => {
  return (
    <div className="MenuItem">
      <Link to={p.linkTo}>{p.label}</Link>
    </div>
  );
};

export default MenuItem;
