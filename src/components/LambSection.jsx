const LambSection = ({ toggleLight }) => {
  return (
    <div className="lamp-container" onClick={toggleLight} style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer'
    }}>
      <div style={{
        width: '130px',
        height: '70px',
        background: '#f5f2e0',
        borderRadius: '70px 70px 0 0',
        boxShadow: '0 -4px 12px rgba(255,245,180,0.5)'
      }}></div>
      <div style={{
        width: '12px',
        height: '90px',
        background: '#c9c3a8'
      }}></div>
      <div style={{
        width: '3px',
        height: '50px',
        background: '#aaa'
      }}></div>
      <p style={{
        marginTop: '20px',
        fontSize: '0.9rem',
        background: 'rgba(0,0,0,0.5)',
        padding: '6px 16px',
        borderRadius: '40px',
        backdropFilter: 'blur(4px)'
      }}>💡 Click The Lamp to Turn On 💡</p>
    </div>
  );
};

export default LambSection;