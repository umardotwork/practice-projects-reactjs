import "./App.css";
import { Routes, Route } from "react-router-dom";
import Apidata from "./components/Apidata";
import Header from "./components/Header";
import Hello from "./components/HelloPeeps";
import NotFound from "./components/NotFound";
import Weather from "./components/Weather";
import { useEffect, useState } from "react";
//import Welcome from "./components/Welcome";
import Navigator from "./components/Navigator";
import ApiDataC from "./components/ApiDataC";
import Products from "./components/Products";
import LaunchingSoon from "./components/LaunchingSoon";
import UrlShortner from "./components/UrlShortner";

function App() {
  const [heading, setHeading] = useState("Hello World");

  useEffect(() => {
    setTimeout(() => {
      setHeading("Hello World, This is updated Text");
    }, 2000);
  }, []);

  const exampleItem = {
    name: "Product",
    description: "This is an example item description.",
    price: 999.99,
    image:
      "https://colors.dopely.top/inside-colors/wp-content/uploads/2021/08/black-diamond.jpg",
    image1:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c73e6f5-99f7-493b-b9fd-21900953f486/da6t8xm-ba24f57d-7f75-43cc-ba2a-43a0c28329dd.jpg/v1/fill/w_1011,h_790,q_70,strp/dark_souls_3_blade_of_the_darkmoon_silver_pendant_by_kristoliiva_da6t8xm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNWM3M2U2ZjUtOTlmNy00OTNiLWI5ZmQtMjE5MDA5NTNmNDg2XC9kYTZ0OHhtLWJhMjRmNTdkLTdmNzUtNDNjYy1iYTJhLTQzYTBjMjgzMjlkZC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.viXWdWWEm1qIcM2pBRah7cGGw9UK7gxcXq6zuX532RU",
    image2:
      "https://images.squarespace-cdn.com/content/v1/60dde4885bf01408d0b31f35/1634672941141-FJYM75XS34BN25GRI6IH/Semplie-12.jpg",
  };

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hello heading={heading} />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/jsonposts" element={<Apidata />} />
          <Route path="/jsonposts/posts/:id" element={<ApiDataC />} />
          <Route path="/navigator" element={<Navigator />} />
          <Route path="/products" element={<Products item={exampleItem} />} />
          <Route path="/urlshortner" element={<UrlShortner />} />
          <Route path="/products/launchingsoon" element={<LaunchingSoon />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
