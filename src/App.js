import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact.js";

import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Skills from "./components/experience/Skills.js";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />

      <Portfolio />

      <Contact />
      <Footer />
    </>
  );
}

export default App;
