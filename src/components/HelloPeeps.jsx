import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";
import useOnlineStatus from "./useOnlineStatus";

const Hello = (props) => {
  const [newHeading, setNewHeading] = useState("");
  const [fontSize, setFontSize] = useState(25);

  useEffect(() => {
    setNewHeading(props.heading);
  }, [props.heading]);

  const StatusBar = () => {
    const isOnline = useOnlineStatus();
    return (
      <>
        <h3>Your browser connection status ↴</h3>
        <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
      </>
    );
  };

  return (
    <>
      <div>
        <Welcome />
        <h2>{newHeading}</h2>

        <button onClick={() => setFontSize((size) => size + 1)}>
          Click to increase fontSize
        </button>

        <p style={{ fontSize }}>I'm Umar Ashraf</p>
      </div>
      <StatusBar />
    </>
  );
};

export default Hello;
