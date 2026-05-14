import { useState } from "react";
import "./App.css";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectsSection";
import NavbarSection from "./components/NavbarSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import LambSection from "./components/LambSection";

function App() {
  const [lightOn, setLightOn] = useState(false);

  return (
    <div className={`app ${lightOn ? "light-on" : ""}`}>
      {!lightOn && <LambSection toggleLight={() => setLightOn(true)} />}

      {lightOn && (
        <>
          <NavbarSection />
          <HeroSection />
          <AboutSection />
          <ContactSection />
          <ProjectsSection />
        </>
      )}
    </div>
  );
}

export default App;