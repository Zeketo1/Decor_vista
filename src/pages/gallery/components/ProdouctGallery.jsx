import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../../styles/gallery/ProductGallery.css";
import { gallery } from "../../../data/gallery/gallery";
import { GalleryContext } from "../../../context/gallery/GalleryProvider";

const ProductGallery = () => {
  const { addToCart, galleryDatas } = useContext(GalleryContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleClick = (id) => {
    const pageContent = gallery.find((item) => item.id === id);
    if (pageContent) {
      addToCart(pageContent);
    }
  };

  console.log(galleryDatas);
  

  return (
    <div className="gallery__container">
      {isLoading ? (
        <div className="grid-container-loading">
          {gallery.map((_, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? "loading-image row-span-2" : "loading-image"
              }`}
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid-container sm md">
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`image__container ${
                i % 2 === 0 ? "gallery-image row-span-2" : "gallery-image"
              }`}
            >
              <motion.img
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, top: 60 }}
                animate={{ opacity: 1, top: 0 }}
                src={item.image}
                className="gallery-image"
                alt={item.name}
              />
              <div className="product__info">
                <div className="product__price">
                  <p>{item.price}</p>
                </div>
                <div className="product__name add-to-cart">
                  <p>{item.name}</p>
                  <button
                    className="cart__button"
                    onClick={() => handleClick(item.id)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
