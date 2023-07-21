import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="ul-head">
        <Link to="/urlshortner">
          <li>UrlShortner</li>
        </Link>
        <Link to="/weather">
          <li>WeatherAPI</li>
        </Link>
        <Link to="/jsonposts">
          <li>JSONphAPI</li>
        </Link>
        <Link to="/navigator">
          <li>GeoNavigator</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
