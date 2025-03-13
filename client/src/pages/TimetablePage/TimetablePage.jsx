import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SchedulePage from "./sections/SchedulePage";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Header />
      <SchedulePage />
      <Footer />
    </div>
  );
}