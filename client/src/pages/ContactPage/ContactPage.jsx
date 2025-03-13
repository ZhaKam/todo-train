import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddressPage from "./sections/AddressPage";

export default function ContactPage() {
  return (
    <div className="contact-page">
    <Header />
    <AddressPage />
    <Footer />
    </div>
  );
}