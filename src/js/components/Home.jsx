import React from "react";
import Navbar from "./Navbar.jsx";
import HeroRooster from "./Hero.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroRooster />
      <Footer />
    </>
  );
};

export default Home;
