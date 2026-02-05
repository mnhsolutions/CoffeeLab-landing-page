import { usePageTitle } from "../hooks/usePageTitle";
import Hero from "../components/Hero";
import Coffees from "../components/Coffees";
import Menu from "../components/Menu";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  usePageTitle("CoffeeLab - Inicio")

  return (
    <>
      <Hero />
      <Coffees />
      <Menu />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
