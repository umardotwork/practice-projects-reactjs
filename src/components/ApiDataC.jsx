import React from "react";
import useExternalHook from "./useExternalHook";
import { Link, useParams, useRoutes } from "react-router-dom";

const ApiDataC = () => {
  const { data } = useExternalHook(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const { id } = useParams();
  //console.log(id);
  const n = id;

  // const handleRedirect = () => {
  //   window.location.replace("https://www.instagram.com/meumarashraf/");
  // };

  return (
    <>
      <div className="api-main">
        <h1 className="api-title1">JSONplaceholder Api Posts Data</h1>
        {data &&
          data?.slice(n - 1, n).map((item) => {
            return (
              <div key={item.id}>
                <h3 className="api-title2"> {item.title}</h3>

                <p className="api-body"> {item.body}</p>
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
