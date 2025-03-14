import React from "react";
import Header from "../../components/Header";
import PricePage from "./sections/PricePage";
import Footer from "../../components/Footer";
import "./ServicesPage.scss";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Header />
      <PricePage />
      <Footer />
    </div>
  );
}