import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
