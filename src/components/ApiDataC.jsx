import React from "react";
import useExternalHook from "./useExternalHook";
import { Link, useParams } from "react-router-dom";

const ApiDataC = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const { data, loading } = useExternalHook(apiUrl);

  const { id } = useParams();
  //console.log(id);
  const n = id;

  if (loading) {
    return (
      <div>
        <h2>Loading data...</h2>
      </div>
    );
  }

  // const handleRedirect = () => {
  //   window.location.replace("https://www.instagram.com/meumarashraf/");
  // };

  return (
    <>
      <div className="api-main">
        <h1 className="api-title3">JSONplaceholder Api Posts Data</h1>
        {data &&
          data?.slice(n - 1, n).map((item) => {
            return (
              <div key={item.id}>
                <h3 className="api-title3">Title : {item.title}</h3>

                <p className="api-body2"> {item.body}</p>
              </div>
            );
          })}
      </div>
      <Link to="/jsonposts">
        <button className="link404">Go Back</button>
      </Link>
    </>
  );
};

export default ApiDataC;
