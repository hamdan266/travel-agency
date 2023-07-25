import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Destination from "./components/Destination";
import Offer from "./components/Offer";
import Tours from "./components/Tours";
import Testimonial from "./components/Testimonial";
import DownloadApp from "./components/DownloadApp";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <Home />
      <Services/>
      <Destination/>
      <Offer/>
      <Tours/>
      <Testimonial/>
      <DownloadApp/>
      <Footer/>
    </div>
  );
}
