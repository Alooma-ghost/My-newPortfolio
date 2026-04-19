const About = () => {
  return (
    <section id="about" className="section">
      <h2>📖 About Me</h2>
      <div className="about-text">
        <p>
          I'm Idris Olabode — a passionate frontend developer with over 3 years of experience crafting 
          modern, responsive, and user-friendly web applications. I specialize in React.js and modern 
          JavaScript (ES6+), turning design ideas into interactive realities.
        </p>
        <p>
          I believe that great interfaces blend performance with delightful micro-interactions. 
          My focus is on writing clean, scalable code and building seamless experiences. 
          When I'm not coding, I explore UI animations, contribute to open-source, and mentor new developers.
        </p>
        <p>
          🎯 Currently exploring: Three.js, Framer Motion, and advanced React patterns.
          I'm always excited to collaborate on innovative projects that push the boundaries of web development.
        </p>
        <div className="skills">
          <span className="skill-tag">⚛️ React</span>
          <span className="skill-tag">🟨 JavaScript</span>
          <span className="skill-tag">🎨 Tailwind/CSS</span>
          <span className="skill-tag">💡 UI/UX</span>
          <span className="skill-tag">📱 Responsive Design</span>
          <span className="skill-tag">🔧 Git & GitHub</span>
          <span className="skill-tag">🚀 Node.js</span>
          <span className="skill-tag">📦 Redux</span>
        </div>
      </div>
    </section>
  );
};

export default About;