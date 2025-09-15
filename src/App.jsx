import React from "react";
import Header from "./component/Header";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import FooterComponent from "./component/FooterComponent";
import Support from "./pages/Support";
import Service from "./pages/Service";
import DressWatch from "./pages/DressWatch";
import Vintage from "./pages/Vintage";
import Luxury from "./pages/Luxury";
import SmartWatch from "./pages/SmartWatch";

import Sitemap from "./pages/Sitemap";
// Main App Component
function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/support" element={<Support />} />
          <Route path="/service" element={<Service />} />
          <Route path="/dress-watches" element={<DressWatch />} />
          <Route path="/vintage" element={<Vintage />} />
          <Route path="/luxury" element={<Luxury />}/>
          <Route path="/smart-watch" element={<SmartWatch />} />
          <Route path="site-map" element={<Sitemap/>} />
        </Routes>
         <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
