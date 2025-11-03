import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import { rosterData } from "../../data/rosterData.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container py-4 d-flex flex-wrap gap-4 justify-content-center">
        {rosterData.map((item, i) => (
          <Card
            key={i}
            image={item.image}
            cardTitle={item.cardTitle}
            cardDescription={item.cardDescription}
            button={item.button}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
