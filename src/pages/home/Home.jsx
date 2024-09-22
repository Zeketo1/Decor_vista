import "../../styles/home/Banner_section.css";
import Banner_Section from "./components/Banner_Section";
import Dedication_section from "./components/Dedication_section";
import Designs from "./components/Designs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Geolocation from "./components/Geolocation";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Subscription from "./components/Subscription";

const Home = () => {
  return (
    <>
      <Banner_Section />
      <Services />
      <Designs />
      <Dedication_section />
      <Gallery />
      <Reviews />
      <Subscription />
      <Geolocation />
      <Footer />
    </>
  );
};

export default Home;
