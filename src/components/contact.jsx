
const Contact = () => {
  const emailAddress = "olabodeidrisoluwasegun@email.com";
  
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <section id="contact" className="section">
      <h2>📬 Let's Connect</h2>
      <div className="contact-card">
        <p style={{ marginBottom: '18px' }}>
          Got a project in mind? or just want to chat about tech?
        </p>
        <p>📧 Email:  
          <a href="olabodeidrisoluwasegun@gmail.com" onClick={handleEmailClick} style={{ marginLeft: '6px' }}>
            {emailAddress}
          </a>
        </p>
       
        <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <a href="https://github.com/Alooma-ghost" style={{ fontSize: '1.5rem' }}>🐙 GitHub</a>
          <a href="https://x.com/alomaghost?s=21passed" style={{ fontSize: '1.5rem' }}>🐦 Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;