import React from "react";
import Banner from "./components/Banner";
import ProductGallery from "./components/ProdouctGallery";

const Gallery = () => {
  return (
    <div style={{ backgroundColor: "var(--gray-100)" }}>
      <Banner />
      <ProductGallery />
    </div>
  );
};

export default Gallery;
