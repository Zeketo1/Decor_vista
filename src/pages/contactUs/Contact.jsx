import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Navbar from "../home/components/Navbar";
import Geolocation from "../home/components/Geolocation";
import Footer from "../home/components/Footer";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "var(--gray-100" }}>
      <Navbar />
      <Banner />
      <ContactForm />
      <Geolocation />
      <Footer />
    </div>
  );
};

export default Contact;
