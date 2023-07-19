import React from "react";
import useExternalHook from "./useExternalHook";
import { useParams } from "react-router-dom";

const ApiDataC = () => {
  const { data } = useExternalHook(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const { id } = useParams();
  const n = id;

  return (
    <>
      <div className="api-main">
        <h1 className="api-title1">JSONplaceholder Api Comments Data</h1>
        {data &&
          data?.slice(n - 1, n).map((item) => {
            return (
              <div key={item.id}>
                <h3 className="api-title"> {item.title}</h3>

                <p> {item.body}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ApiDataC;
