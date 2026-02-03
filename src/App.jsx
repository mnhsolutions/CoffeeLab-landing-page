import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import Coffees from "./components/Coffees";
import Menu from "./components/Menu";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <Layout>
      <Hero />
      <Coffees />
      <Menu />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
