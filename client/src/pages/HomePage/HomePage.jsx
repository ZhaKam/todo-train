import React from "react";
import Header from "./sections/Header";
import Slider from "./sections/Slider";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Slider />
    </div>
  );
}