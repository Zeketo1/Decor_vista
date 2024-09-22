import Banner from "./components/Banner";
import ProductGallery from "./components/ProdouctGallery";
import Navbar from "../home/components/Navbar";
import Footer from "../home/components/Footer";

const Gallery = () => {
  return (
    <div style={{ backgroundColor: "var(--gray-100)" }}>
      <Navbar />
      <Banner />
      <ProductGallery />
      <Footer />
    </div>
  );
};

export default Gallery;
