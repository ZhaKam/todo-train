import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HistorySection from "./sections/HistorySection";
import PhotoGallery from "./sections/PhotoGallery";
import LicensesAndCertificates from "./sections/LicensesAndCertificates";

export default function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <HistorySection />
      <LicensesAndCertificates />
      <PhotoGallery />
      <Footer />
    </div>
  );
}