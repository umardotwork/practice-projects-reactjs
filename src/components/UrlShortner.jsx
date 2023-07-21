import axios from "axios";
import React, { useState } from "react";
//import "./Link.css";

const UrlShortner = () => {
  const [userurl, setUserurl] = useState();
  const [surl, setSurl] = useState();
  const [copytxt, setCopytxt] = useState();

  const handleClick = () => {
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${userurl}`)
      .then((Response) => {
        console.log(Response.data.result.full_short_link3);
        setSurl(Response.data.result.full_short_link3);
        setCopytxt("Copy");
      })
      .catch((Error) => {
        console.log(Error.message);
      });
  };
  const copy = () => {
    navigator.clipboard.writeText(surl);
    setCopytxt("Copied!");
  };
  return (
    <>
      <div className="linksrt">
        <h1>URL Shortner</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {Error.message}
              <input
                type="url"
                className="url"
                onChange={(e) => setUserurl(e.target.value)}
                name="url"
                id="url"
                placeholder="Add link here to shorten it..."
              />
            </div>
            <div className="col-md-3">
              <button onClick={handleClick} className="shortn-btn">
                Shorten it
              </button>
            </div>
          </div>
          {surl && (
            <div className="row results">
              <div className="col-md-12">
                <div className="s-url">
                  <a href={surl ? surl : ""}>{surl ? surl : "Loading..."}</a>
                </div>
                <button className="shortn-btn" onClick={copy}>
                  {copytxt ? copytxt : ""}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UrlShortner;
