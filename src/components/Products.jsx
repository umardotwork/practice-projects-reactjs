import React from "react";
import Marquee from "react-fast-marquee";
import { Link, useLocation } from "react-router-dom";
//import Welcome from "./Welcome";
import Logo from "../logo.svg";

const Products = ({ item }) => {
  //const location = useLocation();
  //console.log(location);
  return (
    <>
      <div className="App">
        <h2>Products page</h2>
      </div>
      <Link to="/products/school?name=bags">
        <button>Click Me</button>
      </Link>
      <div className="mar-text">
        <Marquee>
          <img
            src={Logo}
            height="100px"
            width="100px"
            alt="marquee scrolling img"
          />
          <img
            src={Logo}
            height="100px"
            width="100px"
            alt="marquee scrolling img"
          />
          <img
            src={Logo}
            height="100px"
            width="100px"
            alt="marquee scrolling img"
          />
          <img
            src={Logo}
            height="100px"
            width="100px"
            alt="marquee scrolling img"
          />
          <img
            src={Logo}
            height="100px"
            width="100px"
            alt="marquee scrolling img"
          />
        </Marquee>

        <div className="cards">
          <div className="card">
            <img src={item.image} alt={item.name} className="image" />
            <div className="content">
              <h2 className="title">{item.name}</h2>
              <p className="description">{item.description}</p>
              <span className="price">Price: ${item.price}</span>
            </div>
            <Link to="/products/launchingsoon">
              <button className="product-btn">Learn More</button>
            </Link>
          </div>
          <div className="card">
            <img src={item.image1} alt={item.name} className="image" />
            <div className="content">
              <h2 className="title">{item.name}</h2>
              <p className="description">{item.description}</p>
              <span className="price">Price: ${item.price}</span>
            </div>
            <Link to="/products/launchingsoon">
              <button className="product-btn">Learn More</button>
            </Link>
          </div>
          <div className="card">
            <img src={item.image2} alt={item.name} className="image" />
            <div className="content">
              <h2 className="title">{item.name}</h2>
              <p className="description">{item.description}</p>
              <span className="price">Price: ${item.price}</span>
            </div>
            <Link to="/products/launchingsoon">
              <button className="product-btn">Learn More</button>
            </Link>
          </div>
        </div>
        <Marquee>
          <img
            src={Logo}
            height="100px"
            width="100px"
            alt="marquee scrolling img"
          />
          <img
            src={Logo}
            height="100px"
            width="100px"
            alt="marquee scrolling img"
          />
          <img
            src={Logo}
            height="100px"
            width="100px"
            alt="marquee scrolling img"
          />
          <img
            src={Logo}
            height="100px"
            width="100px"
            alt="marquee scrolling img"
          />
          <img
            src={Logo}
            height="100px"
            width="100px"
            alt="marquee scrolling img"
          />
        </Marquee>
      </div>
    </>
  );
};

export default Products;
