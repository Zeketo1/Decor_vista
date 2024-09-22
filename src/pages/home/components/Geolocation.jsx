const Geolocation = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "300px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.6140305396634!2d-79.876059784515!3d43.25951037913671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b820e1bce3b%3A0x90ff9bbfb20fbc8d!2s55%20Bay%20St%20N%2C%20Hamilton%2C%20ON%20L8R%203P7%2C%20Canada!5e0!3m2!1sen!2sng!4v1642740399689!5m2!1sen!2sng"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      {/* Overlay */}
      {/* <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // semi-transparent black background
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        zIndex: 1,
      }}>
      </div> */}
    </div>
  );
};

export default Geolocation;
