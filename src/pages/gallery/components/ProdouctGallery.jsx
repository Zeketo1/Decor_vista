import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../../styles/gallery/ProductGallery.css";
import { gallery } from "../../../data/gallery/gallery";

const ProductGallery = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="gallery__container">
      {isLoading ? (
        <div className="grid-container-loading">
          {gallery.map((image, i) => (
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
          {gallery.map((item, i) => {
            // if (image.endsWith("jpg")) {
              return (
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
                    alt=" "
                  />
                  <div className="product__info">

                    <div className="product__price">
                      <p>{item.price}</p>
                    </div>
                    <div className="product__name add-to-cart">
                      <p>{item.name}</p>  
                      <button className="cart__button">Add to cart</button>
                    </div>
                  </div>
                </div>
              );
            // }
            // else if (item.image.endsWith("mp4")) {
            //   return (
            //     <video
            //       key={i}
            //       className={`${
            //         i % 2 === 0 ? "gallery-video row-span-1" : "gallery-video"
            //       }`}
            //       src={item.image}
            //       loop
            //       autoPlay
            //       muted
            //     ></video>
            //   );
            // }
          })}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
