import { useState } from "react";
import Lamp from "./components/Lamp";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";
import ContactSection from "./components/ContactSection";

function App() {
  const [lightOn, setLightOn] = useState(false);

  return (
    <div className={`app ${lightOn ? "light-on" : ""}`}>
      {!lightOn && <Lamp toggleLight={() => setLightOn(true)} />}

      {lightOn && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <ContactSection />
        </>
      )}
    </div>
  );
}

export default App;