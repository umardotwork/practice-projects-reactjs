import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="ul-head">
        <Link to="/hello">
          <li>HELLO WORLD</li>
        </Link>
        <Link to="/weather">
          <li>WEATHER API</li>
        </Link>
        <Link to="/jsoncomments">
          <li>JSONph API</li>
        </Link>
        <Link to="/navigator">
          <li>GEO NAVIGATOR</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
