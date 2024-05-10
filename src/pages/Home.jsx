import React from "react";
import Header from "./Header/Header";
import "./home.css";
import AboutUs from "./About Us/AboutUs";
import CardCarousel from "./Cards/CardCarousel";
import logo1 from "../../src/images/rec-1.png";
import logo2 from "../../src/images/rec-2.png";
import logo3 from "../../src/images/rec-3.png";
import Specialities from "./Specialites/Specialities";
function Home() {
  let content1 = [logo1, logo2, logo3, logo1, logo3, logo2];
  return (
    <div>
      <div className="sec-1">
        <Header />
        <AboutUs />
        <CardCarousel section={1} content={content1} />
        <Specialities  />
        <CardCarousel />
      </div>
      <div className="sec-2">1</div>
    </div>
  );
}

export default Home;
