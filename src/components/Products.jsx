import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
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

const styles = {
  card: {
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  },
  image: {
    width: "100%",
    borderRadius: "4px",
    marginBottom: "8px",
  },
  content: {
    textAlign: "left",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  description: {
    fontSize: "16px",
    marginBottom: "8px",
  },
  price: {
    fontSize: "18px",
    color: "#007bff",
    fontWeight: "bold",
  },
};

export default Products;
