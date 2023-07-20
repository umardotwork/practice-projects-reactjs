import "./App.css";
import { Routes, Route } from "react-router-dom";
import Apidata from "./components/Apidata";
import Header from "./components/Header";
import Hello from "./components/HelloPeeps";
import NotFound from "./components/NotFound";
import Weather from "./components/Weather";
import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Navigator from "./components/Navigator";
import ApiDataC from "./components/ApiDataC";
import Products from "./components/Products";

function App() {
  const [heading, setHeading] = useState("Hello World");

  useEffect(() => {
    setTimeout(() => {
      setHeading("Hello World, This is updated Text");
    }, 2000);
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hello heading={heading} />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/jsonposts" element={<Apidata />} />
          <Route path="/jsonposts/post/:id" element={<ApiDataC />} />
          <Route path="/navigator" element={<Navigator />} />
          <Route path="/products" element={<Products />} />
          <Route path="/hello" element={<Welcome />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
