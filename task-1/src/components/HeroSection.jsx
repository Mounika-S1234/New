import React from "react";
import "./HeroSection.css";
import ManukaJar from "../assets/manuka-jar.png"; // make sure this file exists

const HeroSection = () => (
  <section className="hero">
    <img src={ManukaJar} alt="Manuka Honey Jar" className="image" />
    <div className="right">
      <h1>Manuka Honey</h1>
      <p>UMF<sup>™</sup>24+</p>
      <p>MGO 1122+</p>
      <button>What is UMF and MGO?</button>
    </div>
  </section>
);

export default HeroSection;
