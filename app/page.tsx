import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Services from "./components/sections/services/Services";
import Portfolio from "./components/sections/portfolio/Portfolio";
import Contact from "./components/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
