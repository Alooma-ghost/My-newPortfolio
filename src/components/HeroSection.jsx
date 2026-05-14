const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero">
      <h1>Hi, I'm Idris 👋</h1>
      <p>Frontend Developer | React Specialist | Creative Coder</p>
      <button onClick={scrollToProjects}>✨ View My Work ✨</button>
    </section>
  );
};

export default HeroSection;