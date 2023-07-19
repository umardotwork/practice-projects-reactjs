import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";

const Hello = (props) => {
  const [newHeading, setNewHeading] = useState("");
  const [fontSize, setFontSize] = useState(25);

  useEffect(() => {
    setNewHeading(props.heading);
  }, [props.heading]);

  return (
    <div>
      <Welcome />
      <h2>{newHeading}</h2>

      <button onClick={() => setFontSize((size) => size + 1)}>
        Click to increase fontSize
      </button>

      <p style={{ fontSize }}>I'm Umar Ashraf</p>
    </div>
  );
};

export default Hello;
