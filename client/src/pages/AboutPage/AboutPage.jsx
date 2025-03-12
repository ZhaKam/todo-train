import React from "react";
import "./AboutPage.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HistorySection from "./sections/HistorySection";

export default function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <HistorySection />
      <Footer />
    </div>
  );
}