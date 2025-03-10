import React from "react";
import Header from "./sections/Header";
import Slider from "./sections/Slider";
import PromoInfo from "./sections/PromoInfo";
import Reviews from "./sections/Reviews";
import Footer from "../../components/Footer";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Slider />
      <PromoInfo />
      <Reviews />
      <Footer />
    </div>
  );
}