import React from "react";
import Header from "../../components/Header";
import Slider from "./sections/Slider";
import PromoInfo from "./sections/PromoInfo";
import Reviews from "./sections/Reviews";
import Footer from "../../components/Footer";

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