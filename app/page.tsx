import React from "react";
import Navbar from "./Components/NavBar";
import Vidharbha from "./Components/Vidharbha";
import AboutTheJourney from "./Components/AboutTheJourney";
import Fact from "./Components/Fact";
import CareerHighlights from "./Components/CareerHighlights";
import Footer from "./Components/Footer";

export default function Home () {
  return (
    <main>
      <Navbar />
      <div className="container">
        <AboutTheJourney />
        <Vidharbha />
        <Fact />
        <CareerHighlights />
        <Footer/>
      </div>
    </main>
  );
}