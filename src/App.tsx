import React from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Qualifications from "./components/Qualifications.tsx";
import Portfolio from "./components/Portfolio.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d0c15] text-white font-sans antialiased selection:bg-purple-600 selection:text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-16">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="qualifications">
          <Qualifications />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
