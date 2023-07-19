import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  // const handleScrollOnTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <>
      <section className="page404">
        <div className="page404_bg">
          <h1>404-Not Found</h1>
        </div>

        <div className="contantbox_404">
          <h3>Click got 404 error</h3>
          <p>The section you are looking for not available!</p>

          <Link to="/">
            <button className="link404">Go to Home</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
