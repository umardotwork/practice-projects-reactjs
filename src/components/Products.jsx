import React from "react";
import { Link, useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="App">
        <h2>Products page</h2>
      </div>

      <Link to="/products/school?name=bags">
        <button>Click Me</button>
      </Link>
    </>
  );
};

export default Products;
